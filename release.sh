#!/bin/bash

rm -rf ./dist/

pnpm install
pnpm build

cp manifest.json ./dist/
cp -R ./images/ ./dist/

mv ./dist/ ./yt-timestamp-saver/

tar -zcvf release.tar.gz ./yt-timestamp-saver

mv ./yt-timestamp-saver/ ./dist/
