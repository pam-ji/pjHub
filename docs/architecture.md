
# PjHub System Architecture

```mermaid
graph TD
    User[User] --> Frontend[React Frontend]
    Frontend --> |GraphQL| API[GraphQL API]
    API --> |Cache| Redis[Redis Cache]
    API --> |Data| DB[PostgreSQL]
    API --> |Storage| MinIO[MinIO Storage]
    API --> |ML Models| ML[ML Services]
    
    subgraph Frontend Components
        Frontend --> Dashboard[Admin Dashboard]
        Frontend --> HTMLGen[HTML Generator]
        Frontend --> SlaySpire[SlAI The Spire]
    end

    subgraph Backend Services
        API --> Auth[Auth Service]
        API --> RateLimit[Rate Limiter]
        API --> ACL[Access Control]
    end
```

## System Components

1. Frontend (React)
   - Admin Dashboard
   - HTML Generator
   - SlAI The Spire Game

2. Backend (GraphQL + Go)
   - Authentication & Authorization
   - Rate Limiting
   - Access Control Lists
   - ML Model Integration

3. Storage
   - PostgreSQL for structured data
   - Redis for caching
   - MinIO for file storage
