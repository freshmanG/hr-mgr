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

module.exports = { getMeta };