
const axios = require('axios');

//운영
const URL =  'https://teamroom.nate.com/api/webhook/69b541cc/ODfMGTHtWeMqBJ5Bpvn52hlY';

//const URL = 'https://teamroom.nate.com/api/webhook/3015ffb1/poi3IhG3LBLoAzkaXSg93GOw';

module.exports = Request = {
    send : (msg) => {
        const headers = {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*'
        }
        const param = {
            content : (msg)
        };

        axios.post(URL, param, {headers})
            .then(res => { 
            console.log('send ok', res.data)
        });
    }
}
