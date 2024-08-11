const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
UserSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true
    },
    
    email:{
        type : String,
        required : true,
        unqiue:true
    },
    password:{
        type : String,
        required : true
    },
    friends:[
        {
        type:String,
        ref:"user",
        required:true
        }
    ],
    Loing_At:{
        type : Date,
        default:Date.now()
    },
    
})

UserSchema.pre('save',async function (next) {
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(5);
    const hashpassword = await bcrypt.hash(this.password,salt)
    this.password = hashpassword
    next();

})

const user = mongoose.model('user',UserSchema)
module.exports = user