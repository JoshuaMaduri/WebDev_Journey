import mongoose from "mongoose";
import crypto from 'crypto'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 5, 
    },
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        unique: true,
        lowercase: true,
        max: 32
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    profilePhoto: {
        type: Object,
        default: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png",
            publicId: null,
        }
    }, 
    bio: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isAccountVerified: {
        type: Boolean,
        default: false
    }

}, {timestamp: true});

const User = mongoose.model('User', UserSchema);
export default User;