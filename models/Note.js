const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create Schema
const noteSchema = new Schema({
  runID: {
    type: String,
    unique: true,
    index: true,
    sparse: true,
  },
  notes: {
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

module.exports = Note = mongoose.model("notes", noteSchema);
