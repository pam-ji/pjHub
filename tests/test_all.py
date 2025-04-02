
import unittest
from test_redis import TestRedis
from test_postgres import TestPostgres
from test_minio import TestMinio
from test_traefik import TestTraefik
from test_api import TestRestAPI

def run_all_tests():
    test_classes = [
        TestRedis,
        TestPostgres,
        TestMinio,
        TestTraefik,
        TestRestAPI
    ]
    
    loader = unittest.TestLoader()
    suites = [loader.loadTestsFromTestCase(test_class) for test_class in test_classes]
    big_suite = unittest.TestSuite(suites)
    
    runner = unittest.TextTestRunner(verbosity=2)
    runner.run(big_suite)

if __name__ == '__main__':
    run_all_tests()
