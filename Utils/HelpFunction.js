const Booking = require("../Models/bookingModel");

  const isTimeSlotAvailable = async (serviceId, bookingDate, timeSlotId, ) => {
   
    const conflictingBooking = await Booking.findOne({
      serviceId,
      bookingDate,
      timeSlotId,
    });
    
    return !conflictingBooking;
  };
  

  module.exports = {
    isTimeSlotAvailable,

  };
  