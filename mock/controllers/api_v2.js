
const express = require('express');
const apiv2 = express.Router();
const { resultData } = require('../common/utils');

apiv2.post('/', function(req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, resultData);
  setTimeout(() => {
    res.send(ret);
  }, 800);
});

module.exports = apiv2;
