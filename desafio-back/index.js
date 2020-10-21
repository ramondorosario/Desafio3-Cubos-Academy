const Koa = require('koa');

const cors = require('@koa/cors');

const server = new Koa();

const bodyParser = require('koa-bodyparser');
const router = require('./src/routes');

const response = require('./src/utils/response');

server.use(cors());
server.use(bodyParser());
server.use(router.routes());

server.use((ctx) => {
	response(ctx, 405, 'metodo inválido');
});

require('dotenv').config();

const PORT = process.env.PORT || 8081;

server.listen(PORT, () => console.log('Servidor rodando na porta ', PORT));
