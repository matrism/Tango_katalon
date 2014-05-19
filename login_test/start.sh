#!/bin/sh

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

UPDATE=""
PROFILE=""
STARTSERVER=""
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
            PARAMS=${PARAMS/-p/}
            PARAMS=${PARAMS/$OPTARG/}
            ;;
        s)
            STARTSERVER="1"
            ;;
        *)
            ;;
    esac
done

shift "$((OPTIND-1))"

FILE="./profile/$PROFILE.yml"

if [ ! -z "$UPDATE" ]
then
    npm update
    bower update
fi

if [ ! -z "$STARTSERVER" ]
then
    start ds.sh &
    timeout 5
fi

echo JENKINS_HOME
echo $JENKINS_HOME

if [ ! -z "$PROFILE" ]
then
    if [ ! -f "$FILE" ]
    then
        if [ -z "$JENKINS_HOME"]
        then
            PARAMS+=" --not_jenkins"
        fi
        runProtr $PARAMS
    else 
        PROFILELINE=$(cat $FILE)
        PROFILELINE+=$PARAMS
        if [ -z "$JENKINS_HOME"]
        then
            PROFILELINE+=" --not_jenkins"
        fi
        echo "Running $PROFILELINE"
        command $PROFILELINE
    fi
else 
    if [ -z "$JENKINS_HOME"]
    then
        PARAMS+=" --not_jenkins"
    fi
    runProtr $PARAMS
fi
