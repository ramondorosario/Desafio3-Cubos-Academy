const response = (ctx, status, mensagem, resultado) => {
	ctx.status = status;
	ctx.body = {
		status: status >= 200 && status <= 399 ? 'sucesso' : 'erro',
		dados: {
			mensagem,
			response: resultado,
		},
	};
};
module.exports = response;
