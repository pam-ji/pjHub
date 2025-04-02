
resource "aws_lambda_function" "ml_service" {
  filename         = "lambda/ml_service.zip"
  source_code_hash = filebase64sha256("lambda/ml_service.zip")
  function_name    = "ml-service"
  role            = aws_iam_role.lambda_role.arn
  handler         = "index.handler"
  runtime         = "python3.9"
  timeout         = 900
  memory_size     = 3008

  layers = [
    "arn:aws:lambda:${var.region}:934676248949:layer:pytorch:1",
    "arn:aws:lambda:${var.region}:934676248949:layer:tensorflow:1"
  ]

  environment {
    variables = {
      MODEL_BUCKET = aws_s3_bucket.models.id
    }
  }
}
