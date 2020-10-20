const jogos = require('../repositories/jogos');
const gerarTabela = require('../utils/gerar_tabela');
const response = require('../utils/response');

const classificacao = async (ctx) => {
	const todosOsJogos = await jogos.obterTodosOsJogos();
	const tabela = gerarTabela(todosOsJogos);

	const tabelaOrdenada = tabela.sort((a, b) => {
		if (a.pontos > b.pontos) return -1;
		if (a.pontos < b.pontos) return 1;
		if (a.vitorias > b.vitorias) return -1;
		if (a.vitorias < b.vitorias) return 1;
		if (a.saldo > b.saldo) return -1;
		if (a.saldo < b.saldo) return 1;
		if (a.golsFeitos > b.golsFeitos) return -1;
		if (a.golsFeitos > b.golsFeitos) return 1;
		return a.time.localeCompare(b.time);
	});

	tabelaOrdenada.forEach((x, i) => {
		tabelaOrdenada[i].id = i + 1;
	});

	response(ctx, 200, 'tabela de classificação recebida', tabelaOrdenada);
};

const obterRodada = async (ctx) => {
	const { rodada = null } = ctx.params;
	if (!rodada) return response(ctx, 400, 'numero da rodada deve ser informado');
	const jogosDaRodada = await jogos.obterJogosRodada(rodada);

	return response(ctx, 200, `jogos da rodada ${rodada}`, jogosDaRodada);
};

const editarPlacar = async (ctx) => {
	const { id = null, golsCasa = null, golsVisitante = null } = ctx.request.body;
	if (!id || golsCasa === null || golsVisitante === null)
		return response(ctx, 400, 'id, golsCasa ou golsVisitante não informado');

	const resultado = await jogos.editarPartida(id, golsCasa, golsVisitante);
	if (!resultado) return response(ctx, 404, 'partida não encontrada');

	return response(ctx, 201, 'placar atualizado', resultado);
};

module.exports = { classificacao, obterRodada, editarPlacar };
