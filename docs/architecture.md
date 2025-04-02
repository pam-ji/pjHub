
# PjHub System Architecture

```mermaid
flowchart TD
    %% Infrastructure Diagram
    classDef storage fill:#FF9999,color:#000000,stroke:#FF6666
    classDef compute fill:#99FF99,color:#000000,stroke:#66CC66
    classDef security fill:#9999FF,color:#000000,stroke:#6666CC
    classDef monitoring fill:#FFFF99,color:#000000,stroke:#CCCC66
    classDef cd fill:#FF99FF,color:#000000,stroke:#FF66FF

    %% Frontend Layer
    subgraph Frontend["Frontend Applications"]
        F[React Frontend]:::compute
        AB[HTML Generator]:::compute
        AC[SlAI The Spire]:::compute
    end

    %% API Layer
    subgraph API["API Layer"]
        E[Traefik]:::compute --> D[GraphQL API]:::compute
        E --> F
        D --> AB
        D --> AC
    end

    %% Data Layer
    subgraph Data["Data Services"]
        B[PostgreSQL]:::storage
        C[Redis]:::compute
        A[MinIO]:::storage
        ES[Elasticsearch]:::storage
        D --> B
        D --> C
        D --> A
        D --> ES
    end

    %% ML Services
    subgraph ML["ML Services"]
        H[ML Training]:::compute
        AD[PyTorch Model]:::compute
        H --> AD
        AD --> B
        AD --> A
    end

    %% Monitoring
    subgraph Monitoring["Monitoring Stack"]
        J[Grafana]:::monitoring
        P[Prometheus]:::monitoring
        I[Elastic SIEM]:::monitoring
        J --> P
        P --> D
        I --> ES
    end

    %% Security
    subgraph Security["Security Components"]
        R[Keycloak]:::security
        V[ModSecurity]:::security
        R --> D
        V --> E
    end

    %% CI/CD
    subgraph CD["CI/CD Pipeline"]
        X[GitHub Actions]:::cd
        Y[ArgoCD]:::cd
        X --> Y
        Y --> E
    end

    %% Styling
    classDef storage fill:#FF9999,color:#000000,stroke:#FF6666
    classDef compute fill:#99FF99,color:#000000,stroke:#66CC66
    classDef security fill:#9999FF,color:#000000,stroke:#6666CC
    classDef monitoring fill:#FFFF99,color:#000000,stroke:#CCCC66
    classDef cd fill:#FF99FF,color:#000000,stroke:#FF66FF
```

## Component Overview

### Frontend Applications
- React-based main interface
- HTML Generator tool
- SlAI The Spire game interface

### API Layer
- Traefik for routing and load balancing
- GraphQL API gateway
- Service mesh integration

### Data Services
- PostgreSQL for persistent storage
- Redis for caching
- MinIO for object storage
- Elasticsearch for logging and search

### ML Services
- PyTorch model training
- ML inference API
- Model storage and versioning

### Monitoring
- Grafana dashboards
- Prometheus metrics
- Elastic SIEM for security monitoring

### Security
- Keycloak authentication
- ModSecurity WAF
- Access control and encryption

### CI/CD Pipeline
- GitHub Actions automation
- ArgoCD GitOps deployment
- Continuous monitoring and testing
