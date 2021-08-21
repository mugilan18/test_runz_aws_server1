const users = [
  {
    name: "premnath",
    class: "Ist year",
    projects: [0],
  },
  {
    name: "ddvsdvs",
    class: "Ist year",
    projects: [1, 2],
  },
  {
    name: "ddvsdvs",
    class: "IVth year",
    projects: [],
  },
];

const profile = [
  {
    id: 0,
    user: "premnath",
    runID: "522b7d39-3188-490f-9f74-24b4e0539a24",
    labType: "physics",
    experimentName: "Vibration Magnetometer",
  },
  {
    id: 1,
    runID: "5ec84dd7-21da-41f1-84d6-aec6c207f18f",
    user: "ddvsdvs",
    labType: "physics",
    experimentName: "Air Wedge Experiment",
  },
  {
    id: 2,
    runID: "1f26bfc3-8ae6-4a5e-858d-3af4a8d535a7",
    user: "ddvsdvs",
    labType: "chemistry",
    experimentName: "EDTA Method",
  },
];

module.exports = { users, profile };
