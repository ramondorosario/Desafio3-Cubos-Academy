import React from 'react';
import './index.css';

import { Cabecalho } from './components/cabecalho/cabecalho';
import { TabelaResultados } from './components/tabela-jogos/tabela_jogos';
import { TabelaBrasileirao } from './components/tabela_brasileirao/tabela_brasileirao';

export default function App() {
	const [token, setToken] = React.useState();
	return (
		<>
			<Cabecalho onLogin={(token) => setToken(token)} token={token} />
			<div className="conteudo">
				<div className="centro">
					<div className="colunas">
						<TabelaResultados token={token} />
						<TabelaBrasileirao />
					</div>
				</div>
			</div>
		</>
	);
}
