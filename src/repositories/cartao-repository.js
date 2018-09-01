'use strict'

const mongoose = require('mongoose');
const Cartao = mongoose.model('Cartao');


exports.get = async(data) => {
var res = await Cartao.find({})
return res;
}
exports.create = async(data) => {
  var cartao = new Cartao(data);
  await cartao
  .save();
}
