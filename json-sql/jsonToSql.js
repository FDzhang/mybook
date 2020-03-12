/*
说明：
需要两个文件： .json, .sql
结果 ：.json -> .sql

根据Json创建create table的sql语句
.json中可以有多个Json对象
首层对象：键为表名，值为一个对象（第二层对象）
第二层对象：键为列名称，值为注释

只有两种类型 varchar datetime ,字符串和时间
*/
const path = require('path');
const fs = require('fs');

let jsonToSql = (jsonFilePath, sqlFilePath) => {
    fs.readFile(jsonFilePath, 'utf8', (err, content) => {
        if (err) return;
        let items = '';
        let falg = false;
        let sql = '';
        let list = JSON.parse(content)
        for (x in list) {
            for (y in list[x]) {
                if (falg) {
                    items += ','
                } else {
                    falg = true;
                }
                // 包含时间则为datetime类型
                if (list[x][y].toString().includes('时间')) {
                    items += `\`${y}\` datetime DEFAULT NULL COMMENT '${list[x][y]}'`;
                } else {
                    items += `\`${y}\` varchar(255) DEFAULT NULL COMMENT '${list[x][y]}'`;
                }
            }

            sql += `CREATE TABLE \`${x}\` (${items}) ENGINE=InnoDB DEFAULT CHARSET=utf8;`
            items = '';
            falg = false;
        }
        fs.writeFile(sqlFilePath, sql, 'utf8', (err) => {
            console.log('ceate table sql sentence finished!');
        })
    })
};
module.exports = {
    jsonToSql : jsonToSql
};

jsonToSql(path.join(__dirname, 'statistic', 'weather.json'), path.join(__dirname, 'statistic', 'weather.sql'));
