// json-sql 测试
var jsonSql = require('json-sql')({
    separatedValues: false,
    dialect: 'mysql',        // 决定了用什么包裹 name
    namedValues: false,     //false：表示将values填充到arrays
    wrappedIdentifiers: true   //true: 表示 name-> `name`
});


var sql = jsonSql.build({
    type: 'insert',  //类型
    table: 'city',   //表
    values: {
        "cityId": 39,
        "counname": "中国",
        "ianatimezone": "Asia/Shanghai",
        "name": "上海市",
        "pname": "上海市",
        "secondaryname": "上海市",
        "timezone": "8"
    }
});

console.log(sql.query);