const Jwt = require('jsonwebtoken');
const response = require('../utils/response');
const users = require('../repositories/users');
const Password = require('../utils/password');

require('dotenv').config();

const autenticar = async (ctx) => {
	const { email = null, password = null } = ctx.request.body;
	if (!email || !password)
		return response(ctx, 400, 'requisição mal formatada');

	const usuario = await users.encontrarUsuario(email);
	if (!usuario) return response(ctx, 400, 'email inválido');

	const comparison = await Password.check(password, usuario.senha);
	if (!comparison) return response(ctx, 400, 'senha inválida');

	const token = await Jwt.sign(
		{ id: usuario.id, email: usuario.email },
		process.env.JWT_SECRET || 'cubos',
		{
			expiresIn: '1h',
		}
	);

	return response(ctx, 200, 'usuario autenticado', {
		...usuario,
		token,
	});
};

module.exports = autenticar;
