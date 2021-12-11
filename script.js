let teams = [];
let scorers = [];
CreateEplTable();

function CreateEplTable(){
let teamNames = GetTeamNames();
const teamNamesObj = Object.fromEntries(teamNames.map(n => [ n.id, n.name ]));
fetch('https://app.sportdataapi.com/api/v1/soccer/standings?apikey=edd710c0-40c4-11ec-aa3a-ff1e0a89adf8&season_id=1980')
	.then((response) => {
		return response.json();
	})
	.then((result) => {
		let epl = result.data.standings.map(n => ({ ...n, name: teamNamesObj[n.team_id] }));
		for (let i = 0; i < epl.length; i++) {
			var team = {
			position: epl[i].position,
			name: epl[i].name,
			played: epl[i].overall.games_played,
			win: epl[i].overall.won,
			loss: epl[i].overall.lost,
			draw: epl[i].overall.draw,
			goalsFor: epl[i].overall.goals_scored,
			goalsAgainst: epl[i].overall.goals_against,
			}
		teams.push(team); 
	}
	teamsCount(teams);
	bubbleSort(teams);
	createTable(teams);
});
}

function teamsCount () {
	for (let i = 0; i < teams.length; i++) {
	teams[i].points = teams[i].win * 3 + teams[i].draw;
	teams[i].goalsDifference = teams[i].goalsFor - teams[i].goalsAgainst;
}}

function bubbleSort() {
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

function createTable () {
let countTeams = teams.length
		let table = document.createElement('table');
		let tbody = document.createElement('tbody');
		let tr = document.createElement('tr');
		tr.innerHTML = '<td>P</td><td>TEAM</td><td>GP</td><td>W</td><td>L</td><td>D</td><td>GF</td><td>GA</td><td>GD</td><td>PTS</td>';
		tbody.appendChild(tr);
		let items = ['position','name', 'played','win','loss','draw','goalsFor','goalsAgainst','goalsDifference','points'];
		for (let i = 0; i < countTeams; i++){
			let tr = document.createElement('tr');
			for (let j = 0; j < items.length; j++) {
			let td = document.createElement('td');
			let item = teams[i][items[j]];
			td.innerHTML = item;
			tr.appendChild(td);
		}
			tbody.appendChild(tr);
		}
		table.appendChild(tbody);
		document.getElementById('EPLtable').appendChild(table);
}

function GetTeamNames() {
	return [
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
	]};

function CreateTopScorers (){
fetch('https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=edd710c0-40c4-11ec-aa3a-ff1e0a89adf8&season_id=1980')
	.then((response) => {
		return response.json();
	})
	.then((result) => {
		let topscorers = result.data
		for (let i = 0; i < 10; i++) {
		var scorer = {
			position : topscorers[i].pos,
			name: topscorers[i].player.player_name,
			team: topscorers[i].team.team_name,
			games: topscorers[i].matches_played,
			goals: topscorers[i].goals.overall,
			}
			scorers.push(scorer);
		}
			createScorers(scorers);
});
}

	function createScorers (scorers) {
	let countScorers = scorers.length
		let table = document.createElement('table');
		let tbody = document.createElement('tbody');
		let tr = document.createElement('tr');
		tr.innerHTML = '<td>P</td><td>NAME</td><td>TEAM</td><td>GAMES</td><td>GOALS</td>';
		tbody.appendChild(tr);
		let items = ['position','name', 'team','games','goals'];
		for (let i = 0; i < countScorers; i++){
			let tr = document.createElement('tr');
			for (let j = 0; j < items.length; j++) {
			let td = document.createElement('td');
			let item = scorers[i][items[j]];
			td.innerHTML = item;
			tr.appendChild(td);
		}
			tbody.appendChild(tr);
		}
		table.appendChild(tbody);
		document.getElementById('TOPscorers').appendChild(table);
}

