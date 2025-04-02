
#!/bin/bash

echo "Building SlAI The Spire containers..."

# Build PyTorch ML container
docker build -t slaithespire-ml \
  --build-arg PYTORCH_VERSION=2.0.0 \
  -f gitOps/docker/slaithespire/Dockerfile.ml .

# Build API container
docker build -t slaithespire-api \
  -f gitOps/docker/slaithespire/Dockerfile.api .

echo "Build completed!"
