const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var serviceSchema = new mongoose.Schema({
   
    nom:{
        type:String,
        required:true  
    },
    description:{
        type:String,
        required:true
    }
    
});  
     
//Export the model
module.exports = mongoose.model('Service', serviceSchema);    