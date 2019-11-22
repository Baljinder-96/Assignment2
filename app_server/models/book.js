const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
   name:{
       type: String,
       required: true,
       min: 3
   },
  author:{
      type:String,
      required:true
  },
  category:{
     type:String,
     required:true
  }, 
  price:{
     type:String,
     required:true
  },
  review:{
      type:String,
      required:true
  }
});

//compilation
module.exports=mongoose.model('books', bookSchema);