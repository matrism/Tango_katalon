#!/bin/bash
set -e

echo "Using node `node -v`"
echo "Using `google-chrome --version`"

# TODO: Fix me (bad path?)
mkdir -p reports/html/testing

# Job runner.
cmd_line="node ./tools/jobRunner.js $@"

cmd_line+=" --commit $(git rev-parse HEAD)"

# Protractor.
cmd_line+=" -- ./node_modules/.bin/protractor configs/protractor-conf.js"

# Report logging.
# TODO: Fix me (bad path?)
cmd_line+=" | tee reports/html/testing/report.txt"

# Invocation
echo "> $cmd_line"
eval $cmd_line
