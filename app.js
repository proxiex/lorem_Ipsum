const http = require('http');
const router = require('./router');

http.createServer((request, response) => {
    console.log('request ', request.url);
    router.home(request, response);

}).listen(process.env.PORT);
console.log('Sever running on localhost: '+process.env.PORT);