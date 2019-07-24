const router = require("express").Router();
const mongoose = require("mongoose");

const Stock = mongoose.model("Stock");

router.post("/add", async (req, res) => {
  try {  
    const stock = await Stock.create(req.body);
    return res.json({ stock });

  } catch (err) {
    return res.status(400).json({ error: "Stock registration to user failed" });
  }
});

router.get("/list", async (req, res) => {

  const user_id = { user_id: req.userId };

  Stock.find({user_id}, function(err, stocks) {
    return res.json({ stocks });
  })
});





module.exports = router;
