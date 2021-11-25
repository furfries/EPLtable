let teams = {
	2522: {id: 1, team: 'Arsenal', palyed: 10, win: 5, loss: 3, draw: 2, goalsFor: 12, goalsAgainst: 13},
	2520: {id: 2, team: 'Aston Villa', palyed: 10, win: 3, loss: 6, draw: 1, goalsFor: 14, goalsAgainst: 19},
	2513: {id: 3, team: 'Burnley', palyed: 10, win: 1, loss: 5, draw: 4, goalsFor: 10, goalsAgainst: 16},
	2518: {id: 4, team: 'Brighton', palyed: 10, win: 4, loss: 2, draw: 4, goalsFor: 11, goalsAgainst: 11},
	2537: {id: 5, team: 'Brentford', palyed: 10, win: 3, loss: 4, draw: 3, goalsFor: 12, goalsAgainst: 12},
	2524: {id: 6, team: 'Chelsea', palyed: 10, win: 8, loss: 1, draw: 1, goalsFor: 26, goalsAgainst: 3},
	2515: {id: 7, team: 'Crystal Palace', palyed: 10, win: 2, loss: 2, draw: 6, goalsFor: 13, goalsAgainst: 14},
	2516: {id: 8, team: 'Everton', palyed: 10, win: 4, loss: 4, draw: 2, goalsFor: 16, goalsAgainst: 16},
	2546: {id: 9, team: 'Leeds Utd', palyed: 10, win: 2, loss: 4, draw: 4, goalsFor: 10, goalsAgainst: 17},
	12424: {id: 10, team: 'Leicester City', palyed: 10, win: 4, loss: 4, draw: 2, goalsFor: 15, goalsAgainst: 17},
	2509: {id: 11, team: 'Liverpool', palyed: 10, win: 6, loss: 0, draw: 4, goalsFor: 29, goalsAgainst: 8},
	12400: {id: 12, team: 'Manchtester City', palyed: 10, win: 6, loss: 2, draw: 2, goalsFor: 20, goalsAgainst: 6},
	2523: {id: 13, team: 'Manchester Utd', palyed: 10, win: 5, loss: 3, draw: 2, goalsFor: 19, goalsAgainst: 15},
	849: {id: 14, team: 'Newcastle Utd', palyed: 10, win: 0, loss: 6, draw: 4, goalsFor: 11, goalsAgainst: 23},
	2510: {id: 15, team: 'Norvich City', palyed: 10, win: 0, loss: 8, draw: 2, goalsFor: 3, goalsAgainst: 25},
	12423: {id: 16, team: 'Southampton', palyed: 10, win: 2, loss: 3, draw: 5, goalsFor: 9, goalsAgainst: 12},
	12295: {id: 17, team: 'Tottenham', palyed: 10, win: 5, loss: 5, draw: 0, goalsFor: 9, goalsAgainst: 16},
	2517: {id: 18, team: 'Watford', palyed: 10, win: 3, loss: 6, draw: 1, goalsFor: 12, goalsAgainst: 18},
	12401: {id: 19, team: 'West Ham', palyed: 10, win: 6, loss: 2, draw: 2, goalsFor: 20, goalsAgainst: 11},
	850: {id: 20, team: 'Wolverhampton', palyed: 10, win: 5, loss: 4, draw: 1, goalsFor:11, goalsAgainst: 10},
};

for (let i = 0; i < teams.length; i++) {
	teams[i].points = teams[i].win * 3 + teams[i].draw;
	teams[i].goalsDifference = teams[i].goalsFor - teams[i].goalsAgainst;
}

function bubbleSort(teams) {
let len = teams.length;
for (let i = 0; i < len ; i++) {
	for(let j = 0 ; j < len - i - 1; j++){
	if (teams[j].points < teams[j + 1].points || (teams[j].points === teams[j + 1].points && teams[j].goalsDifference < teams[j + 1].goalsDifference || teams[j].goalsDifference === teams[j + 1].goalsDifference &&  teams[j].goalsFor < teams[j + 1].goalsFor)) {
	let temp = teams[j];
	teams[j] = teams[j+1];
	teams[j + 1] = temp;
	}}}
	return teams;
}
bubbleSort(teams)

/*let teamNames = [
  { id: 2522, name: 'Arsenal' },
  { id: 2520, name: 'Aston Villa' },
  { id: 2513, name: 'Burnley' },
  { id: 2518, name: 'Brighton' },
  { id: 2537, name: 'Brentford' },
  { id: 2524, name: 'Chelsea' },
  { id: 2515, name: 'Crystal Palace' },
  { id: 2516, name: 'Everton' },
  { id: 2546, name: 'Leeds Utd' },
  { id: 12424, name: 'Leicester City' },
  { id: 2509, name: 'Liverpool' },
  { id: 12400, name: 'Manchtester City' },
  { id: 2523, name: 'Manchester Utd' },
  { id: 849, name: 'Newcastle Utd' },
  { id: 2510, name: 'Norwich City' },
  { id: 12423, name: 'Southampton' },
  { id: 12295, name: 'Tottenham' },
  { id: 2517, name: 'Watford' },
  { id: 12401, name: 'West Ham' },
  { id: 850, name: 'Wolverhampton' }
];
*/

fetch('https://app.sportdataapi.com/api/v1/soccer/standings?apikey=edd710c0-40c4-11ec-aa3a-ff1e0a89adf8&season_id=1980')
	.then((response) => {
		return response.json();
	})
	.then((result) => {
		console.log(result.data.standings)
		const epl = result.data.standings.map(item => {
			return {
				...item,
				...teams[item.team_id]
	}
});
		for (let i = 0; i < epl.length; i++){
			epl[i].draw = epl[i].overall.draw
			epl[i].win = epl[i].overall.won
			epl[i].loss = epl[i].overall.lost
			epl[i].palyed = epl[i].overall.games_played
			epl[i].goalsFor = epl[i].overall.goals_scored
			epl[i].goalsAgainst = epl[i].overall.goals_against
			epl[i].goalsDifference = epl[i].overall.goals_diff
		}
		let countEpl = epl.length
		let table = document.createElement('table');
		let tbody = document.createElement('tbody');
		let tr = document.createElement('tr');
		tr.innerHTML = '<td>P</td><td>TEAM</td><td>GP</td><td>W</td><td>L</td><td>D</td><td>GF</td><td>GA</td><td>GD</td><td>PTS</td>';
		tbody.appendChild(tr);
		let items = ['position','team', 'palyed','win','loss','draw','goalsFor','goalsAgainst','goalsDifference','points'];
		for (let i = 0; i < countEpl; i++){
			let tr = document.createElement('tr');
			for (let j = 0; j < items.length; j++) {
			let td = document.createElement('td');
			let item = epl[i][items[j]];
			td.innerHTML = item;
			tr.appendChild(td);
		}
			tbody.appendChild(tr);
		}
		table.appendChild(tbody);
		document.getElementById('EPLtable').appendChild(table);
	});