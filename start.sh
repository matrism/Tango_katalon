#!/bin/bash
usage()
{
cat << EOF
usage: $0 options

This script run the test1 or test2 over a machine.

OPTIONS:
    -h                  Help
    -s                  Start Selenium server before tests  
    -u                  Use npm update and bower update before tests
    -p profilename      Profile name to run
EOF
}

runProtr() 
{
   if [ -d ../../.git ];
   then
       repo_info_options+=" --branch $(git rev-parse --abbrev-ref HEAD)"
       repo_info_options+=" --commit $(git rev-parse HEAD)"
   fi

   cmd="./node_modules/protractor/bin/protractor configs/protractor-conf.js --verbose $@ $repo_info_options"

   echo $@
    echo "Running $cmd"
    eval "$cmd"
}

./node_modules/protractor/bin/webdriver-manager update --out_dir ./node_modules/protractor/selenium --standalone false

UPDATE=""
PROFILE=""
PARAMS=$@
OPTIND=1
PROFILELINE=""

shift "$((OPTIND-1))"

FILE="./profiles/$PROFILE.yml"

if [ ! -z "$UPDATE" ]
then
    npm update
    bower update
fi

if [ ! -z "$PROFILE" ]
then
    if [ ! -f "$FILE" ]
    then
        runProtr $PARAMS
    else 
        PROFILELINE=$(cat $FILE)
        PROFILELINE+=$PARAMS
        echo "Running $PROFILELINE"
        command $PROFILELINE
    fi
else 
    runProtr $PARAMS
fi
