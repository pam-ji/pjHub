
# Grafana Dashboards

This directory contains Grafana dashboards for monitoring all services:

- `infrastructure.json`: System-level metrics
- `traefik.json`: Traefik routing and request metrics
- `services.json`: Service-specific metrics (GraphQL, Redis, PostgreSQL, MinIO)

## Integration
- All metrics are collected via Prometheus
- Traefik middlewares automatically add request metrics
- OpenTelemetry collectors are configured for each service
- Custom metrics are exposed on dedicated ports

## Available Metrics
- Request rates and latencies
- Database query performance
- Cache hit rates
- Storage operations
- GraphQL resolver timing
