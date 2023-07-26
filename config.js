import {config} from 'dotenv';

config();

export const PUERTO = process.env.port || 3000;
export const DB_HOST = process.env.db_host || 'localhost';
export const DB_PORT = process.env.db_port || 3306;
export const DB_USER = process.env.db_user || 'root';
export const DB_PASS = process.env.db_password || '';
export const DB_NAME = process.env.db_name || 'node_prueba';
