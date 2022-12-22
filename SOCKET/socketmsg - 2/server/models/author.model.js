const mongoose = require('mongoose');
const AuthorManager = new mongoose.Schema({
    name: { type: String,requierd : [true, "name is requierd"] , minlength:[3,"name > 3"] },
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorManager);