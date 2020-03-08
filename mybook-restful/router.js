/*
    路由模块
*/
const express = require('express');
const router = express.Router();
const service = require('./service.js');
// 路由处理
// 渲染主页
router.get('/books', service.allBooks);
// 添加图书
router.post('/books/book', service.addBook);
// 查找图书
router.get('/books/book/:id', service.getBookById);
// 编辑图书信息
router.put('/books/book', service.editBook);
// 删除图书信息
router.delete('/books/book/:id', service.deleteBook);
// 查询天气
router.get('/weather/:id',service.queryWeather);

module.exports = router;
