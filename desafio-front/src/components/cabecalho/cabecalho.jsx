import React from 'react';

export function Cabecalho(props) {
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
					<button
						onClick={() => {
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
										props.onLogin(token);
									}
								});
						}}
					>
						Logar
					</button>
				</form>
			</div>
		</div>
	);
}
