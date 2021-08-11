#!/bin/bash

# go : launch docker
# clear : clear all container stopped and images
# else : show container and imgs 

if [ "$1" == "go" ]  ; then
    case $2 in
        "1") 
            if [ "$3" == "dev" ]  ; then
                docker compose -f docker-compose.dev.yml up --build  to-do
            else
                docker compose -f docker-compose.prod.yml up --build  to-do
            fi;;
        "2")
            echo "will be next proj";;
        "3")
            echo "will be, not the next, but the next next proj";;
        *)
            echo "add 1 for to-do project";;
    esac
elif [ "$1" == "clear" ] ; then
    docker system prune -af
    docker volume prune -f
    rmdir 1.\ to-do\ list/node_modules/
    rm -rf 1.\ to-do\ list/dist/
else
    docker images ls -a
    docker container ls -a
fi