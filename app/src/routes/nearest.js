const express = require("express");
const logfmt = require("logfmt");

const router = express.Router();

router.post("/", (req, res) => {
  if (!req.body.coordinates) {
    return res.status(422).json({ error: "Missing coordinates" });
  }

  const osrm = req.app.get("osrm");
  const options = {
    coordinates: req.body.coordinates,
    number: req.body.number || 1
  };

  try {
    osrm.route(options, (err, result) => {
      if (err) {
        return res.status(422).json({ error: err.message });
      }
      return res.json(result);
    });
  } catch (err) {
    logfmt.error(new Error(err.message));
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;

