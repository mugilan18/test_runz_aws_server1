const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

// load user model
const User = require("../models/Experiments");

// load validator
const validateRegisterInput = require("../validation/register");

// @route GET all /users
// @desc a get req for users routes
// @access public
router.get("/", async function (req, res, next) {
  try {
    const users = await User.find();
    /* 
    // filter in server
    const newUsers = users.map(
      ({ runID, studentName, labType, experimentName }) => ({
        runID,
        studentName,
        labType,
        experimentName,
      })
    ); */
    //console.log(newUsers);
    res.json({ data: users, totalCount: users.length });
  } catch (err) {
    console.error(err);
  }
});

// @route GET single /users/<>
// @desc a get req for users routes
// @access public
router.get("/:_id", async function (req, res, next) {
  try {
    const user = await User.findOne({ _id: req.params._id });
    res.json(user);
  } catch (err) {
    console.error(err);
  }
});

// @route POST /users/create
// @desc a POST req for users registeration
// @access public
router.post("/", function (req, res, next) {
  const { errors, isValid } = validateRegisterInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  //User.findOne()
  const newUser = new User({
    runID: uuidv4(),
    studentName: req.body.studentName,
    labType: req.body.labType,
    experimentName: req.body.experimentName,
  });
  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => console.error(err));
});

// @route PATCH /users/update/<>
// @desc a PATCH req for users registeration
// @access public
router.patch("/:_id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.params._id },
      {
        $set: {
          studentName: req.body.studentName,
          labType: req.body.labType,
          experimentName: req.body.experimentName,
        },
      }
    );
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
  }
});

// @route Delete /users/delete
// @desc a PATCH req for users registeration
// @access public
router.delete("/:_id", async (req, res) => {
  try {
    const removedUser = await User.remove({ _id: req.params._id });
    res.json(removedUser);
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
