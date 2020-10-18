import React from 'react';

export function Cabecalho() {
	return (
		<div className="cabecalho">
			<div className="centro">
				<h1>Brasileirão</h1>
				<form className="form">
					<label>
						Email
						<input />
					</label>
					<label>
						Senha
						<input />
					</label>
					<button>Logar</button>
				</form>
			</div>
		</div>
	);
}
