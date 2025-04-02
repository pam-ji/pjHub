
resource "aws_api_gateway_rest_api" "main" {
  name = "main-api"
}

resource "aws_api_gateway_resource" "graphql" {
  rest_api_id = aws_api_gateway_rest_api.main.id
  parent_id   = aws_api_gateway_rest_api.main.root_resource_id
  path_part   = "graphql"
}

resource "aws_lambda_function" "graphql" {
  filename      = "lambda/graphql.zip"
  function_name = "graphql-api"
  role         = aws_iam_role.lambda_role.arn
  handler      = "index.handler"
  runtime      = "python3.9"

  environment {
    variables = {
      REDIS_HOST = aws_elasticache_cluster.redis.cache_nodes[0].address
    }
  }
}
