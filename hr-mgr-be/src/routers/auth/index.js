const Router = require('@koa/router');
const mongoose = require('mongoose');
const { getBody } = require('../../helper/utlis/index')
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const InviteCode = mongoose.model('InviteCode');

const router = new Router({
    prefix: '/auth',
});
// 注册功能 get
router.get('/register', async (ctx) => {
    ctx.body = '1111';
})
router.post('/register', async (ctx) => {
    const {
        account,
        password,
        inviteCode,
    } = getBody(ctx);
    // console.log(ctx.request.body); 
    //console.log(account);
    if (account === ''|| password === '' || inviteCode === '') {
        ctx.body = {
            code: '0',
            msg: '字段不能为空',
            data: null,
        };
    return;
    }
    // 找有没有邀请码
    const findCode = await InviteCode.findOne({ code: inviteCode }).exec();
    // 如果没找到邀请码
    if ((!findCode) || findCode.user) {
        ctx.body = {
            code: '0',
            msg: '邀请码不正确',
            data: null,
        };
        return;
    }
    // 去找 account 传递上来的 account 用户
    const one = await User.findOne({
        account,
    }).exec();
     
    if (one) {
        // 判断有没有用户
        ctx.body = {
            code: '0',
            msg: '已存在用户',
            data:null,
        }
        return;
    }
    // 创建一个新用户
    const user = new User({
        account,
        password,
    });
  // 把创建的用户同步到mongodb
    const res = await user.save();
    findCode.user = res._id;
    findCode.meta.updateAt = new Date().getTime();
    await findCode.save();
 // 响应成功
    ctx.body = {
        code: '1',
        msg: "注册成功",
        data:res, 
    }
});

// 登录功能
router.post('/login', async (ctx) => {
    const {
        account,
        password,
    } = getBody(ctx);
    if (account === ''|| password === '') {
        ctx.body = {
            code: '0',
            msg: '字段不能为空',
            data: null,
        };
    return;
    }
// findOne 返回的使promise
    const one = await User.findOne({ account, }).exec();

    console.log(one);
    user = {
        account: one.account,
        _id:one._id,
    }
    if (!one) {
        ctx.body = {
            code: 0,
            msg: '用户名或者密码错误',
            data: null,
        };
        return
    }
    if (one.password === password) {
        ctx.body = {
            code: 1,
            msg: '登录成功',
            data: {
                user,
                token: jwt.sign({
                   user,
                }, 'hr-mgr'),
            },
        };
        return
    }
    ctx.body = {
        code: 0,
        msg: '用户名或者密码错误',
        data: null,
    };

});

module.exports =  router;