
# GraphQL API Documentation

## Endpoints

### System Status
```graphql
query GetSystemStatus {
  getSystemStatus {
    postgres { status, connections }
    redis { status, connectedClients }
    minio { status, buckets }
  }
}
```

### Rate Limiting
- Default: 100 requests/minute
- Authentication required for higher limits

### Access Control
- Public endpoints: Status checks
- Protected endpoints: Admin operations
- ML endpoints: Authenticated users only

## Caching Strategy
1. Redis caches:
   - System status: 30s TTL
   - ML model results: 1h TTL
   - User sessions: 24h TTL

2. Database queries:
   - Write-through caching
   - Cache invalidation on updates
