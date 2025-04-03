
#!/bin/bash

echo "Building HTML Generator containers..."

# Build React frontend
docker build -t htmlgen-frontend \
  -f docker/htmlgen/Dockerfile.frontend .

# Build API container
docker build -t htmlgen-api \
  -f docker/htmlgen/Dockerfile.api .

echo "Build completed!"
