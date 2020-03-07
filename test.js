const db = require('./db.js');

let sql = 'select * from book where id = ?';
let data = [1];
db.base(sql, data, (result) => {
    console.log(result[0]);
});