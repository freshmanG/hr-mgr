
// 创建User的Schema 影射了MongoDB下的一个集合，并且他的内容就是集合下文档的构成
// const Userschema = new mongoose.Schema({
//     nickname: String,
//     password: String,
//     age: Number,
// });

// Modal 根据schema生成一套方法集合，这套方法用于操作集合和集合下的文档
// const UserModal = mongoose.model('User', Userschema);
// require('./Schemas/User')

require('./Schemas/User');
require('./Schemas/Invite-Code')
require('./Schemas/Book')

const mongoose = require('mongoose');

const connect = () => {
        return new Promise((resolve) => {
            // 去连接数据库
        mongoose.connect('mongodb://127.0.0.1:27017/hr-mgr',{ useNewUrlParser: true ,useUnifiedTopology: true});
        // 当数据库被打开的时候 提示连接成功
        mongoose.connection.on('open', () => {  
            console.log('连接数据库成功');
            resolve();
            // const user = new UserModal({
            //     nickname: '小明',
            //     password: '123',
            //     age:88,
            // });
            // user.save();
        })
    })
}

module.exports = {
    connect,
};