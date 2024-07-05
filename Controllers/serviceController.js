const { models } = require("mongoose");
const Service = require("../Models/serviceModel");

//Create Service
const createService = async (req, res) => {
  try {
    const _service = await Service.create(req.body);
    res.status(200).json(_service);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

//Get All Services
const getAllServices = async (req, res) => {
  try {
    const _services = await Service.find({}).sort({ createdAt: -1 });
    res.status(200).json(_services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get the Service
const getService = async (req, res) => {
  try {
    const { id } = req.params;
    const _service = await Service.findById(id);
    res.status(200).json(_service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update the Service
const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const _service = await Service.findByIdAndUpdate(id, req.body);
    // we cannot find any Service in database
    if (!_service) {
      return res
        .status(404)
        .json({ message: `cannot find any Service ID ${id}` });
    }
    const updatedService = await Service.findById(id);
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete a Service
const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const _service = await Service.findByIdAndDelete(id);
    if (!_service) {
      return res
        .status(404)
        .json({ message: `cannot find any Service ID ${id}` });
    }
    res.status(200).json(_service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createService,
  getAllServices,
  getService,
  updateService,
  deleteService,
};
