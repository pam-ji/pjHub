
from minio import Minio
import unittest

class TestMinio(unittest.TestCase):
    def setUp(self):
        self.minio_client = Minio(
            '0.0.0.0:9000',
            access_key='minio',
            secret_key='minio123',
            secure=False
        )
        
    def test_bucket_operations(self):
        bucket_name = "test-bucket"
        if not self.minio_client.bucket_exists(bucket_name):
            self.minio_client.make_bucket(bucket_name)
        self.assertTrue(self.minio_client.bucket_exists(bucket_name))
        
if __name__ == '__main__':
    unittest.main()
