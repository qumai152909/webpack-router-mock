const express = require('express');
const apiv1 = express.Router();
const { resultData } = require('../common/utils');

apiv1.get('/', function(req, res) {
  res.type('json');
  let ret = {};
  let mockData = [
    { label: '分类1', value: 1 },
    { label: '分类2', value: 2 },
  ];
  
  Object.assign(ret, resultData, {
    data: mockData,
  });
  setTimeout(() => {
    res.send(ret);
  }, 800);
});

module.exports = apiv1;
