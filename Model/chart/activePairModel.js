const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = new Schema(
  {
    pair_id: { type: Number, required: true, index: 1 },
    pair_name: { type: String, required: true },
    _id: String
  },
  { strict: false }
);
module.exports = mongoose.model('active_pair', Model, 'active_pair');
