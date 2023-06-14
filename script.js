var playerDiv = document.getElementById("Players");

var startingLife = 40;
var numPlayers = 0;

var playerObjects = [];

// Function to generate new elements based on number of players.

var addPlayer = document.getElementById("AddPlayer");

addPlayer.addEventListener("click", () => {
    numPlayers++;
    x = generateNewPlayer(startingLife, numPlayers);
    //console.log(x);
    playerObjects.push(x);
   

    refreshPlayerObjects();
    
    playerDiv.innerHTML = players;

});

generateNewPlayer = (startingLife, numPlayers) => {
    const number = numPlayers;
    x = {};
    x.name = `Player ${number}`;
    x.index = number - 1;
    x.life = startingLife;
    x.addLife = (amount) => {x.life += amount};
    x.html = `<div class="player">${x.name}<br><button onclick="addLife(${x.index}, -10);", id="MinusMinus"><b>--</b></button><button onclick="addLife(${x.index}, -1);", id="Minus"><b>-</b></button> <div id="Life"><b>${x.life}</b></div> <button onclick="addLife(${x.index}, 1);", id="Plus"><b>+</b></button><button onclick="addLife(${x.index}, 10);", id="PlusPlus"><b>++</b></button></div>`;
    x.updateHTML = () => x.html = `<div class="player">${x.name}<br><button onclick="addLife(${x.index}, -10);", id="MinusMinus"><b>--</b></button><button onclick="addLife(${x.index}, -1);", id="Minus"><b>-</b></button> <div id="Life"><b>${x.life}</b></div> <button onclick="addLife(${x.index}, 1);", id="Plus"><b>+</b></button><button onclick="addLife(${x.index}, 10);", id="PlusPlus"><b>++</b></button></div>`;

    //console.log(x);
    return x;
}

addLife = (playerNumber, amount) => {
    //console.log(`PlayerNumber: ${playerNumber}`)
    x = playerObjects[playerNumber];
    

    x.addLife(amount);
    refreshPlayerObjects();
}

refreshPlayerObjects = () => {
    players = ``;
    for(let y in playerObjects){
        playerObjects[y].updateHTML();
        players += playerObjects[y].html;

        console.log(y)
        players += ((y % 2 == 1)) ? '<br><br>':'';
    }
    playerDiv.innerHTML = players;
}
