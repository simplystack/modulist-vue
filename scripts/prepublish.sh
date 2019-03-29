#!/usr/bin/env sh

# abort on errors
set -e

# lint
npm run lint

# build
npm run build
