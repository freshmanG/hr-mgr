const mongoose = require('mongoose');
const { getMeta } = require('../../helper/utlis');

const UserSchema = new mongoose.Schema({
    account: String,
    password: String,
    meta: getMeta(),
})

mongoose.model('User', UserSchema);