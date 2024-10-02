const myContent = document.getElementById('myContent');

oleF = { Name: "Ole Fridtjoff", Points: 0 };
egil = { Name: "Egil", Points: 0 };
ørjan = { Name: "Ørjan", Points: 0 };
lars = { Name: "Lars", Points: 0 };
rune = { Name: "Rune", Points: 0 };
andreas = { Name: "Andreas", Points: 0 };



let text = `
<h1 class="content"> Sjakkturnering HOP</h1>
<div class = "content">
<table>
<tr>
<td><b>Nr.</b></td><td><b>Navn</b></td><td><b>Poeng</b></td>
</tr>
<tr>
</tr>
`;

let gameText = `
<div class = "content">
<h2>Kamper spilt</h2>
<table>
</div>

<div class = "content">
<tr>
`
class Game {
    constructor(white, black, wPoints, bPoints) {
        white.Points += wPoints;
        black.Points += bPoints;
        gameText += `<td>${white.Name} (Hvit)</td>`;
        gameText += `<td>${black.Name} (Svart)</td>`;
        gameText += `<td>${wPoints} - ${bPoints}</td></tr>`;
    }
}

//Dag 1
new Game(oleF, egil, 0, 1)
new Game(ørjan, egil, 0, 1)
new Game(ørjan, andreas, 1, 0)
new Game(rune, lars, 0.5, 0.5)
new Game(andreas, egil, 0, 1)
new Game(oleF, rune, 1, 0)
new Game(ørjan, lars, 0, 1)
new Game(egil, rune, 1, 0)

//Dag2
new Game(ørjan, oleF, 1, 0)
new Game(egil, lars, 0, 1)
new Game(lars, oleF, 0, 1)

const players = [oleF, egil, ørjan, lars, rune, andreas];
players.sort((a, b) => b.Points - a.Points);
players.forEach((player, index) => {
    text += `
    <tr>
        <td>${index + 1}</td><td>${player.Name}</td><td>${player.Points}</td>
    </tr>
    `;
});

text += `
</table>
</div>
`;
    

myContent.innerHTML = text + gameText;