const mongoose = require("mongoose");
const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");

//GET ALL BLOGS
exports.getAllBlogsController = async (req, res) => {
  return res.status(200).send({
    success: true,
    message: "All Blogs lists",
  });
};

//Create Blog
exports.createBlogController = async (req, res) => {
  return res.status(200).send({
    success: true,
    message: "Blog Created!",
  });
};

//Update Blog
exports.updateBlogController = async (req, res) => {
  return res.status(200).send({
    success: true,
    message: "Blog Updated!",
  });
};

//SIngle Blog
exports.getBlogByIdController = async (req, res) => {
  return res.status(200).send({
    success: true,
    message: "fetch single blog",
  });
};

//Delete Blog
exports.deleteBlogController = async (req, res) => {
  return res.status(200).send({
    success: true,
    message: "Blog Deleted!",
  });
};

//GET USER BLOG
exports.userBlogControlller = async (req, res) => {
  return res.status(200).send({
    success: true,
    message: "user blogs",
  });
};
