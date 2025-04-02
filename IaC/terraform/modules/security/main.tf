
resource "aws_wafv2_web_acl" "main" {
  name        = "main-waf"
  description = "Main WAF ACL"
  scope       = "REGIONAL"

  default_action {
    allow {}
  }

  rule {
    name     = "BlockXSS"
    priority = 1

    override_action {
      none {}
    }

    statement {
      xss_match_statement {
        field_to_match {
          body {}
        }
        text_transformation {
          priority = 1
          type     = "NONE"
        }
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name               = "BlockXSSMetric"
      sampled_requests_enabled  = true
    }
  }
}

resource "aws_network_acl" "main" {
  vpc_id = aws_vpc.main.id

  ingress {
    protocol   = "tcp"
    rule_no    = 100
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 80
    to_port    = 80
  }

  egress {
    protocol   = -1
    rule_no    = 100
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 0
    to_port    = 0
  }
}
