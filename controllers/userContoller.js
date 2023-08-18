const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

//create user register user
exports.registerController = async (req, res) => {
    return res.status(201).send({
        success: true,
        message: "New User Created",
    });

};
// get all users
exports.getAllUsers = async (req, res) => {
    return res.status(200).send({
        success: true,
        message: "All User Data",
    });
};
//login
exports.loginController = async (req, res) => {
    return res.status(200).send({
        success: true,
        message: "login successfully",
    });
};