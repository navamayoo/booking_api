const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  description: { type: String, required: false },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  paymentDate: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
