
const mysql = require('mysql2/promise');
import keys from './keys';
const pool = mysql.createPool(keys.database);


pool.getConnection(function(err: any, conn: any){
        console.log('DB is conected');

    });
export default pool;