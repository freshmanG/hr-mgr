const mongoose = require('mongoose');
const { getMeta ,preSave} = require('../../helper/utlis');

const UserSchema = new mongoose.Schema({
    account: String,
    password: String,
    meta: getMeta(),
})
UserSchema.pre('save', preSave);
mongoose.model('User', UserSchema);