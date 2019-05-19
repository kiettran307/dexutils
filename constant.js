const keys = {
  INSERT_ORDER: "insertOrder",
  FILL_ORDER: "fillOrder",
  CANCEL_ORDER: "cancelOrder",
  REMOVE_ORDER: "removeOrder",
  UPDATE_ORDER_STATUS: "updateOrderStatus",
  INSERT_MATCHER: "insertMatcher",
  TX_STATUS_UPDATE: "txStatusUpdate"
};

const types = {
  ORDER: "order",
  TRANSACTION: "transaction"
};

const orderQueue = "orderQueue";
const replyQueue = "replyQueue";

const orderStatus = {
  OPEN : 0,
  FILLED : 1,
  CANCEL : 2,
  EXPIRED : 3,
  WARNING : 4,
  PENDING :5,
  ERROR : 6,
  CURRENT_FILLING: 7

}
module.exports = {
  keys,
  types,
  orderStatus,
  orderQueue,
  replyQueue
};
