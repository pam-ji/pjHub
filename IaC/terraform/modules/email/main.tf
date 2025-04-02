
provider "aws" {
  endpoints {
    ses = "http://localhost:4566"
  }
}

resource "aws_ses_domain_identity" "main" {
  domain = "local.dev"
}

resource "aws_ses_email_identity" "admin" {
  email = "admin@local.dev"
}
