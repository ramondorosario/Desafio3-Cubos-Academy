const bcrypt = require('bcryptjs');

/** Checa a senha informada com a senha criptografada */
const check = async (password, hash) => {
	const comparison = await bcrypt.compare(password, hash);
	return comparison;
};

module.exports = { check };
