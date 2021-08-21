const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const LabrotorySchema = new Schema({
  Physics: [String],
  Chemistry: [String],
  Computer_Programming: [String],
  Basic_electrical_and_electronics: [String],
  Material_Testing_Lab_I: [String],
  Material_Testing_Lab_II: [String],
  Engineering_geology: [String],
  Geotechnical_Engg: [String],
  Fluid_Flow_and_Hydraulic: [String],
  Environmental_Engg: [String],
  Computer_Aided_Design: [String],
  Material_Testing_and_Metallurgy: [String],
  Fluid_Mechanics: [String],
  Manufacturing_Process_Laboratory_I: [String],
  Computational_Methods: [String],
  Fluid_Machinery: [String],
  Electrical_and_Electronics: [String],
  Manufacturing_Process_Lab_II: [String],
  Dynamics_Of_Machines: [String],
  Mechanical_Measurements_And_Metrology: [String],
  Thermal_Engineering_Laboratory_I: [String],
  Computer_Aided_Machine_Drawing: [String],
  Computer_Aided_Machine_Survey: [String],
});

module.exports = Labrotory = mongoose.model("laboratory", LabrotorySchema);
