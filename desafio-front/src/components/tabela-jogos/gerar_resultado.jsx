import React from 'react';

export function GerarResultado({
	id,
	timeCasa,
	golsCasa,
	timeFora,
	golsFora,
	token,
	placarAlterado,
	onPlacar,
	escudoTimeCasa,
	escudoTimeVisitante,
}) {
	const [check, setCheck] = React.useState(false);
	const [editarGol, setEditarGol] = React.useState(false);
	const [golsInputCasa, setGolInputCasa] = React.useState(golsCasa);
	const [golsInputFora, setGolInputFora] = React.useState(golsFora);

	return (
		<tr>
			<td className="time-casa">
				<div>
					{timeCasa}{' '}
					<img src={escudoTimeCasa} alt={`escudo do ${escudoTimeCasa}`} />
				</div>
			</td>
			{editarGol ? (
				<td className="gols">
					<input
						className="gols-input"
						inputemode="numeric"
						value={golsInputCasa}
						onChange={(e) => {
							setGolInputCasa(e.target.value);
						}}
					/>
				</td>
			) : (
				<td className="gols">{golsCasa}</td>
			)}
			<td>x</td>
			{editarGol ? (
				<td className="gols">
					<input
						className="gols-input"
						inputemode="numeric"
						value={golsInputFora}
						onChange={(e) => {
							setGolInputFora(e.target.value);
						}}
					/>
				</td>
			) : (
				<td className="gols">{golsFora}</td>
			)}
			<td className="time-fora">
				<div>
					<img
						src={escudoTimeVisitante}
						alt={`escudo do ${escudoTimeVisitante}`}
					/>
					{timeFora}
				</div>
			</td>
			<td
				className="botao-td"
				hidden={!token}
				onClick={() => {
					setEditarGol(!editarGol);
					setCheck(!check);

					if (editarGol) {
						const dados = {
							id,
							golsCasa: golsInputCasa,
							golsVisitante: golsInputFora,
						};
						fetch('http://localhost:8081/jogos', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
								Authorization: token && `Bearer ${token}`,
							},
							body: JSON.stringify(dados),
						})
							.then((res) => res.json())
							.then((res) => {
								if (res.dados.response) {
									console.log(res, id);
									onPlacar(!placarAlterado);
								}
							});
					}
				}}
			>
				<div>
					<img
						src={
							check
								? 'https://systemuicons.com/images/icons/check.svg'
								: 'https://systemuicons.com/images/icons/pen.svg'
						}
						alt=""
					/>
				</div>
			</td>
		</tr>
	);
}
