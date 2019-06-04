
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = new Schema({
  pair_id: {type: Number, required: true, index: 1},
  asks: {type: Array, required: true},
  bids: {type: Array, required: true},

}, {strict: false});
module.exports = mongoose.model('deep_chart', Model, 'deep_chart');
