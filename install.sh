#!/bin/sh
echo "npm install:" && npm install \
	&& echo "bower update:" && bower update \
	&& echo "npm install (in framework directory):" && cd vendor/factory-testing-framework/ && npm install
