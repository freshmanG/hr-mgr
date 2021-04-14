const mongoose = require('mongoose');
const { getMeta ,preSave} = require('../../helper/utlis');

const InventoryLogSchema = new mongoose.Schema({
    // 出库入库类型
    type: String,
    num: Number,
    user: String,
    

    meta: getMeta(),
})
InventoryLogSchema.pre('save', preSave);
mongoose.model('InventoryLog', InventoryLogSchema);