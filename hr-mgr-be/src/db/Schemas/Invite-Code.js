const mongoose = require('mongoose');
const { getMeta } = require('../../helper/utlis');

const InviteCodeSchema = new mongoose.Schema({
    // 邀请码
    code: String,
    // 使用邀请码的用户
    user:String,
    meta: getMeta(),
})

mongoose.model('InviteCode', InviteCodeSchema);