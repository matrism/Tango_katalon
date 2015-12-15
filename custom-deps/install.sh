#!/bin/bash
set -e

for dir in */;
do
    echo "> cd $(printf '%q' "$dir") && npm install"
    echo

    cd "$dir"
    npm install

    cd ..
done
