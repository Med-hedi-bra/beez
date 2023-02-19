const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var WarningSchema = new mongoose.Schema({
  etat: {
    type: Boolean,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },

  nb: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("Warning", WarningSchema);
