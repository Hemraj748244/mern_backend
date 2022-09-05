const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
 name : {
     type: String,
     required : true,
 },
 email : {
     type : String,
     required : true,
     unique : true,
 },
 password : {
     type : String,
     required : true,
 },
 phonenumber : {
     type: Number,
     required : true,
},
date : {
    type : Date,
    default : Date.now,
}
});
const User = mongoose.model('USER',usersSchema);
module.exports = User;