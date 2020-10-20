const database = require('../utils/database');

const obterTodosOsJogos = async () => {
	const query = `SELECT * FROM jogos;`;
	const resposta = await database.query(query);
	return resposta.rows;
};

const obterJogosRodada = async (id) => {
	const query = `SELECT * FROM jogos WHERE rodada=${id};`;
	return (await database.query(query)).rows;
};

const editarPartida = async (id, golsCasa, golsVisitante) => {
	const query1 = `UPDATE jogos SET gols_casa=${golsCasa} WHERE id=${id}`;
	const query2 = `UPDATE jogos SET gols_visitante=${golsVisitante} WHERE id=${id}`;

	await database.query(query1);
	await database.query(query2);

	return (
		await database.query(`SELECT * FROM jogos WHERE id=${id}`)
	).rows.shift();
};

module.exports = { obterTodosOsJogos, obterJogosRodada, editarPartida };
