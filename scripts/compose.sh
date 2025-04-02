sh scripts/set_env_variables.sh
cd ./gitOps/docker
podman compose -f ./docker-compose.yml up 
cd ../../

