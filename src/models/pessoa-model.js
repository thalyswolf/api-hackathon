'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  nome:{
    type:String,
    required:true
  },
  cpf:{
    type:String,
    required:true
  },
  cep:{
    type:String,
    required:true
  },
  endereco:{
    type:String,
    required:true
  },
  bairro:{
    type:String,
    require:true
  },
  numero:{
    type:String,
    require:true
  },
  uf:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  telefone:{
    type:String,
    require:true
  },
  usuario:{
    type:String
  },
  senha:{
    type:String,
    require:true
  }
});


module.exports = mongoose.model("Pessoa", schema);
