const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const Config = new Schema(
  {
    rate: { type: Number},
    feeTokenAddress: { type: String, unique: true, index: 1},
    feeTokenSymbol: { type: String},
    feeTokenName: { type: String},
    feeTokenDecimals: { type: Number},
  },
  { strict: false }
);
Config.pre("save", function(next) {
  const now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
Config.pre("update", function() {
  const tmp = Math.round(new Date().getTime() / 1000);
  this.update({}, { $set: { updateAt: tmp } });
});
module.exports = mongoose.model("config", Config, "config");