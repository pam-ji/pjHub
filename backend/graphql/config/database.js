
const { Pool } = require('pg');
const AWS = require('aws-sdk');

// Configure AWS
const awsConfig = {
  endpoint: 'http://localhost:4566',
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'test',
    secretAccessKey: 'test'
  }
};

AWS.config.update(awsConfig);

const s3 = new AWS.S3();
const ses = new AWS.SES();

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'postgres',
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = {
  pool,
  s3,
  ses,
  aws: AWS
};
