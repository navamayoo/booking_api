const { models } = require("mongoose");
const Payment = require("../Models/paymentModel");


//Create Payment
const createPayment = async (req, res) => {
    try {
      const _payment = await Payment.create(req.body);
      res.status(200).json(_payment);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  };
  
  //Get All Payments
  const getAllPayments = async (req, res) => {
    try {
      const _payments = await Payment.find({}).sort({ createdAt: -1 });
      res.status(200).json(_payments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  //Get the Payment
  const getPayment = async (req, res) => {
    try {
      const { id } = req.params;
      const _payment = await Payment.findById(id);
      res.status(200).json(_payment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  //Update the Payment
  const updatePayment = async (req, res) => {
    try {
      const { id } = req.params;
      const _payment = await Payment.findByIdAndUpdate(id, req.body);
      // we cannot find any Payment in database
      if (!_payment) {
        return res
          .status(404)
          .json({ message: `cannot find any Payment ID ${id}` });
      }
      const updatedPayment = await Payment.findById(id);
      res.status(200).json(updatedPayment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  //Delete a Payment
  const deletePayment = async (req, res) => {
    try {
      const { id } = req.params;
      const _payment = await Payment.findByIdAndDelete(id);
      if (!_payment) {
        return res
          .status(404)
          .json({ message: `cannot find any Payment ID ${id}` });
      }
      res.status(200).json(_payment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    createPayment,
    getAllPayments,
    getPayment,
    updatePayment,
    deletePayment,
  };
  