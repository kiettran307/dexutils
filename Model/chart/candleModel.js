
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = new Schema({
  pair_id: { type: Number, index: 1, required: true },
  date: { type: Number, required: true, index: -1 },
  candle: { type: Array, required: true },
  interval: { type: Number, required: true, index: 1 }
},
{ versionKey: false });

Model.index({date: -1, pair_id: 1, interval: 1}, {unique: true});

module.exports = mongoose.model('candle', Model, 'candle');
