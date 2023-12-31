
const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;


