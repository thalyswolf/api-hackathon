'use strict'

const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa');

exports.authenticate = async(data) => {
  console.log(data);
  const res = await Pessoa.findOne({
        usuario: data.usuario,
        senha: data.senha
    });
    console.log(res);
    return res;
}

exports.create = async(data) => {
  var pessoa = new Pessoa(data);
  await pessoa
  .save();
}
