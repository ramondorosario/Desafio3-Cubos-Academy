import React from 'react';

function GerarResultados({
	timeCasa,
	golsCasa,
	timeFora,
	golsFora,
	autenticado,
	setAutenticado,
	img,
	setImg,
}) {
	return (
		<tr>
			<td className="time-casa">{timeCasa}</td>
			{autenticado && (
				<td>
					<input
						inputMode="numeric"
						className="gols-input"
						value={golsCasa}
					/>
				</td>
			)}
			{!autenticado && <td className="gols">{golsCasa}</td>}
			<td>x</td>
			{autenticado && (
				<td>
					<input
						inputMode="numeric"
						value={golsFora}
						className="gols-input"
					/>
				</td>
			)}
			{!autenticado && <td className="gols">{golsFora}</td>}
			<td className="time-fora">{timeFora}</td>
			<td className="botao-td">
				<button
					onClick={() => {
						setAutenticado(!autenticado);
						setImg(!img);
					}}
				>
					<img
						src={
							img
								? 'https://systemuicons.com/images/icons/check.svg'
								: 'https://systemuicons.com/images/icons/pen.svg'
						}
						alt=""
					/>
				</button>
			</td>
		</tr>
	);
}

export function TabelaResultados() {
	const [rodada, setRodada] = React.useState(1);
	const [autenticado, setAutenticado] = React.useState(false); // Testando o botão de editar
	const [img, setImg] = React.useState(false);

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
			<div className="tabela">
				<table>
					<tbody>
						<GerarResultados
							timeCasa="Grêmio"
							golsCasa={2}
							timeFora="Santos"
							golsFora={1}
							autenticado={autenticado}
							setAutenticado={setAutenticado}
							img={img}
							setImg={setImg}
						/>
					</tbody>
				</table>
			</div>
		</div>
	);
}
