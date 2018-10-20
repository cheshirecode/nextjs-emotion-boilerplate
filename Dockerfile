ARG NODE_IMAGE
FROM node:${NODE_IMAGE} as builder
WORKDIR /app
RUN apk --update add --virtual build-dependencies --no-cache \
  bash \
  lcms2-dev \
  libpng-dev \
  gcc \
  g++ \
  make \
  autoconf \
  automake 
COPY package.json yarn.lock .yarnclean .yarnrc ./
RUN yarn
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
ARG CLEANUP
COPY . .
RUN yarn build \
  && rm -rf node_modules \
  && yarn && yarn autoclean --force \
  && apk del build-dependencies \
  && yarn cache clean

FROM node:${NODE_IMAGE}
WORKDIR /app
RUN apk add --update --no-cache tini
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY --from=builder /app/ ./
EXPOSE ${PORT:-3000}
# Tini is now available at /sbin/tini
ENTRYPOINT ["/sbin/tini", "--"]
CMD yarn start