const mongoose = require("mongoose"); // Erase if already required
//todo customer est un fils de user donc il faut faire appel au model user
const UserModel = require("./User.Model");

// Declare the Schema of the Mongo model
var customerSchema = new mongoose.Schema({
     
});

//todo heritag
UserModel.discriminator("Customer", customerSchema);

//Export the model //todo heritage
module.exports = mongoose.model("Customer");
