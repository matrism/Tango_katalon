#!/bin/bash

if [ "$1" = "-a" ];
then
    set -e
    shift
fi

times="$1"; shift

for i in $(seq "$times");
do
    echo "times ($i of $times):"
    eval $@
    i=$(expr "$i" + 1)
done
