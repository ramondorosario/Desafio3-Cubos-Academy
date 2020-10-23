import React from 'react';

export function Cabecalho({ onLogin }) {
	const [email, setEmail] = React.useState();
	const [senha, setSenha] = React.useState();
	const [erro, setErro] = React.useState(false);
	const [erroUsuario, setErroUsuario] = React.useState(false);
	const [erroSenha, setErroSenha] = React.useState(false);

	return (
		<div className="cabecalho">
			<div className="centro">
				<h1>Brasileirão</h1>
				<form
					className="form"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<div>
						{!localStorage.getItem('token') && (
							<>
								<label>
									Email
									<input
										type="email"
										className={erro ? 'erro' : ''}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
									{erroUsuario && <div>Usuário não existe</div>}
								</label>
								<label>
									Senha
									<input
										type="password"
										className={erro ? 'erro' : ''}
										onChange={(e) => {
											setSenha(e.target.value);
										}}
									/>
									{erroSenha && <div>Senha incorreta</div>}
								</label>
							</>
						)}
					</div>
					<button
						onClick={() => {
							if (localStorage.getItem('token')) {
								onLogin('');
								localStorage.clear();
								setEmail('');
								setSenha('');
								return;
							}

							const dados = {
								email: email,
								password: senha,
							};

							fetch('http://localhost:8081/auth', {
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify(dados),
							})
								.then((res) => res.json())
								.then((res) => {
									if (res.dados.response && res.dados.response.token) {
										const { token } = res.dados.response;
										localStorage.setItem('token', token);
										onLogin(token);
										setErro(false);
										setErroSenha(false);
										setErroUsuario(false);
									} else if (
										res.dados.mensagem === 'requisição mal formatada'
									) {
										alert('[erro]: Todos os campos devem ser preenchidos');
										setErro(true);
									} else if (res.dados.mensagem === 'email inválido') {
										setErroUsuario(true);
									} else {
										setErroSenha(true);
									}
								});
						}}
					>
						{!localStorage.getItem('token') ? 'Logar' : 'Deslogar'}
					</button>
				</form>
			</div>
		</div>
	);
}
