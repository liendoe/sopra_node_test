const jwt = require('jsonwebtoken');

let user = {
    id:"a0ece5db-cd14-4f21-812f-966633e7be86",
    name:"Britney",
    email:"britneyblankenship@quotezart.com",
    role:"admin"
};
let token = jwt.sign( user, 'my_secret_key', {
    algorithm: "HS256"
});
console.log(token);
let payload = jwt.verify(token,'my_secret_key');
console.log(payload);


 user = {
    id:"a0ece5db-cd14-4f21-812f-966633e7be86",
    name:"Britney",
    email:"britneyblankenship@quotezart.com",
    role:"Unauthorized"
};
 token = jwt.sign( user, 'my_secret_key', {
    algorithm: "HS256"
});
console.log(token);
 payload = jwt.verify(token,'my_secret_key');
console.log(payload);