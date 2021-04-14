const auth = require('./auth/index');
const invite = require('./invite-code/index');
const book = require('./book');
const inventory = require('./inventory-log');
const user = require('./user/index');
module.exports = (app) => {
    app.use(auth.routes());
    app.use(user.routes());
    app.use(invite.routes());
    app.use(book.routes());
    app.use(inventory.routes());
};