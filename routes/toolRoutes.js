const express = require("express");
const {
  getTools,
  createTool,
  getTool,
  updateTool,
  deleteTool,
} = require("../controllers/toolController");
const toolRouter = express.Router();

toolRouter.route("/").get(getTools).post(createTool);

toolRouter.route("/:id").get(getTool).patch(updateTool).delete(deleteTool);

module.exports = toolRouter;
