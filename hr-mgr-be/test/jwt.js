var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

console.log(token);
jwt.verify(token, 'shhhhh',(err,playload)=> {
    console.log(err, playload);
})