usage()
{
cat << EOF
usage: $0 options

This script run the test1 or test2 over a machine.

OPTIONS:
   -h                   Help
   -u                   Use npm update and bower update
   -p profilename       Profile name to run
EOF
}

runProtr() 
{
    echo "Running protractor conf/protractor-conf.js --verbose $@"
    protractor conf/protractor-conf.js --verbose $@
}

UPDATE=""
PROFILE=""
STARTSERVER=""
PARAMS=$@
OPTIND=1

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

if [[ ! -z "$UPDATE" ]]
then
    npm update
    bower update
fi

if [[ ! -z "$STARTSERVER" ]]
then
    start ds.sh
    timeout 5
fi

if [[ ! -z "$PROFILE" ]]
then
    if [[ ! -f "$FILE" ]]
    then
        runProtr $PARAMS
    else 
        echo "Running $(cat $FILE)"
        command $(cat $FILE)
    fi
else 
    runProtr $PARAMS
fi