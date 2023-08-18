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
  // return res.status(200).send({
  //   success: true,
  //   message: "Blog Created!",
  // });
  try {
    const { title, description, image, user } = req.body;
    //validation
    if (!title || !description || !image || !user) {
      return res.status(400).send({
        success: false,
        message: "Please Provide ALl Fields",
      });
    }

    const newBlog = new blogModel({ title, description, image, user });
    await newBlog.save();
    return res.status(201).send({
      success: true,
      message: "Blog Created!",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error WHile Creting blog",
      error,
    });
  }
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
