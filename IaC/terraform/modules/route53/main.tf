
resource "aws_lb" "frontend" {
  name               = "frontend-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.lb.id]
  subnets           = aws_subnet.public[*].id
}

resource "aws_route53_record" "frontend" {
  zone_id = aws_route53_zone.main.id
  name    = "app.local.dev"
  type    = "A"

  alias {
    name                   = aws_lb.frontend.dns_name
    zone_id                = aws_lb.frontend.zone_id
    evaluate_target_health = true
  }
}
