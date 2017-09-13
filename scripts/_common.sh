#!/bin/bash

build() {
  if ! babel --presets es2015,stage-0 -d dist/ src/ ; then
    echo 'Error: Unable to compile the source files to dist/'
  fi
}

debug() {
  if ! node --inspect-brk ./dist/index.js ; then
    echo 'Error: Unable to start the debugger...'
  fi
}

test() {
  if ! ava ; then
    echo 'Error: Unable to start test runner...'
  fi
}