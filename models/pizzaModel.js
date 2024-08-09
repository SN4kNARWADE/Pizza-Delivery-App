const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  variants: { type: Array, required: true },
  prices: { type: Array, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true }
}, {
  timestamps: true
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

Pizza.find()
  .then(pizzas => {
    console.log(pizzas);
  })
  .catch(err => {
    console.error(err);
  });

module.exports = Pizza;
