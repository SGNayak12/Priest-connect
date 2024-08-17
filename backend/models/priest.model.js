import mongoose from "mongoose";


const priestSchema = new mongoose.Schema({
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
    work: {
        type: String,
        required: true, 
    },
    cost:{
        type:Number,
        required:true,
    },
    contact: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now, 
    },
   
});


const Priest = mongoose.model('Priest', priestSchema);

export default Priest;
