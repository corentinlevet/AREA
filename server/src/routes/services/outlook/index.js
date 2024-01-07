const express = require("express");
const router = express.Router();

const callback = require("./callback");
const baseValues = require("./baseValues");
const actions = require("./actions");

router.get("/", async (req, res) => {
  const url = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${process.env.OUTLOOK_CLIENT_ID}&scope=https://graph.microsoft.com/.default&response_type=code&redirect_uri=${process.env.OUTLOOK_CALLBACK_URL}`;

  res.send(url);
});

router.use("/", callback);
router.use("/", baseValues);
router.use("/action", actions);

module.exports = router;