#!/bin/bash

# Dev stage
# Docker : install node and npm saas in a container and not in the local

if (( $# > 1 )); then
    declare image_name=$1;
else
    image_name=js_learning;
fi

docker build -t $image_name .

# For the dev stage (bind mount):
docker container run --mount type=bind,source="$(pwd)/js_learning",target=/app/js_learning -p80:4000 -p4000:80 --detach $image_name

# docker container run $image_name
