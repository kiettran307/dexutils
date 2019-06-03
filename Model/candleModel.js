
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = new Schema({
  dateTime: {type: Date, required: true},
  date: {type: Number, required: true, index: -1},
  open: {type: Number, required: true},
  close: {type: Number, required: true},
  high: {type: Number, required: true},
  volume: {type: Number, required: true},
  low: {type: Number, required: true},
  pair_id: {type: Number, required: true, index: true},
  interval: {type: Number, required: true, index: 1},
  resolution: {type: String, required: true},
}, {strict: false});
Model.pre('save', function(next) {
  const now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
Model.index({date: -1, pair_id: 1, interval: 1}, {unique: true});

module.exports = mongoose.model('candle', Model, 'candle');
