import React from 'react';

export function Cabecalho({ onLogin }) {
	const [email, setEmail] = React.useState();
	const [senha, setSenha] = React.useState();

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
					{!localStorage.getItem('token') && (
						<>
							<label>
								Email
								<input
									type="email"
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</label>
							<label>
								Senha
								<input
									type="password"
									onChange={(e) => {
										setSenha(e.target.value);
									}}
								/>
							</label>
						</>
					)}

					<button
						onClick={() => {
							if (localStorage.getItem('token')) {
								onLogin('');
								localStorage.clear();
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
