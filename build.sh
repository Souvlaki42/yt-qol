#!/bin/bash
bun install
rm -rf yt-qol
mkdir yt-qol
bun tsc script.ts
cp manifest.json ./yt-qol
cp -R ./images ./yt-qol
mv ./script.js ./yt-qol
zip -r yt-qol.zip ./yt-qol