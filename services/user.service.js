const got = require('got');
 
module.exports.get = async () => {
    try {
        const body = await got('http://www.mocky.io/v2/5808862710000087232b75ac').json();
        
        //console.log(response.body);
        //=> '<!doctype html> ...'
        return body.clients[0];
    } catch (error) {
        return error.response.body;
        // console.log(error.response.body);
        //=> 'Internal server error ...'
    }
}