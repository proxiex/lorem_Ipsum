const queryString = require('querystring');
const render = require('./render');
const controller =  require('./controller');
const helper = require('./helper');

const home = (request, response) => {
    render.view(request, response, 'public');
    if (request.url === '/') {
        if(request.method.toLowerCase() === 'post'){
            request.on('data', (postBody) => {
                let query;

                if (request.headers['content-type'] === "application/json; charset=utf-8"){
                    query = JSON.parse(postBody.toString())
                } else {
                    query = queryString.parse(postBody.toString());
                }

                const { number, type } = query
                let data;

                data = controller.text(number, type);
                const msg = {
                    "status": "sucess",
                    "type": type,
                    "data": data
                }
                helper.responseMsg(response, 'application/json', JSON.stringify(msg));

            });
        }
    }
}

module.exports.home = home;
