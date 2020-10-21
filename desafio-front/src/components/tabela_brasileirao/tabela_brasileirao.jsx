import React from 'react';

import { GerarTabela } from './gerar_tabela';

const ordenarNumeros = (registro, setRegistro, propriedade) => {
	const [...ordenado] = registro;
	ordenado.sort((a, b) => a[propriedade] - b[propriedade]);

	const verificar = ordenado.every((x, i) => x === registro[i]);

	if (verificar) setRegistro([...ordenado.reverse()]);
	else setRegistro([...ordenado]);
	return ordenado;
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

export function TabelaBrasileirao({ placarAlterado }) {
	const [registro, setRegistro] = React.useState([]);
	const [botaoSeta, setBotaoSeta] = React.useState({
		ordenar: null,
		condicao: true,
	});

	React.useEffect(() => {
		fetch('http://localhost:8081/classificacao')
			.then((res) => res.json())
			.then((resJson) => {
				const totalRegistros = resJson.dados.response.map((x, i) => {
					const registro = {
						...x,
						posicao: i + 1,
					};
					return registro;
				});
				setRegistro(totalRegistros);
			});
	}, [placarAlterado]);

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
									const ordenado = ordenarNumeros(
										registro,
										setRegistro,
										'posicao'
									);
									setBotaoSeta({
										ordenar: 'posicao',
										condicao:
											ordenado[0].posicao <
											ordenado[ordenado.length - 1].posicao,
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
									ordenado.sort((a, b) => a.nome.localeCompare(b.nome));

									const verificar = ordenado.every((x, i) => x === registro[i]);

									if (verificar) setRegistro([...ordenado.reverse()]);
									else setRegistro([...ordenado]);

									setBotaoSeta({
										ordenar: 'nome',
										condicao:
											ordenado[0].nome.localeCompare(
												ordenado[ordenado.length - 1].nome
											) === -1,
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
									const ordenado = ordenarNumeros(
										registro,
										setRegistro,
										'pontos'
									);
									setBotaoSeta({
										ordenar: 'pontos',
										condicao:
											ordenado[0].posicao >
											ordenado[ordenado.length - 1].posicao,
									});
								}}
							/>
						</td>
						<td>
							<abbr title="Partidas Jogadas">PJ</abbr>
							<img
								src={`${botaoImg(botaoSeta, 'partidas jogadas')}`}
								alt=""
								onClick={() => {
									const ordenado = ordenarNumeros(
										registro,
										setRegistro,
										'jogos'
									);
									setBotaoSeta({
										ordenar: 'partidas jogadas',
										condicao:
											ordenado[0].posicao <
											ordenado[ordenado.length - 1].posicao,
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
									const ordenado = ordenarNumeros(
										registro,
										setRegistro,
										'empates'
									);
									setBotaoSeta({
										ordenar: 'empates',
										condicao:
											ordenado[0].posicao <
											ordenado[ordenado.length - 1].posicao,
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
									const ordenado = ordenarNumeros(
										registro,
										setRegistro,
										'vitorias'
									);
									setBotaoSeta({
										ordenar: 'vitorias',
										condicao:
											ordenado[0].posicao >
											ordenado[ordenado.length - 1].posicao,
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
									const ordenado = ordenarNumeros(
										registro,
										setRegistro,
										'derrotas'
									);
									setBotaoSeta({
										ordenar: 'derrotas',
										condicao:
											ordenado[0].posicao <
											ordenado[ordenado.length - 1].posicao,
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
									const ordenado = ordenarNumeros(
										registro,
										setRegistro,
										'golsFeitos'
									);
									setBotaoSeta({
										ordenar: 'gols feitos',
										condicao:
											ordenado[0].posicao >
											ordenado[ordenado.length - 1].posicao,
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
									const ordenado = ordenarNumeros(
										registro,
										setRegistro,
										'golsSofridos'
									);
									setBotaoSeta({
										ordenar: 'gols sofridos',
										condicao:
											ordenado[0].posicao <
											ordenado[ordenado.length - 1].posicao,
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
									const ordenado = ordenarNumeros(
										registro,
										setRegistro,
										'saldoDeGols'
									);
									setBotaoSeta({
										ordenar: 'saldo de gols',
										condicao:
											ordenado[0].posicao >
											ordenado[ordenado.length - 1].posicao,
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
								time={registro.time}
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
