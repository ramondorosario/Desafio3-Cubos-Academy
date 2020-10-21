import React from 'react';

export function GerarResultado({
	timeCasa,
	golsCasa,
	timeFora,
	golsFora,
	token,
}) {
	const [check, setCheck] = React.useState(false);
	const [editarGol, setEditarGol] = React.useState(false);
	const [golsInputCasa, setGolInputCasa] = React.useState(golsCasa);
	const [golsInputFora, setGolInputFora] = React.useState(golsFora);

	return (
		<tr>
			<td className="time-casa">{timeCasa}</td>
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
			<td className="time-fora">{timeFora}</td>
			<td
				className="botao-td"
				hidden={!token}
				onClick={() => {
					setEditarGol(!editarGol);
					setCheck(!check);
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
