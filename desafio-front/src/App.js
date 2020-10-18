import React from 'react';
import './index.css';

import { Cabecalho } from './components/cabecalho';
import { TabelaResultados } from './components/tabela_jogos';
import { TabelaBrasileirao } from './components/tabela_brasileirao';

export default function App() {
	return (
		<>
			<Cabecalho />
			<div className="conteudo">
				<div className="centro">
					<div className="colunas">
						<TabelaResultados />
						<TabelaBrasileirao />
					</div>
				</div>
			</div>
		</>
	);
}
