'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  id_pessoa:{
    type:String,
    required:true
  },
  nome:{
    type:String,
    required:true
  },
  numero:{
    type:String,
    required:true
  },
  codigo:{
    type:String,
    required:true
  },
  validade:{
    type:String,
    require:true
  },
  observacao:{
    type:String,
    require:true
  }
});


module.exports = mongoose.model("Cartao", schema);
