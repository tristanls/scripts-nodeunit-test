# scripts-nodeunit-test

Script to run [nodeunit](https://github.com/caolan/nodeunit) tests.

## Usage

The script assumes your tests are in the `test` folder. This script does not include a `nodeunit` dependency, so that it can use the `nodeunit` version specified in your project.

Create your `scripts/test.js` file:
```
// scripts/test.js
"use strict";

require("scripts-nodeunit-test")();
```

You can then run `npm test`.
```
    Usage: npm test [-- testFile testFile2]
    Examples:
        npm test
        npm test -- testFile
        npm test -- testFile.js
        npm test -- testFile testFile2.js
```
