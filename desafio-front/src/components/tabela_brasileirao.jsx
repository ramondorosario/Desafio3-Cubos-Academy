import React from 'react';

const GerarTabela = ({
	posicao,
	time,
	pts,
	jogos,
	empate,
	vitoria,
	derrota,
	golsFeitos,
	golsSofridos,
	saldoDeGols,
}) => {
	return (
		<tr>
			<td>{posicao}</td>
			<td>{time}</td>
			<td>{pts}</td>
			<td>{jogos}</td>
			<td>{empate}</td>
			<td>{vitoria}</td>
			<td>{derrota}</td>
			<td>{golsFeitos}</td>
			<td>{golsSofridos}</td>
			<td>{saldoDeGols}</td>
		</tr>
	);
};

const ordenarNumeros = (registro, setRegistro, propriedade) => {
	const [...ordenado] = registro;
	ordenado.sort((a, b) => a[propriedade] - b[propriedade]);

	const verificar = ordenado.every((x, i) => x === registro[i]);

	if (verificar) setRegistro([...ordenado.reverse()]);
	else setRegistro([...ordenado]);
};

const botaoImg = (botaoSeta, nomeBotao) => {
	const { ordenar, condicao } = botaoSeta;

	if (ordenar === nomeBotao) {
		return condicao
			? 'https://systemuicons.com/images/icons/arrow_down.svg'
			: 'https://systemuicons.com/images/icons/arrow_up.svg';
	}
	return 'https://systemuicons.com/images/icons/sort.svg';
};

export function TabelaBrasileirao() {
	const [registro, setRegistro] = React.useState([]);
	const [botaoSeta, setBotaoSeta] = React.useState({
		ordenar: null,
		condicao: true,
	});

	React.useEffect(() => {
		fetch(
			'https://desafio-3-back-cubos-academy.herokuapp.com/classificacao'
		)
			.then((res) => res.json())
			.then((resJson) => {
				const totalRegistros = resJson.dados.map((x, i) => {
					const registro = {
						...x,
						posicao: i + 1,
						saldoDeGols: x.golsFeitos - x.golsSofridos,
					};
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
								src={`${botaoImg(botaoSeta, 'posicao')}`}
								alt=""
								onClick={() => {
									ordenarNumeros(
										registro,
										setRegistro,
										'posicao'
									);

									setBotaoSeta({
										ordenar: 'posicao',
										condicao: !botaoSeta.condicao,
									});
								}}
							/>
						</td>
						<td>
							Time
							<img
								src={botaoImg(botaoSeta, 'nome')}
								alt=""
								onClick={() => {
									const [...ordenado] = registro;
									ordenado.sort((a, b) =>
										a.nome.localeCompare(b.nome)
									);

									const verificar = ordenado.every(
										(x, i) => x === registro[i]
									);

									if (verificar)
										setRegistro([...ordenado.reverse()]);
									else setRegistro([...ordenado]);

									setBotaoSeta({
										ordenar: 'nome',
										condicao: !botaoSeta.condicao,
									});
								}}
							/>
						</td>
						<td>
							<abbr title="Pontos">PTS</abbr>
							<img
								src={botaoImg(botaoSeta, 'pontos')}
								alt=""
								onClick={() => {
									ordenarNumeros(
										registro,
										setRegistro,
										'pontos'
									);
									setBotaoSeta({
										ordenar: 'pontos',
										condicao: !botaoSeta.condicao,
									});
								}}
							/>
						</td>
						<td>
							<abbr title="Partidas Jogadas">PJ</abbr>
							<img
								src={`${botaoImg(
									botaoSeta,
									'partidas jogadas'
								)}`}
								alt=""
								onClick={() => {
									ordenarNumeros(
										registro,
										setRegistro,
										'jogos'
									);
									setBotaoSeta({
										ordenar: 'partidas jogadas',
										condicao: !botaoSeta.condicao,
									});
								}}
							/>
						</td>
						<td>
							<abbr title="Empates">E</abbr>
							<img
								src={botaoImg(botaoSeta, 'empates')}
								alt=""
								onClick={() => {
									ordenarNumeros(
										registro,
										setRegistro,
										'empates'
									);
									setBotaoSeta({
										ordenar: 'empates',
										condicao: !botaoSeta.condicao,
									});
								}}
							/>
						</td>
						<td>
							<abbr title="Vitorias">V</abbr>
							<img
								src={botaoImg(botaoSeta, 'vitorias')}
								alt=""
								onClick={() => {
									ordenarNumeros(
										registro,
										setRegistro,
										'vitorias'
									);
									setBotaoSeta({
										ordenar: 'vitorias',
										condicao: !botaoSeta.condicao,
									});
								}}
							/>
						</td>
						<td>
							<abbr title="Derrotas">D</abbr>
							<img
								src={botaoImg(botaoSeta, 'derrotas')}
								alt=""
								onClick={() => {
									ordenarNumeros(
										registro,
										setRegistro,
										'derrotas'
									);
									setBotaoSeta({
										ordenar: 'derrotas',
										condicao: !botaoSeta.condicao,
									});
								}}
							/>
						</td>
						<td>
							<abbr title="Gols feitos">GF</abbr>
							<img
								src={botaoImg(botaoSeta, 'gols feitos')}
								alt=""
								onClick={() => {
									ordenarNumeros(
										registro,
										setRegistro,
										'golsFeitos'
									);
									setBotaoSeta({
										ordenar: 'gols feitos',
										condicao: !botaoSeta.condicao,
									});
								}}
							/>
						</td>
						<td>
							<abbr title="Gols sofridos">GS</abbr>
							<img
								src={botaoImg(botaoSeta, 'gols sofridos')}
								alt=""
								onClick={() => {
									ordenarNumeros(
										registro,
										setRegistro,
										'golsSofridos'
									);
									setBotaoSeta({
										ordenar: 'gols sofridos',
										condicao: !botaoSeta.condicao,
									});
								}}
							/>
						</td>
						<td>
							<abbr title="Saldo de gols">SG</abbr>
							<img
								src={botaoImg(botaoSeta, 'saldo de gols')}
								alt=""
								onClick={() => {
									ordenarNumeros(
										registro,
										setRegistro,
										'saldoDeGols'
									);
									setBotaoSeta({
										ordenar: 'saldo de gols',
										condicao: !botaoSeta.condicao,
									});
								}}
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
								jogos={registro.jogos}
								empate={registro.empates}
								vitoria={registro.vitorias}
								derrota={registro.derrotas}
								golsFeitos={registro.golsFeitos}
								golsSofridos={registro.golsSofridos}
								saldoDeGols={registro.saldoDeGols}
							/>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
