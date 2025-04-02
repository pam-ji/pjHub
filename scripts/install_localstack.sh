
#!/bin/bash

# Install Python pip if not installed
curl -O https://bootstrap.pypa.io/get-pip.py
python3 get-pip.py --user

# Install LocalStack using pip
pip install localstack

# Install AWS CLI
pip install awscli-local[ver1]

# Create LocalStack directory
mkdir -p ~/.localstack

# Test LocalStack installation
echo "Testing LocalStack installation..."
localstack --version

echo "LocalStack installation completed!"
