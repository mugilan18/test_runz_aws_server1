const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create Schema
const contentSchema = new Schema({
  title: {
    type: String,
    unique: true,
    index: true,
    sparse: true,
  },
  html: {
    type: String,
    required: true,
    get: function (notes) {
      try {
        return JSON.parse(notes);
      } catch (err) {
        return notes;
      }
    },
    set: function (notes) {
      return JSON.stringify(notes);
    },
  },
});
let Content = mongoose.model("contents", contentSchema);

module.exports = Content;
