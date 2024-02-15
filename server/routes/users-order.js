const express = require("express");

const orderControlers = require("../controllers/OrderControlers");
const router = express.Router();

router.post("/new/order", orderControlers.placeOrder);
router.get("/all/orders", orderControlers.getOrders);

module.exports = router;
