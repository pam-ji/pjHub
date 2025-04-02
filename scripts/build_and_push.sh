
#!/bin/bash

# Login to Forgejo registry
echo "Logging into Forgejo registry..."
docker login localhost:3001 -u forgejo -p forgejo_password

# Build and push HTML Generator API
echo "Building and pushing HTML Generator API..."
docker build -t localhost:3001/pjhub/htmlgen-api:latest \
  -f gitOps/docker/htmlgen/Dockerfile.api .
docker push localhost:3001/pjhub/htmlgen-api:latest

# Make script executable
chmod +x scripts/build_and_push.sh
