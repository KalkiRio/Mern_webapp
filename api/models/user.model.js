import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required: true,
        unique: true,
        minlength: 5
    },
    email: {
        type : String,
        required: true,
        unique: true
    },
    password: {
        type : String,
        required: true,
        minlength: 5
    }

},{timestamp: true});

const User = mongoose.model('User', userSchema);
export default User;