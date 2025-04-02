
module "email" {
  source = "./modules/email"
}

module "route53" {
  source = "./modules/route53"
}

module "api" {
  source = "./modules/api"
}

module "security" {
  source = "./modules/security"
}

module "ml_lambda" {
  source = "./modules/ml_lambda"
}
