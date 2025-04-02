
#!/bin/bash

echo "Building HTML Generator containers..."

# Build React frontend
docker build -t htmlgen-frontend \
  -f gitOps/docker/htmlgen/Dockerfile.frontend .

# Build API container
docker build -t htmlgen-api \
  -f gitOps/docker/htmlgen/Dockerfile.api .

echo "Build completed!"
