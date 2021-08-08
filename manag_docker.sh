#!/bin/bash

# go : launch docker
# clear : clear all container stopped and images
# else : show container and imgs 

if [ "$1" == "go" ]  ; then
    # docker compose build
    # docker compose run -d proj
    docker-compose up
elif [ "$1" == "clear" ] ; then
    docker system prune -a
else
    docker images ls -a
    docker container ls -a
fi