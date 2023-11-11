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
        if(document.getElementById("charTable")) {
            document.getElementById("charTable").remove();
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
         const row = document.createElement("tr");
         const cell = document.createElement("td");
         const playerNameCell = document.createElement("td");
         cell.appendChild(playerNameCell);
         row.appendChild(document.createTextNode(game.players[playerKey].name));
         Object.values(game.players[playerKey].stats).forEach(key => {
            const cell = document.createElement("td");
            cell.appendChild(document.createTextNode(key));
            row.appendChild(cell); 
         });
         tblBody.appendChild(row);
    });
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "2");
    tbl.id = "charTable";
}

document.getElementById("charButton").addEventListener("click", function() {game.createEntity(document.getElementById("charName").value, true)});

// game.createEntity('Rayne', true);

// game.createEntity('Wynn', true);

// game.createEntity('Platinum', true);

// game.createEntity('Jon', true);



