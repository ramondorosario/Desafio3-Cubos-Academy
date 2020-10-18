import React from 'react';

const GerarTabela = ({
	posicao,
	time,
	pts,
	empate,
	vitoria,
	derrota,
	golsFeitos,
	golsSofridos,
}) => {
	return (
		<tr>
			<td>{posicao}</td>
			<td>{time}</td>
			<td>{pts}</td>
			<td>{empate}</td>
			<td>{vitoria}</td>
			<td>{derrota}</td>
			<td>{golsFeitos}</td>
			<td>{golsSofridos}</td>
			<td>{golsFeitos - golsSofridos}</td>
		</tr>
	);
};

export function TabelaBrasileirao() {
	const [registro, setRegistro] = React.useState([]);

	React.useEffect(() => {
		fetch(
			'https://desafio-3-back-cubos-academy.herokuapp.com/classificacao'
		)
			.then((res) => res.json())
			.then((resJson) => {
				const totalRegistros = resJson.dados.map((x, i) => {
					const registro = { ...x, posicao: i + 1 };
					return registro;
				});
				setRegistro(totalRegistros);
			});
	}, []);

	return (
		<div className="tabela-geral">
			<table>
				<thead>
					<tr>
						<td>
							<div>
								<div>Posição</div>
								<img
									src="https://systemuicons.com/images/icons/sort.svg"
									alt=""
								/>
							</div>
						</td>
						<td>
							<div>
								<div>Time</div>
								<img />
							</div>
						</td>
						<td>
							<div>
								<div>
									<abbr title="Pontos">PTS</abbr>
								</div>
								<img
									src="https://systemuicons.com/images/icons/sort.svg"
									alt=""
								/>
							</div>
						</td>
						<td>
							<div>
								<div>
									<abbr title="Empate">E</abbr>
								</div>
								<img
									src="https://systemuicons.com/images/icons/sort.svg"
									alt=""
								/>
							</div>
						</td>
						<td>
							<div>
								<div>
									<abbr title="Vitória">V</abbr>
								</div>
								<img
									src="https://systemuicons.com/images/icons/sort.svg"
									alt=""
								/>
							</div>
						</td>
						<td>
							<div>
								<div>
									<abbr title="Derrota">D</abbr>
								</div>
								<img
									src="https://systemuicons.com/images/icons/sort.svg"
									alt=""
								/>
							</div>
						</td>
						<td>
							<div>
								<div>
									<abbr title="Gols feitos">GF</abbr>
								</div>
								<img
									src="https://systemuicons.com/images/icons/sort.svg"
									alt=""
								/>
							</div>
						</td>
						<td>
							<div>
								<div>
									<abbr title="Gols sofridos">GS</abbr>
								</div>
								<img
									src="https://systemuicons.com/images/icons/sort.svg"
									alt=""
								/>
							</div>
						</td>
						<td>
							<div>
								<div>
									<abbr title="Saldo de gols">SG</abbr>
								</div>
								<img
									src="https://systemuicons.com/images/icons/sort.svg"
									alt=""
								/>
							</div>
						</td>
					</tr>
				</thead>
				<tbody>
					{registro.map((registro, i) => {
						return (
							<GerarTabela
								posicao={registro.posicao}
								time={registro.nome}
								pts={registro.pontos}
								empate={registro.empate}
								vitoria={registro.vitorias}
								derrota={registro.derrotas}
								golsFeitos={registro.golsFeitos}
								golsSofridos={registro.golsSofridos}
							/>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
