const { models } = require("mongoose");
const Booking = require("../Models/bookingModel");


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
  
  module.exports = {
    createBooking,
    getAllBookings,
    getBooking,
    updateBooking,
    deleteBooking,
  };
  