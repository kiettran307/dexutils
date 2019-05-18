const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const OrderModel = new Schema(
  {
    signedOrder: {
      exchangeAddress: { type: String },
      makerAddress: { type: String },
      takerAddress: { type: String },
      senderAddress: { type: String },
      feeRecipientAddress: { type: String },
      expirationTimeSeconds: { type: Object },
      salt: { type: Object },
      makerAssetAmount: { type: Object },
      takerAssetAmount: { type: Object },
      makerAssetData: { type: String },
      takerAssetData: { type: String },
      makerFee: { type: Object },
      takerFee: { type: Object },
      signature: { type: String },
      orderHashHex: { type: String, index: 1 }
    },
    statusCode: { type: Number, default: 0, index: 1 }, // new
    availableAmount: { type: Object }, // new
    price: { type: Number }, // new
    marketID: { type: String, default: "WETH-ZRX" }, // new
    takerSide: { type: String, default: "sell" }, // new
    addressFiller: { type: String },
    txHash: { type: String },
    parentID: { type: String },
    txBalance: { type: Number }, //txBalance
    createdAt: { type: Date, index: 1 },
    updatedAt: { type: Date, index: 1 },
    createdAtTimestamp: { type: Number, index: 1 },
    updatedAtTimestamp: { type: Number, index: 1 },
    blockNumber: { type: Number },
    actualTxCost: { type: String }
  },
  { strict: false }
);
OrderModel.pre("save", function(next) {
  const now = new Date();
  const tmp = Math.round(new Date().getTime() / 1000);
  if (!this.createdAt) {
    this.createdAt = now;
  }
  if (!this.createdAtTimestamp) {
    this.createdAtTimestamp = tmp;
  }

  next();
});
OrderModel.pre("update", function() {
  const tmp = Math.round(new Date().getTime() / 1000);
  if (!this.updatedAt) {
    this.updatedAt = now;
    this.update({}, { $set: { updateAt: tmp } });
  }
  if (!this.updatedAtTimestamp) {
    this.updatedAtTimestamp = tmp;
  }
});
module.exports = mongoose.model("order", OrderModel, "order");
