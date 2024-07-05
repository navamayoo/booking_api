const { models } = require("mongoose");
const User = require("../Models/userModel");

//Create User
const createUser = async (req, res) => {
  try {
    const _user = await User.create(req.body);
    res.status(200).json(_user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

//Get All Users
const getAllUsers = async (req, res) => {
  try {
    const _users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(_users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get the User
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const _user = await User.findById(id);
    res.status(200).json(_user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update the User
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const _user = await User.findByIdAndUpdate(id, req.body);
    // we cannot find any User in database
    if (!_user) {
      return res.status(404).json({ message: `cannot find any User ID ${id}` });
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete a User
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const _user = await User.findByIdAndDelete(id);
    if (!_user) {
      return res.status(404).json({ message: `cannot find any User ID ${id}` });
    }
    res.status(200).json(_user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
