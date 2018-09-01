'use strict'

const repository = require('../repositories/pessoa-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');

exports.post = async(req,res,next) =>{
  try {
      await repository.create({
        nome:req.body.nome,
        cpf:req.body.cpf,
        cep:req.body.cep,
        endereco:req.body.endereco,
        bairro:req.body.bairro,
        numero:req.body.numero,
        uf:req.body.uf,
        email:req.body.email,
        telefone:req.body.telefone,
        usuario:req.body.usuario,
        senha:md5(req.body.senha + global.SALT_KEY)
      });
      res.status(201).send({message: 'usuário cadastrado'});
  } catch (e) {
    res.status(404).send({
      message:'Falha na requisição'+e
    })
  }
};

exports.authenticate = async(req,res,next) =>{
  try {
      console.log("Usuario"+req.body.usuario);
      const pessoa = await repository.authenticate({
        usuario:req.body.usuario,
        senha:md5(req.body.senha + global.SALT_KEY)
      });
      if(!pessoa){
        res.status(404).send({
          message:'Aaaah não, usuário ou senha inválidos'
        });
        return;
      }
      const token = await authService.generateToken({
        email:pessoa.email,
        nome:pessoa.nome
      });
      res.status(200).send({
        token: token,
        data:{
          id:pessoa._id,
          email:pessoa.email,
          nome:pessoa.nome
        }
    });
  } catch (e) {
    res.status(400).send({
      message:'Falha no auth'+e
    });
  }
};
