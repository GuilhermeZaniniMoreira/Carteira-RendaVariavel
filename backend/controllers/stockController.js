const router = require("express").Router();
const mongoose = require("mongoose");

const Stock = mongoose.model("Stock");

router.post("/add", async (req, res) => {
  try {
    const stock = await Stock.create(req.body);
    console.log(req.body)
    console.log(stock)
    return res.json({ stock });
  } catch (err) {
    return res.status(400).json({ error: "Stock registration to user failed" });
  }
});

module.exports = router;
