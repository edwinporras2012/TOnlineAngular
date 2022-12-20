import { createPool } from "mysql2/promise";

export async function connect() {
    const conexion =  await createPool({
        host: 'localhost',
        user: 'edwinporras2012',
        password: 'rux69jyf3pta',
        database: 't_online',
        connectionLimit: 10
    });
    return conexion;
}