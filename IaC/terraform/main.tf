
provider "aws" {
  region = "us-east-1"
  endpoints {
    apigateway     = "http://localhost:4566"
    lambda         = "http://localhost:4566"
    s3             = "http://localhost:4566"
    route53        = "http://localhost:4566"
    ec2            = "http://localhost:4566"
    ecr            = "http://localhost:4566"
    ses            = "http://localhost:4566"
  }
  
  skip_credentials_validation = true
  skip_metadata_api_check    = true
  skip_requesting_account_id = true
}

# API Gateway for GraphQL and Admin APIs
resource "aws_api_gateway_rest_api" "graphql" {
  name = "graphql-api"
}

resource "aws_api_gateway_resource" "admin" {
  rest_api_id = aws_api_gateway_rest_api.graphql.id
  parent_id   = aws_api_gateway_rest_api.graphql.root_resource_id
  path_part   = "admin"
}

resource "aws_api_gateway_method" "admin_status" {
  rest_api_id   = aws_api_gateway_rest_api.graphql.id
  resource_id   = aws_api_gateway_resource.admin.id
  http_method   = "GET"
  authorization = "AWS_IAM"
}

resource "aws_api_gateway_integration" "admin_lambda" {
  rest_api_id = aws_api_gateway_rest_api.graphql.id
  resource_id = aws_api_gateway_resource.admin.id
  http_method = aws_api_gateway_method.admin_status.http_method
  type        = "AWS_PROXY"
  uri         = aws_lambda_function.admin_status.invoke_arn
}

# Lambda for GraphQL resolvers
resource "aws_lambda_function" "graphql" {
  filename      = "lambda.zip"
  function_name = "graphql-resolver"
  role         = aws_iam_role.lambda_role.arn
  handler      = "index.handler"
  runtime      = "python3.9"

  environment {
    variables = {
      REDIS_HOST = "redis"
      POSTGRES_HOST = "postgres"
    }
  }
}

# Route53 Configuration
resource "aws_route53_zone" "main" {
  name = "local.dev"
}

# EC2 for Frontend
resource "aws_instance" "frontend" {
  ami           = "ami-12345678"
  instance_type = "t2.micro"
  tags = {
    Name = "frontend-server"
  }
}

# S3 Buckets
resource "aws_s3_bucket" "ml_models" {
  bucket = "ml-models"
}

# Security Group
resource "aws_security_group" "main" {
  name = "main-sg"
  
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
