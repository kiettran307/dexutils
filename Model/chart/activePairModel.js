const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = new Schema(
  {
    pair_id: { type: Number, required: true, index: 1 },
    pair_name: { type: String, required: true },
    token_symbol: { type: String },
    token_address: { type: String, required: true },
    status: { type: String, required: true, default: 0 }
  },
  { strict: false }
);
module.exports = mongoose.model("active_pair", Model, "active_pair");
