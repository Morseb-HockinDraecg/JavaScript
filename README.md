# JavaScript

[perso] JS zero to basics.

Learning JS vanilla + webpack.

Creating a Docker to have a nodeJS module and npm to install Babel and webpack

The src folder of each project is share with the local and the docker so a modif in the docker change the local file too and vice-versa. Use for dev purpose only !

|---> Script manag_docker.sh
./manag_docker.sh => list images and containers
./manag_docker.sh clear => delete ALL the exited container and images on the system
./manag_docker.sh go [project nb] <dev> => launch the docker-compose of the [project nb], dev is optionnal, it is need to dev phase


|---> Script go.sh
Remplace by the docker-compose.yml

|---> to work in the container
docker exec -it <container_name> sh
|---> then
npm run webpack
npm start
