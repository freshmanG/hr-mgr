const auth = require('./auth/index');
const invite = require('./invite-code/index');
const book = require('./book');
module.exports = (app) => {
    app.use(auth.routes());
    app.use(invite.routes());
    app.use(book.routes());
};