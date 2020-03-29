const mongoose = require('mongoose');

const UserShema = mongoose.Schema({
    nome:String,
    email:String
},{
   timestamps:true
});

module.exports = mongoose.model("Usuario",UserShema);