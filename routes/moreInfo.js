const router = require("express").Router();

const MetaInfo = require("../models/MetaInfo");

router.post("/", function (req, res, next) {
    const newMetaInfo = new MetaInfo({
        id: req.body.experimentno,
        ProcedureName: req.body.experiment,
        labtype: req.body.lab,
        department: req.body.department,
        year: req.body.year,
        college: req.body.college,
    });
    newMetaInfo
        .save()
        .then((content) => res.json(content))
        .catch((err) => console.error(err));
});

router.patch("/:_id", async (req, res) => {
    try {
        const modifiedMetaInfo = await MetaInfo.findOneAndUpdate(
            { id: req.params._id },
            {
                $set: {
                    ProcedureName: req.body.experiment,
                    labtype: req.body.lab,
                    department: req.body.department,
                    year: req.body.year,
                    college: req.body.college,
                },
            },
            { new: true }
        );
        res.json(modifiedMetaInfo);
    } catch (err) {
        console.error(err);
    }
});

router.get("/:_id", async function (req, res, next) {
    try {
        const meta = await MetaInfo.findOne({ id: req.params._id });
        res.json(meta);
    } catch (err) {
        console.error(err);
    }
});

router.get("/", async function (req, res, next) {
    try {
        const metas = await MetaInfo.find();

        res.json({ data: metas, totalCount: metas.length });
    } catch (err) {
        console.error(err);
    }
});


module.exports = router;