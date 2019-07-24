const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  ticker: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  quantity: {
    type: Number,
    require: true
  },
  user_id:  {
    type: Object
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

StockSchema.pre("save", async function() {
  // saved!
})

mongoose.model("Stock", StockSchema);
