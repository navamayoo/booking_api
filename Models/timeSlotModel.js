const mongoose = require("mongoose");

const timeSlotSchema = new mongoose.Schema({
  slot: { type: Number, required: true },
  description: { type: String, required: false },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
});

const Payment = mongoose.model("TimeSlot", timeSlotSchema);

module.exports = Payment;
