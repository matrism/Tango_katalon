#!/bin/bash
set -e

echo "Using node `node -v`"
echo "Using `google-chrome --version`"

mkdir -p reports/html
chmod 755 start.sh

npm install

# Newer versions of Protractor require versions of chromedriver (and therefore Chrome)
# unavailable in Jenkins. Patch Protractor to load an older but supported version.
echo '{"webdriverVersions": {"selenium": "2.47.1", "chromedriver": "2.14", "iedriver": "2.47.0"}}' \
    > ./node_modules/protractor/config.json

# Sometimes the chromedriver isn't found; run this beforehand to make sure it's there.
./node_modules/protractor/bin/webdriver-manager update \
    --out_dir ./node_modules/protractor/selenium --standalone false

cmd_line="xvfb-run -a -s \"-screen 0 1920x1080x24\""

cmd_line+=" ./node_modules/.bin/protractor configs/protractor-conf.js"

if [ -n "$app_url" ]; then
    cmd_line+=" --app-url $(printf '%q' "$app_url")"
fi

if [ -n "$env_type" ]; then
    cmd_line+=" --env $(printf '%q' "$env_type")"
fi

if [ -n "$test_tags" ]; then
    cmd_line+=" --tags $(printf '%q' "$test_tags")"
fi

if [ -n "$negated_test_tags" ]; then
    cmd_line+=" --@tags $(printf '%q' "$negated_test_tags")"
fi

if [ -n "$wait_timeout" ]; then
    cmd_line+=" --wait_timeout $(printf '%q' "$wait_timeout")"
fi

if [ -n "$test_cycle_name" ]; then
    cmd_line+=" --tcn $(printf '%q' "$test_cycle_name") "
fi

if [ -n "$branch" ]; then
    cmd_line+=" --branch $(printf '%q' "$branch")"
fi

cmd_line+=" --commit $(git rev-parse HEAD)"

cmd_line+=" --build $(printf '%q' "$BUILD_NUMBER")"

cmd_line+=" $additional_protractor_options"

echo "> $cmd_line"

eval $cmd_line
