const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { resultData } = require('../common/utils');

// 获取首页列表
router.get('/getHomeList', function(req, res) {
  res.type('json');
  let ret = {};
  let mockData = [
    { label: '篱笆', value: 0 },
    { label: '茱萸', value: 1 },
    { label: '东篱', value: 2 },
  ];
  
  Object.assign(ret, resultData, {
    data: mockData,
  });
  setTimeout(() => {
    res.send(ret);
  }, 1000);
});

// 提交首页列表
router.post('/saveHomeList', function(req, res) {
  res.type('json');
  let ret = {};
  
  Object.assign(ret, resultData);
  setTimeout(() => {
    res.send(ret);
  }, 800);
});


module.exports = router;
