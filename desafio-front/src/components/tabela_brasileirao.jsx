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
							<span>Posição</span>
							<img
								src="https://systemuicons.com/images/icons/sort.svg"
								alt=""
							/>
						</td>
						<td>
							Time
							<img
								src="https://systemuicons.com/images/icons/sort.svg"
								alt=""
							/>
						</td>
						<td>
							<abbr title="Pontos">PTS</abbr>
							<img
								src="https://systemuicons.com/images/icons/sort.svg"
								alt=""
							/>
						</td>
						<td>
							<abbr title="Empates">E</abbr>
							<img
								src="https://systemuicons.com/images/icons/sort.svg"
								alt=""
							/>
						</td>
						<td>
							<abbr title="Vitorias">V</abbr>
							<img
								src="https://systemuicons.com/images/icons/sort.svg"
								alt=""
							/>
						</td>
						<td>
							<abbr title="Derrotas">D</abbr>
							<img
								src="https://systemuicons.com/images/icons/sort.svg"
								alt=""
							/>
						</td>
						<td>
							<abbr title="Gols feitos">GF</abbr>
							<img
								src="https://systemuicons.com/images/icons/sort.svg"
								alt=""
							/>
						</td>
						<td>
							<abbr title="Gols sofridos">GS</abbr>
							<img
								src="https://systemuicons.com/images/icons/sort.svg"
								alt=""
							/>
						</td>
						<td>
							<abbr title="Saldo de gols">SG</abbr>
							<img
								src="https://systemuicons.com/images/icons/sort.svg"
								alt=""
							/>
						</td>
					</tr>
				</thead>
				<tbody>
					{registro.map((registro) => {
						return (
							<GerarTabela
								posicao={registro.posicao}
								time={registro.nome}
								pts={registro.pontos}
								empate={registro.empates}
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
