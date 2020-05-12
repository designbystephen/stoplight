#!/bin/bash

rm -rf dist
mkdir dist

cp manifest.json dist/manifest.json
cp icons/*.png dist
cp src/*.html dist
cp src/modules/*.js dist
cp src/modules/*.css dist
