const mysql = require('mysql');

exports.base = (sql, data, callback) => {
    // 创建数据库连接
    const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'book'
    });
    // 执行连接操作
    connection.connect();
    // 操作数据库(数据库操作也是异步的)
    connection.query(sql,data,function (error,results) {
        if (error) throw error;
        callback(results);
    });
    // 关闭数据库
    connection.end();
};