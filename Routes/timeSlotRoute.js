const express = require("express");
const router = express.Router();
const {
  createTimeSlot,
  getTimeSlots,
  getTimeSlotById,
  updateTimeSlot,
  deleteTimeSlot,
} = require("../Controllers/timeSlotController");

// routes/timeSlotRoute.js

//Get All TimeSlots
router.get("/timeSlots", getTimeSlots);

//Get the TimeSlot
router.get("/timeSlot/:id", getTimeSlotById);

//Create TimeSlot
router.post("/timeSlot", createTimeSlot);

//put the TimeSlot
router.put("/timeSlot/:id", updateTimeSlot);

//Delete the TimeSlot
router.delete("/timeSlot/:id", deleteTimeSlot);

module.exports = router;
