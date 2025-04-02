
import requests
import unittest

class TestRestAPI(unittest.TestCase):
    def setUp(self):
        self.base_url = 'http://0.0.0.0:5000/api'
        
    def test_health_check(self):
        response = requests.get(f'{self.base_url}/health')
        self.assertEqual(response.status_code, 200)
        
    def test_ml_models_endpoint(self):
        response = requests.get(f'{self.base_url}/models')
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.json(), list)
        
if __name__ == '__main__':
    unittest.main()
