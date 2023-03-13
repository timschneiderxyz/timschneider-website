#!/bin/sh
# This shell script runs `npm install` if either the `package-lock.json` file or
# the `node_modules` directory is not present.

cd /app
if [ ! -f "package-lock.json" ] || [ ! -d "node_modules" ]; then
  npm install
fi
