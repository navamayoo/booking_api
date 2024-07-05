const { models } = require("mongoose");
const TimeSlot = require("../Models/timeSlotModel");

// Create a new time slot
const createTimeSlot = async (req, res) => {
  try {
    const { slot, description, startTime, endTime } = req.body;
    const newTimeSlot = new TimeSlot({ slot, description, startTime, endTime });
    const savedTimeSlot = await newTimeSlot.save();
    res.status(201).json(savedTimeSlot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all time slots
const getTimeSlots = async (req, res) => {
  try {
    const timeSlots = await TimeSlot.find();
    res.status(200).json(timeSlots);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single time slot by ID
const getTimeSlotById = async (req, res) => {
  try {
    const timeSlot = await TimeSlot.findById(req.params.id);
    if (!timeSlot) {
      return res.status(404).json({ error: "TimeSlot not found" });
    }
    res.status(200).json(timeSlot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a time slot by ID
const updateTimeSlot = async (req, res) => {
  try {
    const { slot, description, startTime, endTime } = req.body;
    const updatedTimeSlot = await TimeSlot.findByIdAndUpdate(
      req.params.id,
      { slot, description, startTime, endTime },
      { new: true, runValidators: true }
    );
    if (!updatedTimeSlot) {
      return res.status(404).json({ error: "TimeSlot not found" });
    }
    res.status(200).json(updatedTimeSlot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a time slot by ID
const deleteTimeSlot = async (req, res) => {
  try {
    const deletedTimeSlot = await TimeSlot.findByIdAndDelete(req.params.id);
    if (!deletedTimeSlot) {
      return res.status(404).json({ error: "TimeSlot not found" });
    }
    res.status(200).json({ message: "TimeSlot deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createTimeSlot,
  getTimeSlots,
  getTimeSlotById,
  updateTimeSlot,
  deleteTimeSlot,
};
