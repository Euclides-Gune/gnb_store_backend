const Pool = require('pg').Pool;

const pool = new Pool({
   host: 'localhost',
   user: 'postgres',
   port: 5432,
   password: '5537post',
   database: 'gnb_store' 
});

module.exports = pool;