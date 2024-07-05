const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  bookingDate: { type: Date, required: true },
  timeSlotId: { type: mongoose.Schema.Types.ObjectId, ref: 'TimeSlot', required: true },
  //status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' },
  notes: { type: String },
  paymentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
