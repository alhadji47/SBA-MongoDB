javascript
const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true,
    maxlength: 50,
  },
  ingredients: [String],
  instructions: String,
  preparationTime: {
    type: Number,
    default: 0,
    min: 0,
  },
});

module.exports = mongoose.model('Recipe', recipeSchema);