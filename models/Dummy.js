const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  handle: {
    type: String,
    required: true,
    max: 40,
  },
  company: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  skills: {
    type: [String],
  },
  completeDate: {
    type: Date,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = Profile = mongoose.model("profiles", profileSchema);
