const express = require("express");
const router = express.Router();
const path = require("path");
const { spawn, ChildProcess } = require("child_process");

const SCRIPT_PATH = path.join(__dirname, "scripts/script.py");

let values = {};

const convertArrayToObject = (array, key) => {
  const initialValues = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValues);
};

router.post("/", (req, res) => {
  //console.log(req.body);
  values = req.body;
  //console.log(values);
  res.redirect("/runPython");
});

router.get("/test/", function (req, res) {
  const { title } = values;
  if (title === "Polarimeter") {
    const resultantData = [
      {
        x: Number.parseInt(values["value_w7rP6sW"]) || 0,
        y:
          (Number.parseInt(values["value_jmu4V3m"]) +
            Number.parseInt(values["value_K0QMbXR"]) *
              Number.parseInt(values["value_WgYrb86"]) +
            (Number.parseInt(values["value_Yb1l_4X"]) +
              Number.parseInt(values["value_bg5mtIV"]) *
                Number.parseInt(values["value_WgYrb86"]))) /
            2 || 0,
      },
      {
        x: Number.parseInt(values["value_rWyx8n_"]) || 0,
        y:
          (Number.parseInt(values["value_3W1Y0M8"]) +
            Number.parseInt(values["value_Hl2nvwF"]) *
              Number.parseInt(values["value_WgYrb86"]) +
            (Number.parseInt(values["value_eDmmobG"]) +
              Number.parseInt(values["value_g-DX9mr"]) *
                Number.parseInt(values["value_WgYrb86"]))) /
            2 || 0,
      },
      {
        x: Number.parseInt(values["value_wPxV5qp"]) || 0,
        y:
          (Number.parseInt(values["value_eqisow3"]) +
            Number.parseInt(values["value__2kfrYw"]) *
              Number.parseInt(values["value_WgYrb86"]) +
            (Number.parseInt(values["value_cxen-1q"]) +
              Number.parseInt(values["value_4KU56Jt"]) *
                Number.parseInt(values["value_WgYrb86"]))) /
            2 || 0,
      },
      {
        x: Number.parseInt(values["value_beb3Oco"]) || 0,
        y:
          (Number.parseInt(values["value_oG6EW20"]) +
            Number.parseInt(values["value_UUp5w1k"]) *
              Number.parseInt(values["value_WgYrb86"]) +
            (Number.parseInt(values["value_jwBGqyn"]) +
              Number.parseInt(values["value_cL8-L8N"]) *
                Number.parseInt(values["value_WgYrb86"]))) /
            2 || 0,
      },
      {
        x: Number.parseInt(values["value_pnyj1MP"]) || 0,
        y:
          (Number.parseInt(values["value_-C07Mv4"]) +
            Number.parseInt(values["value_GyMoj96"]) *
              Number.parseInt(values["value_WgYrb86"]) +
            (Number.parseInt(values["value_0LwYUrb"]) +
              Number.parseInt(values["value_GYh82ja"]) *
                Number.parseInt(values["value_WgYrb86"]))) /
            2 || 0,
      },
      {
        x: Number.parseInt(values["value_ZnV5jNs"]) || 0,
        y:
          (Number.parseInt(values["value_Bz07JKR"]) +
            Number.parseInt(values["value_qazLz3K"]) *
              Number.parseInt(values["value_WgYrb86"]) +
            (Number.parseInt(values["value_A_SmosA"]) +
              Number.parseInt(values["value_tdrpkoS"]) *
                Number.parseInt(values["value_WgYrb86"]))) /
            2 || 0,
      },
      {
        x: Number.parseInt(values["value_dv8vDGQ"]) || 0,
        y:
          (Number.parseInt(values["value_ZIF67pi"]) +
            Number.parseInt(values["value_F1ALINe"]) *
              Number.parseInt(values["value_WgYrb86"]) +
            (Number.parseInt(values["value_LMHpVF6"]) +
              Number.parseInt(values["value_imVdg_a"]) *
                Number.parseInt(values["value_WgYrb86"]))) /
            2 || 0,
      },
      {
        x: Number.parseInt(values["value_qR1Q1iF"]) || 0,
        y:
          (Number.parseInt(values["value_HkGWk4V"]) +
            Number.parseInt(values["value_c-AlmQV"]) *
              Number.parseInt(values["value_WgYrb86"]) +
            (Number.parseInt(values["value_yvVmwWG"]) +
              Number.parseInt(values["value_3MDN38y"]) *
                Number.parseInt(values["value_WgYrb86"]))) /
            2 || 0,
      },
    ];
    const resultJson = {
      title: title,
      resData: resultantData,
      XTitle: "Concentration 'C' (gm/cc)",
      YTitle: "Angle of Rotation 'θ' (deg)",
    };

    res.json(resultJson);
  }
  if (title === "Lee's Disc Method") {
    const resultantData = [
      {
        x: Number.parseInt(values["value_VF6JwQh"]) || 0,
        y: Number.parseInt(values["value_4sn2i90"]) || 0,
      },
      {
        x: Number.parseInt(values["value_5-KwUYh"]) || 0,
        y: Number.parseInt(values["value_pe5HOK9"]) || 0,
      },
      {
        x: Number.parseInt(values["value_lYXM1vY"]) || 0,
        y: Number.parseInt(values["value__37EXE_"]) || 0,
      },
      {
        x: Number.parseInt(values["value_yidnTp4"]) || 0,
        y: Number.parseInt(values["value_jzq1AXD"]) || 0,
      },
      {
        x: Number.parseInt(values["value_hlj0rMF"]) || 0,
        y: Number.parseInt(values["value_z3uMRI1"]) || 0,
      },
      {
        x: Number.parseInt(values["value_rWFee3C"]) || 0,
        y: Number.parseInt(values["value_0GvtoFL"]) || 0,
      },
    ];
    const resultJson = {
      title: title,
      resData: resultantData,
      XTitle: "Time sec",
      YTitle: "Temperature ‘c",
    };

    res.json(resultJson);
  }
  res.json({});
});

router.get("/", function (req, res) {
  console.log(values);
  const passvalue = [];
  Object.values(values).map((ele) => {
    passvalue.push(ele);
  });
  //console.log(passvalue.join(" "));

  const scriptProcess = runScript(`working ${passvalue.join(" ")}`);
  res.set("Content-Type", "application/json");
  scriptProcess.stdout.pipe(res);
  scriptProcess.stderr.pipe(res);
});

/**
 * @param param {String}
 * @return {ChildProcess}
 */
function runScript(param) {
  /*
  python -u script.py --foo bar
  */
  return spawn("python", ["-u", SCRIPT_PATH, "--foo", param]);
}

module.exports = router;
