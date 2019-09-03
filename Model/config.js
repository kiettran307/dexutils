const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const Config = new Schema(
  {
    name: { type: String, required: true, unique : true },
    value: { type: Object, required: true },
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