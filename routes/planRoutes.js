const express = require("express");
const { createPlanController, updatePlanController, deletePlanController, statusPlanController, allPlanController } = require("../controllers/planControlller");

//router object
const router = express.Router();

router.post("/create-plan",createPlanController );
router.put("/update-plan/:planId", updatePlanController);
router.delete("/delete-plan/:planId", deletePlanController);
router.post("/plan-status/:planId", statusPlanController);
router.get("/plan-list", allPlanController);





module.exports = router;