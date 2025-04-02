
import redis
import requests
import unittest

class TestRedis(unittest.TestCase):
    def setUp(self):
        self.redis_client = redis.Redis(host='0.0.0.0', port=6379, db=0)
        
    def test_redis_connection(self):
        self.assertTrue(self.redis_client.ping())
        
    def test_set_get(self):
        self.redis_client.set('test_key', 'test_value')
        self.assertEqual(self.redis_client.get('test_key').decode(), 'test_value')
        
if __name__ == '__main__':
    unittest.main()
