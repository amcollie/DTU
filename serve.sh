#! /bin/sh

npm run build

rm -rf .server
mkdir .server
cp -R 'PHP CODE/.' .server
cp -R dist/. .server

php -S localhost:5174 -t .server