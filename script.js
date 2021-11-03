let teams = [
	{id: 1, team: 'Arsenal', palyed: 10, win: 5, loss: 3, draw: 2, goalsFor: 12, goalsAgainst: 13},
	{id: 2, team: 'Aston Villa', palyed: 10, win: 3, loss: 6, draw: 1, goalsFor: 14, goalsAgainst: 19},
	{id: 3, team: 'Burnley', palyed: 10, win: 1, loss: 5, draw: 4, goalsFor: 10, goalsAgainst: 16},
	{id: 4, team: 'Brighton', palyed: 10, win: 4, loss: 2, draw: 4, goalsFor: 11, goalsAgainst: 11},
	{id: 5, team: 'Brentford', palyed: 10, win: 3, loss: 4, draw: 3, goalsFor: 12, goalsAgainst: 12},
	{id: 6, team: 'Chelsea', palyed: 10, win: 8, loss: 1, draw: 1, goalsFor: 26, goalsAgainst: 3},
	{id: 7, team: 'Crystal Palace', palyed: 10, win: 2, loss: 2, draw: 6, goalsFor: 13, goalsAgainst: 14},
	{id: 8, team: 'Everton', palyed: 10, win: 4, loss: 4, draw: 2, goalsFor: 16, goalsAgainst: 16},
	{id: 9, team: 'Leeds Utd', palyed: 10, win: 2, loss: 4, draw: 4, goalsFor: 10, goalsAgainst: 17},
	{id: 10, team: 'Leicester City', palyed: 10, win: 4, loss: 4, draw: 2, goalsFor: 15, goalsAgainst: 17},
	{id: 11, team: 'Liverpool', palyed: 10, win: 6, loss: 0, draw: 4, goalsFor: 29, goalsAgainst: 8},
	{id: 12, team: 'Manchtester City', palyed: 10, win: 6, loss: 2, draw: 2, goalsFor: 20, goalsAgainst: 6},
	{id: 13, team: 'Manchester Utd', palyed: 10, win: 5, loss: 3, draw: 2, goalsFor: 19, goalsAgainst: 15},
	{id: 14, team: 'Newcastle Utd', palyed: 10, win: 0, loss: 6, draw: 4, goalsFor: 11, goalsAgainst: 23},
	{id: 15, team: 'Norvich City', palyed: 10, win: 0, loss: 8, draw: 2, goalsFor: 3, goalsAgainst: 25},
	{id: 16, team: 'Southampton', palyed: 10, win: 2, loss: 3, draw: 5, goalsFor: 9, goalsAgainst: 12},
	{id: 17, team: 'Tottenham', palyed: 10, win: 5, loss: 5, draw: 0, goalsFor: 9, goalsAgainst: 16},
	{id: 18, team: 'Watford', palyed: 10, win: 3, loss: 6, draw: 1, goalsFor: 12, goalsAgainst: 18},
	{id: 19, team: 'West Ham', palyed: 10, win: 6, loss: 2, draw: 2, goalsFor: 20, goalsAgainst: 11},
	{id: 20, team: 'Wolverhampton', palyed: 10, win: 5, loss: 4, draw: 1, goalsFor:11, goalsAgainst: 10},
];

	for (let i = 0; i < teams.length; i++) {
	teams[i].points = teams[i].win * 3 + teams[i].draw;
	teams[i].goalsDifference = teams[i].goalsFor - teams[i].goalsAgainst;
}

function bubble(teams) {
	let len = teams.length;
		for (let i = 0; i < len ; i++) {
			for(let j = 0 ; j < len - i - 1; j++){
				if (teams[j].points < teams[j + 1].points || (teams[j].points === teams[j + 1].points && teams[j].goalsDifference < teams[j + 1].goalsDifference || teams[j].goalsDifference === teams[j + 1].goalsDifference &&  teams[j].goalsFor < teams[j + 1].goalsFor)) {
					let temp = teams[j];
					teams[j] = teams[j+1];
					teams[j + 1] = temp;
				}
			}
		}
	return teams;
}
bubble(teams)
console.log(teams)

let countTeams = teams.length;
let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        let tr = document.createElement('tr');
            tr.innerHTML = '<td>Team</td><td>GP</td><td>W</td><td>L</td><td>D</td><td>GF</td><td>GA</td><td>GD</td><td>PTS</td>';
            tbody.appendChild(tr);
        let items = ['team','palyed','win','loss','draw','goalsFor','goalsAgainst','goalsDifference','points'];
         for (let i = 0; i < countTeams; i++){
            let tr = document.createElement('tr');
                for (let j = 0; j < 9; j++) {
                    let td = document.createElement('td');
                    let item = teams[i][items[j]];
                     td.innerHTML = item ? item : item;
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);
        }
table.appendChild(tbody);
document.getElementById('EPLtable').appendChild(table);
