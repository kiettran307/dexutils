const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const MatcherModel = new Schema(
  {
    pairID: { type: Number, required: true, index: 1 },
    pairName: { type: String, required: true },
    type: { type: Number, required: true, index: 1 }, // indexed so better to be Number  0: buy, 1 :sell
    price: { type: Number, required: true, index: 1 },
    totalAmount: { type: Number,required: true },
    orders: { type: Array } // {_id, availableAmount}
  },
  { strict: false }
);
MatcherModel.pre("save", function(next) {
  const now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
MatcherModel.pre("update", function() {
  const tmp = Math.round(new Date().getTime() / 1000);
  this.update({}, { $set: { updateAt: tmp } });
});
module.exports = mongoose.model("matcher", MatcherModel, "matcher");