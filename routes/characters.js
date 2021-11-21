const axios = require("axios");
const express = require("express");
const router = express.Router();
const lib = require("../lib/lib");

router.get("/characters", async (req, res) => {
  try {
    const url = lib.createApiUrl(req);
    const response = await axios.get(url);
    if (response.status === 200) {
      res.json(response.data);
    } else {
      res.status(400).json({ message: "Bad request." });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
