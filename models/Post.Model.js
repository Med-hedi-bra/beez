
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var postSchema = new mongoose.Schema({
   
    
          
          post:{type:String , required:true},
          subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Subject"
        },
        
         
    
     
});  
     
//Export the model
module.exports = mongoose.model('Post', postSchema);    
