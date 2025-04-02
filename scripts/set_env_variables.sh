#!/bin/bash

export testuser="testuser"
export POSTGRES_USER="testuser"
export POSTGRES_PASSWORD="testpassword"
export POSTGRES_DB="testdb"
export MINIO_ROOT_USER="minio"
export MINIO_ROOT_PASSWORD="minio123"
export USER="git"
export USER_UID="1000"
export USER_GID="1000"
export FORGEJO__server__SSH_LISTEN_PORT="22"
export FORGEJO__server__SSH_PORT="9022"
echo ------- -------------------- -------
echo ------- Setting Env Varis ----------
echo POSTGRES_USER: $POSTGRES_USER
echo testuser: $testuser
echo POSTGRES_USER: $POSTGRES_USER
echo POSTGRES_PASSWORD: $POSTGRES_PASSWORD
echo POSTGRES_DB: $POSTGRES_DB
echo MINIO_ROOT_USER: $MINIO_ROOT_USER
echo MINIO_ROOT_PASSWORD: $MINIO_ROOT_PASSWORD
echo USER: $USER
echo USER_UID: $USER_UID
echo USER_GID: $USER_GID
echo FORGEJO__server__SSH_LISTEN_PORT: $FORGEJO__server__SSH_LISTEN_PORT
echo FORGEJO__server__SSH_PORT: $FORGEJO__server__SSH_PORT
echo ------- -------------------- -------

ENV_FILE="../docker-compose.yml"