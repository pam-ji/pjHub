
import psycopg2
import unittest

class TestPostgres(unittest.TestCase):
    def setUp(self):
        self.conn = psycopg2.connect(
            host='0.0.0.0',
            database='postgres',
            user='postgres',
            password='postgres'
        )
        
    def test_connection(self):
        cur = self.conn.cursor()
        cur.execute('SELECT 1')
        result = cur.fetchone()
        self.assertEqual(result[0], 1)
        
    def tearDown(self):
        self.conn.close()
        
if __name__ == '__main__':
    unittest.main()
