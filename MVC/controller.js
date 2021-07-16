const express = require("express");
const router = express.Router();

const {
  getAllEntry,
  getSingleEntry,
  updateEntry,
  deleteEntry,
  createEntry,
} = require("./router");

router.route("/").get(getAllEntry).post(createEntry);

router.route("/:id").get(getSingleEntry).patch(updateEntry).delete(deleteEntry);

module.exports = router;
