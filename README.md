# JavaScript

[perso] JS zero to basics.

Learning JS vanilla + webpack.

Creating a Docker to have a nodeJS module and npm to install Babel and webpack

The src folder of each project is share with the local and the docker so a modif in the docker change the local file too and vice-versa. Use for dev purpose only !

Once the docker has been launch you can go, in your browser to :

- "localhost" for the prod phase
- "localhost:4000" for the dev phase

|---> Script manag_docker.sh:  
for details : ./manag_docker.sh info

|---> to work in the container:  
docker exec -it <container_name> sh
|---> then :  
npm run webpack
npm start
