
let teams = [
	{id: 1, name: 'Arsenal', wins: 4, loses: 3, draw: 2, goals: -3},
	{id: 2, name: 'Aston Villa', wins: 3, loses: 5, draw: 1, goals: -2},
	{id: 3, name: 'Burnley', wins: 0, loses: 5, draw: 4, goals: -8},
	{id: 4, name: 'Brighton', wins: 4, loses: 2, draw: 3, goals: 0},
	{id: 5, name: 'Brentford', wins: 3, loses: 3, draw: 3, goals: 2},
	{id: 6, name: 'Chelsea', wins: 7, loses: 1, draw: 1, goals: 20},
	{id: 7, name: 'Crystal Palace', wins: 1, loses: 2, draw: 6, goals: -3},
	{id: 8, name: 'Everton', wins: 4, loses: 3, draw: 2, goals: 1},
	{id: 9, name: 'Leeds Utd', wins: 1, loses: 4, draw: 4, goals: -8},
	{id: 10, name: 'Leicester City', wins: 4, loses: 3, draw: 2, goals: 0},
	{id: 11, name: 'Liverpool', wins: 6, loses: 0, draw: 3, goals: 21},
	{id: 12, name: 'Manchtester City', wins: 6, loses: 1, draw: 2, goals: 16},
	{id: 13, name: 'Manchester Utd', wins: 4, loses: 3, draw: 2, goals: 2},
	{id: 14, name: 'Newcastle Utd', wins: 0, loses: 5, draw: 4, goals: -9},
	{id: 15, name: 'Norvich City', wins: 0, loses: 7, draw: 2, goals: -1},
	{id: 16, name: 'Southampton', wins: 1, loses: 3, draw: 5, goals: -4},
	{id: 17, name: 'Tottenham', wins: 5, loses: 4, draw: 0, goals: -4},
	{id: 18, name: 'Watford', wins: 3, loses: 5, draw: 1, goals: -5},
	{id: 19, name: 'West Ham', wins: 5, loses: 2, draw: 2, goals: 6},
	{id: 20, name: 'Wolverhampton', wins: 4, loses: 4, draw: 1, goals: 0},
]

for (let i = 0; i < teams.length; i++) {
	teams[i].points = teams[i].wins * 3 + teams[i].draw;
};

function sortByPoints(teams) {
	if (teams.points == teams.points) {
		teams.sort((b, a) => b.goals > a.goals ? -1 : 1);
	}
	teams.sort((b, a) => b.points > a.points ? -1 : 1);
};
sortByPoints(teams);
console.log(teams)
