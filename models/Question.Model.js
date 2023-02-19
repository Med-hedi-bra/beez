const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  responses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Response",
    },
  ],
});

//Export the model
module.exports = mongoose.model("Question", questionSchema);
