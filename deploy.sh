#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
mv index.html 404.html

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:schaeferCode/birman.git master:gh-pages

cd -
