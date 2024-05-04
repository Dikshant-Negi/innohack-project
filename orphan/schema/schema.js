const mongoose = require('mongoose');
// Define schema
const Schema = mongoose.Schema;

// Create a new schemaschema/schema.js
const userSchema = new Schema({
  WalletAddress: { type: String, required: true },
  HostName: { type: String, required: true },
  NoOfVolunteers: { type: Number, default: 0 },
  EventDate: { type: Date, required: true },
  Description: { type: String, required: true },
  Address: { type: String, required: true },
  DriveId: { type: String ,required:true}
});


// const vschema=new Schema{
//   Name:{type:String ,required: true },
//   DOB:{type:Date , required:true},
//   Email:{type:String, required:true}

// }

// Create a model based on the schema
module.exports = mongoose.model('User', userSchema); // <-- Corrected model name to 'User'

 // Export the model for use in other parts of your application
