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
module.exports = { getMeta,getBody };