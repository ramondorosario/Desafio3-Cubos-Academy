const bcrypt = require('bcryptjs');

const encrypt = async (password) => {
	const hash = await bcrypt.hash(password, 10);
	console.log('senha encripitada: ', hash);
	return hash;
};

const check = async (password, hash) => {
	const comparison = await bcrypt.compare(password, hash);
	return comparison;
};

module.exports = { encrypt, check };
