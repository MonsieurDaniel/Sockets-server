import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();
//Body-Parser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//CORS
server.app.use( cors({ origin: true, credentials: true}));

//Es importarnte poner el body parser antes de las routes
server.app.use('/', router);

server.inicio( () =>{
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});