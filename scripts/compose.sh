#!/bin/bash
sh scripts/set_env_variables.sh
cd ./docker

podman compose up 
cd ../

