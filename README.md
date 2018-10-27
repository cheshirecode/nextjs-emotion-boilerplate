# cheshirecode-next-boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/cheshirecode/cheshirecode-next-boilerplate.svg)](https://greenkeeper.io/)

- `master` branch deployed (if Travis build passes) at https://cheshirecode-next-boilerplate.now.sh/

|     | React 16+ | Preact + preact-compat | Rebass v3
| --- |  ---  | ---    | ---
| styled-components v4 | :white_check_mark: | :question: [forwardRef PR](https://github.com/developit/preact/pull/1234) | :white_check_mark:
| emotion |  :white_check_mark:  | :x: [dropped support](https://github.com/emotion-js/emotion/pull/896) | :question: [pending as support](https://github.com/rebassjs/rebass/issues/501#issuecomment-424902795)


## Docker command
```
docker run --rm -p 3000:3000 $(docker build \
    --build-arg NODE_ENV=production \
    --build-arg NODE_IMAGE=8.12.0-alpine \
.)
```
