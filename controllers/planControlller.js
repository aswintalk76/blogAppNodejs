const mongoose = require("mongoose");
const planModel = require("../models/planModel");

//Create plan
exports.createPlanController = async (req, res) => {

  try {
    const { name, amount} = req.body;
    //validation
    if (!name || !amount) {
      return res.status(400).send({
        success: false,
        message: "Please Provide ALl Fields",
      });
    }

    const newPlan = new planModel({ name, amount });
    await newPlan.save();
    return res.status(201).send({
      success: true,
      message: "Plan Created!",
      newPlan,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error WHile Creting Plan",
      error,
    });
  }
};

//Update plan
exports.updatePlanController = async (req, res) => {
  // return res.status(200).send({
  //   success: true,
  //   message: "Plan Updated!",
  // });
  try {
    

    const { name, amount } = req.body;
    const planId = req.params.planId;

    const plan = await planModel.findByIdAndUpdate(
      planId,
      { ...req.body },
      { new: true }
    );

    return res.status(200).send({
      success: true,
      message: "Plan Updated!",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error WHile Updating Plan",
      error,
    });
  }
};

//Delete plan
exports.deletePlanController = async (req, res) => {
  // return res.status(200).send({
  //   success: true,
  //   message: "Plan Deleted!",
  // });
  try {
    const plan = await planModel.findOneAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Plan Deleted!",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Erorr WHile Deleteing Plan",
      error,
    });
  }
};

//update plane status
exports.statusPlanController =async (req,res)=>{

}

//GET ALL plann
exports.allPlanController = async (req, res) => {
  // return res.status(200).send({
  //   success: true,
  //   message: "All Plan lists",
  // });
  try {
    const plans = await planModel.find({});
    if (!plans) {
      return res.status(200).send({
        success: false,
        message: "No plan Found",
      });
    }
    return res.status(200).send({
      success: true,
      PlanCount: plans.length,
      message: "All Plan lists",
      plans,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error WHile Getting Plan",
      error,
    });
  }
};

