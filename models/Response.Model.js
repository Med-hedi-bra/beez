
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var responseSchema = new mongoose.Schema({
   
    
          
          response:{type:String , required:true},
          question: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Question"
        },
        
         
    
    
});  
     
//Export the model
module.exports = mongoose.model('Response', responseSchema);    
