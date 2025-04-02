
import requests
import unittest

class TestTraefik(unittest.TestCase):
    def test_traefik_dashboard(self):
        response = requests.get('http://0.0.0.0:8080/api/rawdata')
        self.assertEqual(response.status_code, 200)
        
    def test_frontend_routing(self):
        response = requests.get('http://0.0.0.0')
        self.assertEqual(response.status_code, 200)
        
if __name__ == '__main__':
    unittest.main()
