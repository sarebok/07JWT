import pkg from 'pg';
import dotenv from 'dotenv';


dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
    host: process.env.VAR_HOST,
    user: process.env.VAR_USER,
    database: process.env.VAR_DATABASE,
    password: process.env.VAR_PASS,
    port: process.env.VAR_PORT,
});

export default pool;