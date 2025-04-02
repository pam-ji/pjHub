#!/bin/bash

# Datei mit den Environment-Variablen
ENV_FILE="docker-compose.yml"

# Testwerte für das Development
TEST_VALUES=(
  "POSTGRES_USER=testuser"
  "POSTGRES_PASSWORD=testpassword"
  "POSTGRES_DB=testdb"
  "MINIO_ROOT_USER=minio"
  "MINIO_ROOT_PASSWORD=minio123"
  "USER=git"
  "USER_UID=1000"
  "USER_GID=1000"
  "FORGEJO__server__SSH_LISTEN_PORT=22"
  "FORGEJO__server__SSH_PORT=9022"
  # Füge hier weitere Testwerte hinzu
)

# Exportiere die Environment-Variablen aus dem File
while IFS="=" read -r key value; do
  # Setze den Testwert für die Variable
  for test_value in "${TEST_VALUES[@]}"; do
    if [ "$key" = "${test_value%%=*}" ]; then
      value="${test_value#*=}"
      break
    fi
  done
  # Exportiere die Variable
  export "$key=$value"
done < <(grep -oE "^[a-zA-Z_][a-zA-Z_0-9]*=[^ ]+" "$ENV_FILE")

# Überprüfe, ob die Variablen korrekt exportiert wurden
echo "Exportierte Environment-Variablen:"
for key in "${!@}"; do
  echo "$key=${!key}"
done