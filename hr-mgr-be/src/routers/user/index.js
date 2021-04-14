const Router = require('@koa/router');
const mongoose = require('mongoose');
const { getBody } = require('../../helper/utlis');
const config =require('../../project.config')
const User = mongoose.model('User');

const router = new Router({
    prefix: '/users',
});

router.get('/list', async(ctx) => {
    let {
        page,
        size,
        keyword,
    } = ctx.query;
    page = Number(page);
    size = Number(size);

    const query = {};
    if (keyword) {
        query.account = keyword;
    }
    const list= await User
        .find(query)
        .sort({_id:-1})
        .skip((page - 1) * 2)
        .limit(size)
        .exec();
    
    const total = await User.countDocuments().exec();

    ctx.body = {
        msg: '获取用户列表成功',
        data: {
            list,
            page,
            size,
            total,
        },
        code:1,
    }
})
// 删除用户
router.delete('/:id', async(ctx) => {
    const {
        id,
    } = ctx.params;

    const delMsg = await User.deleteOne({ _id: id });

    ctx.body = {
        code: 1,
        msg: '成功删除用户',
        data: delMsg,
    };
})

// 添加用户
router.post('/add', async (ctx) => {
    const {
        account,
        password,
    } = ctx.request.body;

    const user =new User({
        account,
        password:password || '123123',
    });

    const res = await user.save();

    ctx.body = {
        code: 1,
        msg: '添加用户成功',
        data:res,
    };
    
})

// 更新用户密码
router.post('/reset/password', async (ctx) => {
    const {
        id,
    } = ctx.request.body;

    const one = await User.findOne({ _id: id }).exec();

    if (!one) {
        ctx.body = {
            code: 0,
            msg: '找不到用户',
        };
        return;
    }

    one.password = config.DEFAULT_PASSWORD;

    const res = await one.save();

    ctx.body = {
        code: 1,
        data: {
            _id: res._id,
            account: res.account,
        },
        msg:'重置密码成功'
    };
});


module.exports =  router;