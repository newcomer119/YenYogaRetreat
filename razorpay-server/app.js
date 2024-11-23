const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const paymentRoutes = require("./routes/paymentRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


// changed 
app.use(cors({
  origin: '*'
}));
app.use(bodyParser.json());
app.use("/api/payment", paymentRoutes);

app.post('/api/payment/create-order', (req, res) => {
  const orderData = req.body; // Extract data from the request body
  // Process the orderData as needed
  res.status(201).json({ message: "Order created successfully", order: orderData }); // Send a response
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});