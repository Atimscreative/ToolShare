const express = require("express");
const bookingRouter = express.Router();

bookingRouter.route("/").get().post();

bookingRouter.route("/:id").get().post().patch();

bookingRouter.route("/:id/approve").put();
bookingRouter.route("/:id/reject").put();

module.exports = bookingRouter;
