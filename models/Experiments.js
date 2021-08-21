const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create Schema
const userSchema = new Schema({
  runID: {
    type: String,
    unique: true,
    index: true,
    sparse: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  labType: {
    type: String,
    required: true,
  },
  experimentName: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    default: new Date().getTime(),
  },
});

module.exports = User = mongoose.model("experiments", userSchema);
