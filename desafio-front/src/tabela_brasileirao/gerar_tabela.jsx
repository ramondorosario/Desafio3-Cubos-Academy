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
}) {
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
}
