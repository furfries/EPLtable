let scorers = [];
CreateTopScorers();

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