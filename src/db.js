import {createPool} from 'mysql2/promise';
import {DB_PORT,DB_HOST,DB_USER,DB_NAME,DB_PASS} from './config.js'
const pool = createPool({
    host:'bozfvelpciqcc3gxgpfx-mysql.services.clever-cloud.com',
    user:'ueoiiqka7ljhcuhm',
    password:'GURHeOBDXTDO1jQYIwzB',
    port:3306,
    database:'bozfvelpciqcc3gxgpfx'
});

export {pool};



