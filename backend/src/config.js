import {config} from 'dotenv';
import {createPool} from 'mysql2/promise';
config();
export const PORT = 4000;
export const HOST = "http:localhost:"+PORT;

export const pool = createPool({
    host: process.env.DBhost,
    user: process.env.DBuser,
    password: process.env.DBpass,
    port: process.env.DBport,
    database: "eventspace"
})