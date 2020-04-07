const {Pool} = require('pg')
const dotenv = require('dotenv')

dotenv.config();

const pool = new Pool({
    user:"postgres",
    password:"J@y@1996",
    host:"localhost",
    port:5432,
    database:"transport"
});

// const databaseConfig = { connectionString: process.env.DATABASE_URL };
// const pool = new Pool(databaseConfig);

module.exports = pool;