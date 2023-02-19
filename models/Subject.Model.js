const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var subjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

//Export the model
module.exports = mongoose.model("Subject", subjectSchema);
