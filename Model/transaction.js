const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const TransactionModel = new Schema(
  {
    orders: { type: Array },
    price: { type: Number },
    txHash: { type: String },
    status: { type: Number },
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
