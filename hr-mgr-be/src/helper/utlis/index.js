const getMeta = () => {
    return {
        createAt: {
            type: Number,
            default: (new Date()).getTime(),
        },
        updateAt: {
            type: Number,
            default: (new Date()).getTime(),
        },
    } 

}
const getBody = (ctx) => {
    return ctx.request.body || {};
}
const preSave = function (next) {
    if (this.isNew) {
        const ts = Date.now();
        this['meta'].createAt = ts;
        this['meta'].updateAt = ts;
    } else {
        this['meta'].updateAt = Date.now();
    }
    next();

}

module.exports = { getMeta,getBody ,preSave};