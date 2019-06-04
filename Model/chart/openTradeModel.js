
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = new Schema({
  pair_id: {type: Number, required: true, index: 1},
  amount: {type: Number, required: true},
  price: {type: Number, required: true},
  timestamp: {type: Number, required: true, index: 1},
  isBuy: {type: Boolean, required: true}
}, {strict: false});
module.exports = mongoose.model('opentrade', Model, 'opentrade');
