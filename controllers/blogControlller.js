const mongoose = require("mongoose");
const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");

//GET ALL BLOGS
exports.getAllBlogsController = async (req, res) => {
  // return res.status(200).send({
  //   success: true,
  //   message: "All Blogs lists",
  // });
  try {
    // const blogs = await blogModel.find({});
    const blogs = await blogModel.find({}).populate("user");

    if (!blogs) {
      return res.status(200).send({
        success: false,
        message: "No Blogs Found",
      });
    }
    return res.status(200).send({
      success: true,
      BlogCount: blogs.length,
      message: "All Blogs lists",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error WHile Getting Blogs",
      error,
    });
  }
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
  // return res.status(200).send({
  //   success: true,
  //   message: "Blog Updated!",
  // });
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const blog = await blogModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "Blog Updated!",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error WHile Updating Blog",
      error,
    });
  }
};

//SIngle Blog
exports.getBlogByIdController = async (req, res) => {
  // return res.status(200).send({
  //   success: true,
  //   message: "fetch single blog",
  // });
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "blog not found with this is",
      });
    }
    return res.status(200).send({
      success: true,
      message: "fetch single blog",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error while getting single blog",
      error,
    });
  }
};

//Delete Blog
exports.deleteBlogController = async (req, res) => {
  // return res.status(200).send({
  //   success: true,
  //   message: "Blog Deleted!",
  // });
  try {
    // const blog = await blogModel.findOneAndDelete(req.params.id);
    const blog = await blogModel.findByIdAndDelete(req.params.id).populate("user");;
    await blog.user.blogs.pull(blog);
    await blog.user.save();
    return res.status(200).send({
      success: true,
      message: "Blog Deleted!",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Erorr WHile Deleteing BLog",
      error,
    });
  }
};

//GET USER BLOG
exports.userBlogControlller = async (req, res) => {
  return res.status(200).send({
    success: true,
    message: "user blogs",
  });
};
