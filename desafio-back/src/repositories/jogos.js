const database = require('../utils/database');

const obterTodosOsJogos = async () => {
	const query = `
	SELECT jogos.*, jogos2.escudo_visitante FROM (
		SELECT jogos.*, url as escudo_casa FROM jogos
		INNER JOIN escudos
		on time_casa = escudos.time
	) as jogos
	INNER JOIN (
		SELECT jogos.*, url as escudo_visitante FROM jogos
		INNER JOIN escudos
		on time_visitante = escudos.time
	) as jogos2
	on jogos.id = jogos2.id`;

	const resposta = await database.query(query);
	return resposta.rows;
};

const obterJogosRodada = async (id) => {
	const query = `
	SELECT jogos.*, jogos2.escudo_visitante FROM (
		SELECT jogos.*, url as escudo_casa FROM jogos
		INNER JOIN escudos
		on time_casa = escudos.time
	) as jogos
	INNER JOIN (
		SELECT jogos.*, url as escudo_visitante FROM jogos
		INNER JOIN escudos
		on time_visitante = escudos.time
	) as jogos2
	on jogos.id = jogos2.id
	where jogos.rodada = ${id}`;

	return (await database.query(query)).rows;
};

const editarPartida = async (id, golsCasa, golsVisitante) => {
	const query = `UPDATE jogos SET gols_casa=${golsCasa},  gols_visitante=${golsVisitante} WHERE id=${id}`;

	await database.query(query);

	const query2 = `
	SELECT jogos.*, jogos2.escudo_visitante FROM (
		SELECT jogos.*, url as escudo_casa FROM jogos
		INNER JOIN escudos
		on time_casa = escudos.time
	) as jogos
	INNER JOIN (
		SELECT jogos.*, url as escudo_visitante FROM jogos
		INNER JOIN escudos
		on time_visitante = escudos.time
	) as jogos2
	on jogos.id = jogos2.id
	where jogos.id = ${id}`;

	return (await database.query(query2)).rows.shift();
};

module.exports = { obterTodosOsJogos, obterJogosRodada, editarPartida };
