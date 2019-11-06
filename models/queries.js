const { Pool } = require('pg');
const envConfig = require('../utils/env-config');



const pool = new Pool({
  user: envConfig.USER,
  host: envConfig.HOST,
  database: envConfig.DATABASE,
  password: envConfig.PASSWORD,
  port: envConfig.POSTGRESPORT,
});

console.log(pool)

module.exports = pool;