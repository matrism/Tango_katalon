#!/bin/bash
set -e

echo "Using node `node -v`"
echo "Using `google-chrome --version`"

# TODO: Fix me (bad path?)
mkdir -p reports/html/testing

# Dependency setup.
npm install

# Newer versions of Protractor require versions of chromedriver (and therefore Chrome)
# unavailable in Jenkins. Patch Protractor to load an older but supported version.
echo '{"webdriverVersions": {"selenium": "2.47.1", "chromedriver": "2.14", "iedriver": "2.47.0"}}' \
    > ./node_modules/protractor/config.json

# Sometimes the chromedriver isn't found; run this beforehand to make sure it's there.
./node_modules/protractor/bin/webdriver-manager update \
    --out_dir ./node_modules/protractor/selenium --standalone false

# Job runner.
cmd_line="node ./tools/jobRunner.js"

if [ -n "$job_count" ]; then
    cmd_line+=" --jobs $(printf '%q' "$job_count")"
fi

if [ -n "$job_silence_timeout" ]; then
    cmd_line+=" --jobSilenceTimeout $(printf '%q' "$job_silence_timeout")"
fi

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

if [ -n "$branch" ]; then
    cmd_line+=" --branch $(printf '%q' "$branch")"
fi

if [ -n "$cycle" ]; then
    cmd_line+=" --cycle $(printf '%q' "$cycle") "
fi

if [ -n "$app_user" ]; then
    cmd_line+=" --app-user $(printf '%q' "$app_user") "
fi

if [ -n "$app_password" ]; then
    cmd_line+=" --app_password $(printf '%q' "$app_password") "
fi

cmd_line+=" --commit $(git rev-parse HEAD)"

cmd_line+=" --build $(printf '%q' "$BUILD_NUMBER")"

cmd_line+=" $job_runner_options"

# Xvfb.
cmd_line+=" -- xvfb-run -a -s \"-screen 0 1920x1080x24\""

# Protractor.
cmd_line+=" ./node_modules/.bin/protractor configs/protractor-conf.js"

if [ -n "$wait_timeout" ]; then
    cmd_line+=" --wait_timeout $(printf '%q' "$wait_timeout")"
fi

cmd_line+=" $job_options"

# Report logging.
# TODO: Fix me (bad path?)
cmd_line+=" | tee reports/html/testing/report.txt"

# Invocation
echo "> $cmd_line"
eval $cmd_line
