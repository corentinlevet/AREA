const express = require("express");
const router = express.Router();

// Add required modules for Yammer authentication
const axios = require("axios");

// Callback route for Yammer
router.use("/", require("./callback"));

router.get("/", async (req, res) => {
  // Check if the user is already authenticated or implement your authentication logic

  // Construct the Yammer authentication URL

  const yammerAuthUrl = `https://www.yammer.com/oauth2/authorize?client_id=${process.env.YAMMER_CLIENT_ID}&response_type=code&redirect_uri=${process.env.YAMMER_CALLBACK_URL}`;

  // Redirect the user to the Yammer authentication URL
  res.send(yammerAuthUrl);
});

module.exports = router;