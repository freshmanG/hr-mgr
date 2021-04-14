const mongoose = require('mongoose');
const { getMeta ,preSave} = require('../../helper/utlis');

const InviteCodeSchema = new mongoose.Schema({
    // 邀请码
    code: String,
    // 使用邀请码的用户
    user:String,
    meta: getMeta(),
})
InviteCodeSchema.pre('save', preSave);
mongoose.model('InviteCode', InviteCodeSchema);