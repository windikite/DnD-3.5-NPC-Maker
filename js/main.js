const game = {
    players: [],
    npcs: [],
    createEntity:  function(name, isPlayer){
        let newEntity = new entity(name, isPlayer);
        if (isPlayer === true) {
            this.players.push(newEntity);
        }else if (isPlayer === false) {
            this.npcs.push(newEntity);
        }
        newEntity.rollStats();
        console.log(`Created ${name}.`);
        if(document.getElementById("playerTable")) {
            document.getElementById("playerTable").remove();
        };
        generateTable();
    },
}

class entity{
    constructor(name, isPlayer){
        this.name = name;
        this.isPlayer = isPlayer;
        this.stats = {
            con: 0,
            str: 0,
            dex: 0,
            wis: 0,
            int: 0,
            cha: 0,
        };
    }
    rollStats() {
        Object.keys(this.stats).forEach(stat => {
          const rolls = new Array(4).fill(null).map(x => Math.floor(Math.random() * 6 + 1));
          this.stats[stat] = rolls.reduce((sum, value) => sum + value, 0) - Math.min(...rolls);
        });
        console.log(this.stats)
    }
}

function generateTable(){
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    Object.keys(game.players).forEach(playerKey => {
         // create a table row for each player
         const row = document.createElement("tr");
         //create cells based on player stats array length
 
         Object.values(game.players[0].stats).forEach(key => {
             const cell = document.createElement("td");
             const cellText = document.createTextNode(key);
             cell.appendChild(cellText);
             row.appendChild(cell);
         });
         tblBody.appendChild(row);
    });
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
    tbl.id = "playerTable";
}

document.getElementById("playerButton").addEventListener("click", function() {game.createEntity(document.getElementById("playerName").value, true)});

// game.createEntity('Rayne', true);

// game.createEntity('Wynn', true);

// game.createEntity('Platinum', true);

// game.createEntity('Jon', true);



