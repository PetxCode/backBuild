const mongoose = require("mongoose");
const model24 = mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  done: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model("model24", model24);
