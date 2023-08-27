const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "title is required"],
    },
    amount: {
      type: String,
    },
  },
  { timestamps: true }
);

const planModel = mongoose.model("Plan", planSchema);

module.exports = planModel;
