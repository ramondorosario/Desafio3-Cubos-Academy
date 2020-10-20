const database = require('../utils/database');

const encontrarUsuario = async (email) => {
	const query = `SELECT * FROM users WHERE email = '${email}'`;
	const resultado = await database.query(query);

	return resultado.rows.shift();
};

module.exports = { encontrarUsuario };
