// routes/paymentRoutes.js
const express = require("express");
const razorpay = require("../config/razorpay");

const router = express.Router();

// Create an order
router.post("/create-order", async (req, res) => {
  const { amount, currency } = req.body;
  console.log("Creating order with amount:", amount, "currency:", currency);

  const options = {
    amount: amount * 100, // Amount in paise
    currency: currency,
    receipt: "receipt#1",
  };

  try {
    const order = await razorpay.orders.create(options);
    console.log("Order created:", order);
    res.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;