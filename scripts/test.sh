#!/bin/bash

# include common functions
. "./scripts/_common.sh"

# compile the project
build

# start test runner
test
