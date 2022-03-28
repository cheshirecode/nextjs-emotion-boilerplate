# cheshirecode-next-boilerplate


- `master` branch [deployment](https://cheshirecode-next-boilerplate-dac4158.vercel.app/)

## Commands

- install `yarn`
- dev `yarn start`
- build `yarn build`
## Docker
```
docker run --rm -p 3000:3000 $(docker build \
    --build-arg NODE_ENV=production \
    --build-arg NODE_IMAGE=lts-alpine \
.)
```
