const express = require('express');
const apiPage = express.Router();
const _ = require('lodash');
const { resultData } = require('../common/utils');


apiPage.get('/getHomeList', function(req, res) {
  res.type('json');
  let ret = {};
  let mockData = _.times(10, i => ({
    productId: i, // 产品编码
    productName: '产品名称', // 产品名称
    productNum: 4, // 数量
    createTime: '2020-12-30', // 创建日期
    billStatus: 0, // 状态
  }));
  
  Object.assign(ret, resultData, {
    data: {
      rows: mockData,
      pageNum: 1,
      pageSize: 10,
      records: 100,
      totalPage: 10,
    },
  });
  setTimeout(() => {
    res.send(ret);
  }, 800);
});


module.exports = apiPage;
