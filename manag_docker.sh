#!/bin/bash

# ./manag_docker.sh info : for details

if [ "$1" == "go" ]  ; then

    case $2 in
        "1") 
            if [ "$3" == "dev" ]  ; then
                docker compose -f docker-compose.dev.yml up --build to-do
            else
                docker compose -f docker-compose.prod.yml up --build to-do
            fi;;
        "2")
            if [ "$3" == "dev" ]  ; then
                docker compose -f docker-compose.dev.yml up --build blog
            else
                docker compose -f docker-compose.prod.yml up --build blog
            fi;;
        "3")
            if [ "$3" == "dev" ]  ; then
                docker compose -f docker-compose.dev.yml up --build snake
            else
                docker compose -f docker-compose.prod.yml up --build snake
            fi;;
        *)
            echo "add 1 for to-do project, 2 for blog project";;
    esac

elif [ "$1" == "clear" ] ; then
    docker system prune -af
    docker volume prune -f
    rm -rf 1.\ to-do\ list/node_modules/
    rm -rf 1.\ to-do\ list/dist/
    rm -rf 2.\ blog/node_modules/
    rm -rf 2.\ blog/dist/
    rm -rf 3.\ snake/node_modules/
    rm -rf 3.\ snake/dist/

elif [ "$1" == "info" ] ; then
    echo -e "\e[36m";
    echo -e "|--------------------INFO SCRIPT-----------------------|";
    echo -e "./manag_docker.sh \t\t to ls docker images and docker containers";
    echo -e "./manag_docker.sh clear \t to delete all docker images, docker containers, docker volumes and dev folders for projects";
    echo -e " ";
    echo -e "./manag_docker.sh go {X} \t to launch the project X";
    echo -e "./manag_docker.sh go {X} dev \t to launch the project X in dev mode";
    echo -e "   X = 1 : to-do list proj";
    echo -e "   X = 2 : blog proj";
    echo -e "   X = 3 : snake proj";
    echo -e "|----------------END INFO SCRIPT-----------------------|";
    echo -e "\e[0m";

else
    docker images ls -a
    docker container ls -a
fi