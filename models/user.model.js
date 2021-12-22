const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {isEmail} = require('validator');

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    lastname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: isEmail,
            message: '{VALUE} n\'est pas un email valide'
        }
    },
    password: {
        type: String,
        required: true,
        maxlength: 1024
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('User', userSchema);