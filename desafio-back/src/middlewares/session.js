const jwt = require('jsonwebtoken');
const response = require('../utils/response');

require('dotenv').config();

const verify = async (ctx, next) => {
	const token = ctx.headers.authorization.split(' ')[1];
	try {
		const verification = await jwt.verify(token, process.env.JWT_SECRET);

		ctx.state.userId = verification.id;
		ctx.state.userEmail = verification.email;
	} catch (error) {
		return response(ctx, 403, 'usuário não tem permissão');
	}
	return next();
};

module.exports = { verify };
