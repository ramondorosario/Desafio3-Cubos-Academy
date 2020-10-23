import React from 'react';

export function GerarTabela({
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
	escudo,
}) {
	return (
		<tr>
			<td>{posicao}</td>
			<td className="time">
				<img src={escudo} alt={`escudo do ${time}`} /> {time}
			</td>
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
}
