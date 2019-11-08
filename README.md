# Openwhisk Action Utilities
> Utilities for OpenWhisk actions. 

## Status
[![GitHub license](https://img.shields.io/github/license/adobe/openwhisk-action-utils.svg)](https://github.com/adobe/openwhisk-action-utils/blob/master/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues/adobe/openwhisk-action-utils.svg)](https://github.com/adobe/openwhisk-action-utils/issues)
[![CircleCI](https://img.shields.io/circleci/project/github/adobe/openwhisk-action-utils.svg)](https://circleci.com/gh/adobe/openwhisk-action-utils)
[![codecov](https://img.shields.io/codecov/c/github/adobe/openwhisk-action-utils.svg)](https://codecov.io/gh/adobe/openwhisk-action-utils)
[![Greenkeeper badge](https://badges.greenkeeper.io/adobe/openwhisk-action-utils.svg)](https://greenkeeper.io/)
[![LGTM Code Quality Grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/adobe/openwhisk-action-utils.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/adobe/openwhisk-action-utils)

## Usage

### Wrapping

When you have a large number of wrapper functions around your `main` function, use the `wrap`
helper to create a series of wrappers.

```javascript
const { wrap } = require('@adobe/openwhisk-action-utils');

async main(params) {
    ...my action code...
}

module.exports.main = wrap(main)
   .with(logger) // see @adobe/openwhisk-action-utils
   .with(status) // see @adobe/helix-status
   .with(epsagon); // see https://github.com/epsagon/epsagon-node#getting-started-apache-openwhisk
```

## Contributing

If you have suggestions for how this OpenWhisk probot wrapper could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

