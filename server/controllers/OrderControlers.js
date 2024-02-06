const { Order } = require("../models/order");

const placeOrder = async (req, res, next) => {
  const { username, phone, location, quantity } = req.body;
  try {
    const newOrder = await new Order({
      username,
      phone,
      location,
      quantity,
    });
    await newOrder.save();
    res.status(200).json({
      message: "Order created successfully",
    });
  } catch (error) {
    console.log(`Order Error ${error}`);
  }
};

exports.placeOrder = placeOrder;
