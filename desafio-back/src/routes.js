const Router = require('koa-router');

const router = new Router();

const Session = require('./middlewares/session');

const Jogos = require('./controllers/jogos');
const Autenticar = require('./controllers/auth');

router.post('/auth', Autenticar);

router.get('/classificacao', Jogos.classificacao);
router.get('/jogos/:rodada', Jogos.obterRodada);
router.post('/jogos', Session.verify, Jogos.editarPlacar);

module.exports = router;
