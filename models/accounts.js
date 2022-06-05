const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const Account = new Schema({
    username: String,
    password: String,
});

// Model
const BlogPost = mongoose.model('Account', Account);

module.exports =  BlogPost;