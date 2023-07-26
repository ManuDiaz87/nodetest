import {createPool} from 'mysql2/promise';
import {DB_PORT,DB_HOST,DB_USER,DB_NAME,DB_PASS} from './config.js'
const pool = createPool({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASS,
    port:DB_PORT,
    database:DB_NAME
});

export {pool};



