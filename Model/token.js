const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const TokenModel = new Schema(
  {
    _id: { type: String},
    name: { type: String, required: true, index: 1 },
    symbol: { type: String, required: true, index: 1 },
    decimals: { type: Number, required: true },
    address: { type: String, required: true, index: 1 },
    blog: { type: String },
    homePage: { type: String },
    isApproved: { type: Boolean, default: false },
    status: { type: Number, default: 0 },
    isLoading: { type: Boolean, default: false },
    disabledField: { type: Boolean, default: false },
    email: {
      type: String,
      // required: true,
      trim: true,
      // unique: true,
      match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    reddit: { type: String },
    youtube: { type: String },
    linkedin: { type: String },
    github: { type: String },
    slack: { type: String },
    whitepaper: { type: String },
    telegram: { type: String },
    discord: { type: String },
    facebook: { type: String },
    twitter: { type: String }
  },
  { strict: false }
);

TokenModel.pre("save", function(next) {
  const now = new Date();
  if (!this.insertAt) {
    this.insertAt = now;
  }
  next();
});
module.exports = mongoose.model("token", TokenModel, "token");
