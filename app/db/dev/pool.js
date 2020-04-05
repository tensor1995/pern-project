const {Pool} = require('pg')
const dotenv = require('dotenv')

dotenv.config();

const pool = new Pool({
    user:"postgres",
    password:"qwerty",
    host:"localhost",
    port:5432,
    database:"transport"
});

module.exports = pool;