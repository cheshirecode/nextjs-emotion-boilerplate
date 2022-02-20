# cheshirecode-next-boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/cheshirecode/cheshirecode-next-boilerplate.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/cheshirecode/cheshirecode-next-boilerplate.svg?branch=master)](https://travis-ci.org/cheshirecode/cheshirecode-next-boilerplate)

- `master` branch deployed (if) at https://cheshirecode-next-boilerplate.now.sh/

|     | React 16+ | Preact + preact-compat | Rebass v3
| --- |  ---  | ---    | ---
| styled-components v4 | :white_check_mark: | :question: [forwardRef PR](https://github.com/developit/preact/pull/1234) | :white_check_mark:
| emotion |  :white_check_mark:  | :x: [dropped support](https://github.com/emotion-js/emotion/pull/896) | :question: [pending as support](https://github.com/rebassjs/rebass/issues/501#issuecomment-424902795)


## Docker command
```
docker run --rm -p 3000:3000 $(docker build \
    --build-arg NODE_ENV=production \
    --build-arg NODE_IMAGE=lts-alpine \
.)
```
