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
    echo "Running ./node_modules/protractor/bin/protractor configs/protractor-conf.js --verbose $@"
    ./node_modules/protractor/bin/protractor configs/protractor-conf.js --verbose $@
}

./node_modules/protractor/bin/webdriver-manager update --out_dir ./node_modules/protractor/selenium --standalone false

UPDATE=""
PROFILE=""
PARAMS=$@
OPTIND=1
PROFILELINE=""

while getopts ":hup:s" OPTION; do
    case "$OPTION" in
        h)
            usage
            exit 1
            ;;
        u)
            UPDATE="1"
            ;;
        p)
            PROFILE=$OPTARG
            PARAMS=${PARAMS/"-p"/}
            PARAMS=${PARAMS/$OPTARG/}
            ;;
        *)
            ;;
    esac
done

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
