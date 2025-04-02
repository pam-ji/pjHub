provider "aws" {
  region = "your_region"
}

resource "aws_instance" "example" {
  ami           = "your_ami"
  instance_type = "your_instance_type"
  vpc_security_group_ids = [aws_security_group.example.id]
}

resource "aws_security_group" "example" {
  name        = "example"
  description = "Allow inbound traffic"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}