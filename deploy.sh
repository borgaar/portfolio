#!/usr/bin/env bash

set -euo pipefail

DOMAIN="borgarbarland.com"
PORT=2808

COMMIT_HASH=$(git rev-parse --short HEAD)
IMAGE_NAME="$DOMAIN:$COMMIT_HASH"

echo "-> Building new Docker image"
docker build -t $IMAGE_NAME .

echo "-> Stopping and removing old container"
docker rm -f $DOMAIN || true

echo "-> Starting new container"
docker run -p $PORT:8080 --name $DOMAIN --restart unless-stopped -d $IMAGE_NAME
