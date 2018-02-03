var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: String,
    location: String,
    bio: String,
    credits: {type: mongoose.Schema.Types.ObjectId, ref: 'Credit'},
    role: {type: [String], enum: []}
})