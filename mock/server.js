const express = require('express'); //基于node里面的express服务器
const logger = require('morgan');
const cookieParser = require('cookie-parser'); // cookie处理
const cors = require('cors'); // 跨域中间件
const port = 3003;

const server = express(); // app is an instance of express.


server.use(logger(':method :url :status :remote-addr')); // 日志

server.use(cookieParser()); // 解析请求cookie

// parses x-www-form-urlencoded
server.use(express.urlencoded({ extended: false }));

// app.use(express.static('public')) 提供静态文件的访问


/* ========= */

server.use(cors()); // Enable All CORS Requests
server.all('*', function(req, res, next) {
  res.set({
    'Access-Control-Allow-Origin': '*', //任意域名都可以访问,或者基于我请求头里面的域
    'Access-Control-Allow-Headers': '*', //设置请求头格式和类型
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS', //允许支持的请求方式
    'Access-Control-Allow-Credentials': true, //允许后端发送cookie
    'X-Powered-By': true,
    'Content-Type': 'application/json; charset=utf-8', //默认与允许的文本格式:json，和编码格式
  });
  next();
});


// app.METHOD(PATH, HANDLER)
const apiV1 = require('./controllers/api_v1');
const apiV2 = require('./controllers/api_v2');
server.use('/api/v1', apiV1);
server.use('/api/v2', apiV2);

// 首页
const apiHome = require('./controllers/api_home');
server.use('/api/home', apiHome);

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
