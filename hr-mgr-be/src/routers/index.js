const auth = require('./auth/index');
const invite = require('./invite-code/index');
module.exports = (app) => {
    app.use(auth.routes());
    app.use(invite.routes());
};