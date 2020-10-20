let tabela = [];

const atualizarTime = (nomeTime, golsFeitos, golsSofridos, pontuacao) => {
	const id = tabela.findIndex((x) => x.time === nomeTime);
	if (id === -1) {
		tabela.push({
			time: nomeTime,
			jogos: 1,
			pontos: pontuacao,
			vitorias: pontuacao === 3 ? 1 : 0,
			derrotas: pontuacao === 0 ? 1 : 0,
			empates: pontuacao === 1 ? 1 : 0,
			golsFeitos,
			golsSofridos,
			saldo: golsFeitos - golsSofridos,
		});
		return;
	}

	tabela[id].jogos += 1;
	tabela[id].pontos += pontuacao;
	tabela[id].vitorias += pontuacao === 3 ? 1 : 0;
	tabela[id].derrotas += pontuacao === 0 ? 1 : 0;
	tabela[id].empates += pontuacao === 1 ? 1 : 0;
	tabela[id].golsFeitos += golsFeitos;
	tabela[id].golsSofridos += golsSofridos;
	tabela[id].saldo += golsFeitos - golsSofridos;
};

const gerarTabela = (dados) => {
	tabela = [];
	dados.forEach((x) => {
		if (x.gols_casa > x.gols_visitante) {
			atualizarTime(x.time_casa, x.gols_casa, x.gols_visitante, 3);
			atualizarTime(x.time_visitante, x.gols_visitante, x.gols_casa, 0);
		} else if (x.gols_casa < x.gols_visitante) {
			atualizarTime(x.time_casa, x.gols_casa, x.gols_visitante, 0);
			atualizarTime(x.time_visitante, x.gols_visitante, x.gols_casa, 3);
		} else {
			atualizarTime(x.time_casa, x.gols_casa, x.gols_visitante, 1);
			atualizarTime(x.time_visitante, x.gols_visitante, x.gols_casa, 1);
		}
	});
	return tabela;
};

module.exports = gerarTabela;
