"use strict";

/*
    Usage: npm test [-- testFile testFile2]
    Examples:
        npm test
        npm test -- testFile
        npm test -- testFile.js
        npm test -- testFile testFile2.js
*/

const path = require("path");

const TEST_DIR = "test";

const script = () =>
{
    const reporter = require("nodeunit").reporters.default;
    let tests = [TEST_DIR];
    if (process.argv.length > 2)
    {
        tests = process.argv
            .slice(2)
            .map(test => path.join(TEST_DIR, test))
            .map(p => path.extname(p) == ".js" ? p : `${p}.js`);
    }

    reporter.run(tests, null, err =>
    {
        if (err)
        {
            process.exit(1);
        }
    });
};

module.exports = script;
