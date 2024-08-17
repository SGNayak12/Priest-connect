import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,  
        unique: true,    
        trim: true,      
    },
    email: {
        type: String,
        required: true,
        unique: true,  
        trim: true,
        lowercase: true, 
    },
    password: {
        type: String,
        required: true,
        minlength: 6,    
    },
    contact: {
        type: String,
        required: true,
    },
    date:{
        type:Date,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now, 
    },
    
});


const User = mongoose.model('User', userSchema);

export default User;
