const Router = require('@koa/router');
const mongoose = require('mongoose');
const User = mongoose.model('User');


const router = new Router({
    prefix: '/auth',
});

router.post('/register', async (ctx) => {
  
    const {
        account,
        password,
    } = ctx.request.body;
    // console.log(ctx.request.body); 
    console.log(account);
    const one = await User.findOne({
        account,
    }).exec();
    if (one) {
        console.log(1);
        ctx.body = {
            code: '0',
            msg: '注册失败',
            data:null,
        }
        return;
    }
    const user = new User({
        account,
        password,
    });
  
    const res = await user.save();

    ctx.body = {
        code: '1',
        msg: "注册成功",
        data:res, 
    }
});
router.get('/register', async (ctx) => {
    ctx.body = '1111';
})
router.post('/login', async (ctx) => {
    
});

module.exports =  router;