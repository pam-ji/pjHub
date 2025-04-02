
# Infrastructure Tests

This directory contains tests for all infrastructure components:

- `test_redis.py`: Tests Redis connection and operations
- `test_postgres.py`: Tests PostgreSQL connection and queries
- `test_minio.py`: Tests MinIO storage operations
- `test_traefik.py`: Tests Traefik routing and dashboard
- `test_api.py`: Tests REST API endpoints
- `test_all.py`: Runs all tests together

## Running Tests

To run all tests:
```bash
python test_all.py
```

To run individual tests:
```bash
python test_redis.py
python test_postgres.py
python test_minio.py
python test_traefik.py
python test_api.py
```
