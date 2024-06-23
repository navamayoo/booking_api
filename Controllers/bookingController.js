const { models } = require("mongoose");
const Booking = require("../Models/bookingModel");
const User = require("../Models/userModel");

//Create Booking
const createBooking = async (req, res) => {
  try {
    const _booking = await Booking.create(req.body);
    res.status(200).json(_booking);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

//Get All Bookings
const getAllBookings = async (req, res) => {
  try {
    const _bookings = await Booking.find({}).sort({ createdAt: -1 });
    res.status(200).json(_bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get the Booking
const getBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const _booking = await Booking.findById(id);
    res.status(200).json(_booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update the Booking
const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const _booking = await Booking.findByIdAndUpdate(id, req.body);
    // we cannot find any Booking in database
    if (!_booking) {
      return res
        .status(404)
        .json({ message: `cannot find any Booking ID ${id}` });
    }
    const updatedBooking = await Booking.findById(id);
    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete a Booking
const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const _booking = await Booking.findByIdAndDelete(id);
    if (!_booking) {
      return res
        .status(404)
        .json({ message: `cannot find any Booking ID ${id}` });
    }
    res.status(200).json(_booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findUserByBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const booking = await Booking.findById(bookingId).populate("userId");

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const user = booking.userId;

    res.json({ userId: user._id, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findBookingsByUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const _bookings = await Booking.find({ userId: userId })
      .populate("userId")
      .populate("serviceId")
      .exec();

    res.status(200).json(_bookings);
  } catch (err) {
    console.error("Error finding bookings by user:", err);
    throw err;
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  getBooking,
  updateBooking,
  deleteBooking,
  findUserByBooking,
  findBookingsByUser,
};
