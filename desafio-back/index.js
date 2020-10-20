const Koa = require('koa');

const server = new Koa();
const bodyParser = require('koa-bodyparser');

const router = require('./src/routes');

server.use(bodyParser());
server.use(router.routes());

server.use((ctx) => {
	ctx.body = 'Metodo Inválido';
});

server.listen('8081', () => console.log('Servidor rodando!'));
