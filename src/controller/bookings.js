const Booking = require("../model/bookings").Booking;

const getRequest = async () => Booking.find();

//Registration Method
const bookingRequest = (body) => {
  const newBooking = new Booking({
    empID: body.empID,
    empVehicleType: body.empVehicleType,
    empVehicleNumber: body.empVehicleNumber,
    empVehicleDescription: body.empVehicleDescription,
    empRequestStart: body.empRequestStart,
    empRequestEnd: body.empRequestEnd,
  });
  return newBooking.save();
};

module.exports = { bookingRequest, getRequest };
