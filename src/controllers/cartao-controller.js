'use strict'

const repository = require('../repositories/cartao-repository');
const guid = require('guid');
const authService = require('../services/auth-service');

exports.get = async(req,res,next) => {
  try {
    var data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message:'Falha na requisição'
    });
  }
}

exports.create = async(req,res,next) =>{
  try {
      //recupera o token
      const token = req.body.token || req.query.token || req.headers['x-access-token'];
      console.log(token);
      //decodifica o token
      const data = await authService.decodeToken(token);

      await repository.create({
        id_pessoa:req.body.id,
        nome:req.body.nome,
        numero:req.body.numero,
        codigo:req.body.codigo,
        validade:req.body.validade,
        observacao:req.body.observacao
      })
      res.status(201).send({message: 'Cartao cadastrado'});
  } catch (e) {
    res.status(400).send({
      message:'Falha na requisição' + e
    })
  }
};
