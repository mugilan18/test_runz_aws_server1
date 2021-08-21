const express = require("express");
const router = express.Router();

const Labrotory = require("../models/Labrotory");

// @route GET /profiles
// @desc a get req for profiles routes
// @access public
router.get("/", async function (req, res, next) {
  try {
    const labrotories = await Labrotory.find();

    res.json(labrotories);
  } catch (err) {
    console.error(err);
  }
});

router.post("/", async function (req, res, next) {
  try{
    const labrotories = await Labrotory.find({});

    if(labrotories.length === 0){

      const newEntry = new Labrotory({
        [req.body.name]: [req.body.experiment,],
      });
      newEntry
        .save()
        .then((result) => res.json(result))
        .catch((err) => console.error(err));
    }else{
      for (const [key, value] of Object.entries(labrotories[0]["_doc"])){
        if(key === req.body.name){
          value.push(req.body.experiment);
          await Labrotory.findOneAndUpdate({_id: labrotories[0]["_doc"]["_id"]}, {[key]: value});
          
          return res.json({"value": "new value updated"});
        }else{
          labrotories[0]["_doc"][req.body.name] = [req.body.experiment];
          await Labrotory.findOne({_id: labrotories[0]["_doc"]["_id"]}, function (err, result) {
            result[req.body.name] = [req.body.experiment];
            result.save();
          })
          
          return res.json({"value": "new entry updated"});
        }
      }
      return res.json({"value": "Labrotory already exists"});
    }
  }catch(err){
    console.error(err);
  }finally{
    
  }

  

});

module.exports = router;
