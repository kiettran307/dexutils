const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const MarketModel = new Schema(
  {
    id: { type: String },
    baseToken: { type: String },
    baseTokenProjectUrl: { type: String },
    baseTokenName: { type: String },
    baseTokenDecimals: { type: Number },
    baseTokenAddress: { type: String },
    quoteToken: { type: String },
    quoteTokenDecimals: { type: Number },
    quoteTokenAddress: { type: String },
    minOrderSize: { type: String },
    pricePrecision: { type: Number },
    priceDecimals: { type: Number },
    amountDecimals: { type: Number },
    asMakerFeeRate: { type: String },
    asTakerFeeRate: { type: String },
    gasFeeAmount: { type: Number },
    supportedOrderTypes: { type: Array },
    marketOrderMaxSlippage: { type: String },
    lastPriceIncrease: { type: String },
    lastPrice: { type: String },
    price24h: { type: String },
    amount24h: { type: String },
    quoteTokenVolume24h: { type: String },
    status: { type: Number, required : true, default : 0 },
  },
  { strict: false }
);
MarketModel.pre("save", function(next) {
  const now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
MarketModel.pre("update", function() {
  const tmp = Math.round(new Date().getTime() / 1000);
  this.update({}, { $set: { updateAt: tmp } });
});
module.exports = mongoose.model("market", MarketModel, "market");
