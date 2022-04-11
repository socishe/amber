const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();
const pause = require('connect-pause');


server.use(pause(350));


server.use(middlewares);



server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
    if (['POST', 'PATCH', 'PUT'].includes(req.method) 
    && req.url.match(/results/)) {
        
        // code for adding new data into the database.json file and handling errors

    
    }
    next();
    
    });

    server.use(router);
    server.listen(3001, () => {
        console.log('JSON Server is running')
    });