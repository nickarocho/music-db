var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    location: String,
    bio: String,
    credits: {type: mongoose.Schema.Types.ObjectId, ref: 'Credit'},
    role: {type: [String], enum: ["Woodwinds", "Brass", "Drummer", "Percussionist", "Guitarist", "Bassist", "Harpist", "Vocalist", "Keyboards", "Strings", "Songwriter", "Recording Engineer", "Producer"]},
    alias: String
});

module.exports = mongoose.model('User', userSchema);