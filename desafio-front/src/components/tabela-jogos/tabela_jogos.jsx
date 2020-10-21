import React from 'react';

import { GerarResultado } from './gerar_resultado';

export function TabelaResultados({ token, placarAlterado, onPlacar }) {
	const [rodada, setRodada] = React.useState(1);
	const [partidas, setPartidas] = React.useState([]);
	const [carregando, setCarregando] = React.useState(false);

	React.useEffect(() => {
		setCarregando(true);
		fetch(`http://localhost:8081/jogos/${rodada}`)
			.then((res) => res.json())
			.then((partidas) => {
				setCarregando(false);
				setPartidas(partidas.dados.response);
			});
	}, [rodada, placarAlterado]);

	return (
		<div className="partidas">
			<div className="partidas-cabecalho">
				<img
					src="https://systemuicons.com/images/icons/arrow_left.svg"
					alt=""
					className={rodada === 1 ? 'desativado' : ''}
					onClick={() => {
						if (rodada === 1) {
							return;
						}
						setRodada(rodada - 1);
					}}
				/>
				<h2>
					<span>{rodada}</span>ª rodada
				</h2>
				<img
					src="https://systemuicons.com/images/icons/arrow_right.svg"
					alt=""
					className={rodada === 38 ? 'desativado' : ''}
					onClick={() => {
						if (rodada === 38) {
							return;
						}
						setRodada(rodada + 1);
					}}
				/>
			</div>
			{carregando && <div className="carregando">Carregando...</div>}
			<div className="tabela">
				<table>
					<tbody>
						{partidas.map((partida) => {
							return (
								<GerarResultado
									id={partida.id}
									timeCasa={partida.time_casa}
									golsCasa={partida.gols_casa}
									timeFora={partida.time_visitante}
									golsFora={partida.gols_visitante}
									token={token}
									placarAlterado={placarAlterado}
									onPlacar={onPlacar}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
