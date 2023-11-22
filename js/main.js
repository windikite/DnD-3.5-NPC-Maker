let charName = '';//character name
let bio = '';//biological template
let classes = [];//array of classes added to character
let templates = '';//array of templates added to character
let baseLevel = 0;//starting level from bio
let levelAdjust = 0; //increase to level from templates and classes
let effectiveLevel = 0;//final derived from bio, template and classes
let stats = {//base statistics
    con: 0,
    str: 0,
    dex: 0,
    wis: 0,
    int: 0,
    cha: 0,
};
let statBonuses = {//base statistics
    con: 0,
    str: 0,
    dex: 0,
    wis: 0,
    int: 0,
    cha: 0,
};
let personality = '';
let culture = '';

//functions
function addLevel(className){//add class name and mod to character
    classes.push(className);//add class name to array of classes
    document.getElementById("class-1-number").innerHTML++;
    update();
    console.log(`${charName}'s level adjust is now ${levelAdjust}`);
};
function calcLevel(){//automatically calculate level on dom change
    effectiveLevel = baseLevel + levelAdjust;
};
function rollStats(){//generate array of stats and save to stats array
    let suffer = document.getElementById("suffer").checked;
    if (suffer == true){
        Object.keys(stats).forEach(stat => {
            const rolls = new Array(4).fill(null).map(x => Math.floor(Math.random() * 6 + 1));
            stats[stat] = rolls.reduce((sum, value) => sum + value, 0) - Math.max(...rolls);
        });
    }else{
        Object.keys(stats).forEach(stat => {
            const rolls = new Array(4).fill(null).map(x => Math.floor(Math.random() * 6 + 1));
            stats[stat] = rolls.reduce((sum, value) => sum + value, 0) - Math.min(...rolls);
        });
    }
    let statTotal = Object.values(stats).reduce((sum, value) => sum + value, 0);
    console.log(`Total stats: ${statTotal}`, stats);
}
function output(){//output char info to footer and console
    //output to footer
    document.getElementById("finalString").innerText = `Saved ${personality} ${charName} the level ${effectiveLevel} ${templates} ${bio} ${classes} of the ${culture}!`;
    console.log(`Saved ${personality} ${charName} the level ${effectiveLevel} ${templates} ${bio} ${classes} of the ${culture}!`);
    //console log char
    console.log(`
    Name: ${charName}\n
    Level: ${effectiveLevel}\n
    Classes: ${classes}\n
    Stats: ${stats}\n
    Race: ${bio}\n
    Templates: ${templates} with a LA mod of ${levelAdjust}\n
    Personality: ${personality}\n
    Culture: ${culture}\n
    `);
    document.getElementById("con").innerText = `Con: ${stats.con} + ${statBonuses.con} = ${stats.con + statBonuses.con}`;
    document.getElementById("str").innerText = `Str: ${stats.str} + ${statBonuses.str} = ${stats.str + statBonuses.str}`;
    document.getElementById("dex").innerText = `Dex: ${stats.dex} + ${statBonuses.dex} = ${stats.dex + statBonuses.dex}`;
    document.getElementById("wis").innerText = `Wis: ${stats.wis} + ${statBonuses.wis} = ${stats.wis + statBonuses.wis}`;
    document.getElementById("int").innerText = `Int: ${stats.int} + ${statBonuses.int} = ${stats.int + statBonuses.int}`;
    document.getElementById("cha").innerText = `Cha: ${stats.cha} + ${statBonuses.cha} = ${stats.cha + statBonuses.cha}`;
}
function update(){
    charName = document.getElementById("charName").value;
    bio = document.getElementById("biology-menu").value;
    // classes.push(document.getElementById("class-menu").value);
    // templates.push(document.getElementById("template-menu").value);
    classes = document.getElementById("class-menu").value;
    templates = document.getElementById("template-menu").value;
    personality = document.getElementById("personality-menu").value;
    culture = document.getElementById("culture-menu").value;
    bioList.forEach((element) => {
        if (element.name == bio){
            baseLevel = element.levelMod;
            statBonuses.con = 0;
            statBonuses.str = 0;
            statBonuses.dex = 0;
            statBonuses.wis = 0;
            statBonuses.int = 0;
            statBonuses.cha = 0;
            statBonuses.con += element.con;
            statBonuses.str += element.str;
            statBonuses.dex += element.dex;
            statBonuses.wis += element.wis;
            statBonuses.int += element.int;
            statBonuses.cha += element.cha;
        }
    });
    templateList.forEach((element) => {
        if (element.name == templates){
            console.log(`Template: ${element.name} -> ${element.levelMod}`);
            levelAdjust = element.levelMod;
        }
    });
    calcLevel();
    output();
}
function randomize(){
    let menu = event.target.closest("div").querySelector(".menu");
    let menuOfficial = menu.querySelector(".official").children;
    let menuUnofficial = menu.querySelector(".unofficial").children;
    let menuOptions = [...menuOfficial, ...menuUnofficial];
    let random = Math.floor(Math.random() * menuOptions.length);
    menu.value = menuOptions[random].value;
}


//set char values with event listeners as they are changed
// const classMenu = document.getElementById('class-menu');
// classMenu.addEventListener("change", function() {output(classMenu.value)});
document.getElementById("roll-stats").addEventListener("click", rollStats);
document.getElementById("save-char").addEventListener("click", update);
// document.getElementById('add-class').addEventListener("click", function() {addLevel(classMenu.value)});
// document.getElementById("add-class").addEventListener("click", function() {calc.creatures[calc.saveSlot].addLevel(document.getElementById("classes").value)});

const randomizers = document.querySelectorAll(".randomizer");
randomizers.forEach(btn => {btn.addEventListener("click", randomize)});