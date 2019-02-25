import * as express from 'express';

let api = require('./routes');
let cors = require('cors')
let bodyParser = require('body-parser')
const server = express();
const port = 8080;

server.set('json spaces', 4);
server.disable('etag'); 
server.use(cors())
server.use(bodyParser.json({limit: '1000mb' }));
server.use(bodyParser.urlencoded({ extended: false }));

server.get('/', (req, res) => res.redirect('/api/invited'))
server.use('/api', api)


server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});