const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const TransactionModel = new Schema(
  {
    orders: { type: Array, required: true },
    price: { type: Number, required: true },
    txHash: { type: String, required: true},
    status: { type: Number, required: true},
    addressFiller: { type: String, required: true},
    marketID: { type: String, required: true},
    takerSide: { type: String, required: true}
  },
  { strict: false }
);
TransactionModel.pre("save", function(next) {
  const now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
TransactionModel.pre("update", function() {
  const tmp = Math.round(new Date().getTime() / 1000);
  this.update({}, { $set: { updateAt: tmp } });
});
module.exports = mongoose.model("transaction", TransactionModel, "transaction");
