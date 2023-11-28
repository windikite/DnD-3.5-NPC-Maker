let charName = '';//character name
let bio = '';//biological template
let classes = [];//array of classes added to character
let templates = '';//array of templates added to character
let baseLevel = 0;//starting level from bio
let levelAdjust = 0; //increase to level from templates and classes
let effectiveLevel = 0;//final derived from bio, template and classes
const statArray = [];
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
let background = '';
let personality = '';
let culture = '';


//functions
// function addLevel(className){//add class name and mod to character
//     classes.push(className);//add class name to array of classes
//     document.getElementById("class-1-number").innerHTML++;
//     update();
//     console.log(`${charName}'s level adjust is now ${levelAdjust}`);
// };
function calcLevel(){//automatically calculate level on dom change
    effectiveLevel = baseLevel + levelAdjust;
};
function rollArray(bad){
    if (bad == true){
        for (let i = 0; i < 6; i++) {
            const rolls = new Array(4).fill(null).map(x => Math.floor(Math.random() * 6 + 1));
            statArray.push(rolls.reduce((sum, value) => sum + value, 0) - Math.max(...rolls));
        }
    }else{
        for (let i = 0; i < 6; i++) {
            const rolls = new Array(4).fill(null).map(x => Math.floor(Math.random() * 6 + 1));
            statArray.push(rolls.reduce((sum, value) => sum + value, 0) - Math.min(...rolls));
        }
    }
    let statTotal = Object.values(statArray).reduce((sum, value) => sum + value, 0);
    console.log(`Total stats: ${statTotal}`, statArray);
}
function modifyStat(modify){
    let stat = event.target.closest("div").querySelector(".invested-points");
    let points = document.getElementById("points");
    if (modify == "increment"){
        if(points.innerHTML > 0){
            if(stat.innerHTML <= 5){
                points.innerHTML = points.innerHTML - 1;
            }else if(stat.innerHTML <= 7){
                points.innerHTML = points.innerHTML - 2;
            }else{
                points.innerHTML = points.innerHTML - 3;
            }
            stat.innerHTML = +stat.innerHTML + 1;
            
        }
    }else if(modify == "decrement"){
        if(stat.innerHTML > 0){
            if(stat.innerHTML >= 9){
                points.innerHTML = +points.innerHTML + 3;
            }else if(stat.innerHTML >= 7){
                points.innerHTML = +points.innerHTML + 2;
            }else{
                points.innerHTML = +points.innerHTML + 1;
            }
            stat.innerHTML = stat.innerHTML - 1;
        }
    };
    update();
}
function getStats(){
    let mode = document.getElementById("stat-style-select").value;
    let points = document.getElementById("points");
    //clears statArray
    while (statArray.length > 0){
        statArray.pop();
    }
    if (mode == "random"){
        rollArray();
    }else if (mode == "buy"){
        for (let i = 0; i < 6; i++) {
            points.innerHTML = 25;
            statArray.push(8);   
        }
    }else if (mode == "non-elite"){
        for (let i = 0; i < 6; i++) {
            statArray.push(10);   
        }
    }else if (mode == "elite"){
        for (let i = 0; i < 6; i++) {
            statArray.push(17);   
        }
    } else if (mode == "random-bad"){
        rollArray(true);
    }
    update();
}
// function tuneMenu(){
//     let mode = document.getElementById("stat-style-select").value;
//     const pointBuyArray = document.querySelectorAll(" .incrementer, .decrementer, .invested-points");
//     const randomArray = document.querySelectorAll(".stat-select");
//     if (mode == "random"){
//         // pointBuyArray.forEach((element) => {
//         //     element.setAttribute("class", "hidden")
//         // });
//         // randomArray.forEach((element) => {
//         //     element.classList.remove("hidden");
//         //     element.setAttribute("class", "show");
//         // });
//         console.log("random");
//     }else if (mode == "buy"){
//         // randomArray.forEach((element) => {
//         //     element.setAttribute("class", "hidden")
//         // });
//         // pointBuyArray.forEach((element) => {
//         //     element.classList.remove("hidden");
//         //     element.setAttribute("class", "show");
//         // });
//         console.log("buy");
//     }else if (mode == "non-elite"){
//         console.log("non-elite");
//     }else if (mode == "elite"){
//         console.log("elite");
//     }
// }
function output(){//output char info to footer and console
    //output to footer
    // document.getElementById("finalString").innerText = `Saved ${personality} ${charName} the level ${effectiveLevel} ${templates} ${bio} ${classes} of the ${culture}!`;
    // console.log(`Saved ${personality} ${charName} the level ${effectiveLevel} ${templates} ${bio} ${classes} of the ${culture}!`);
    //console log char
    // console.log(`
    // Name: ${charName}\n
    // Level: ${effectiveLevel}\n
    // Classes: ${classes}\n
    // Stats: ${stats}\n
    // Race: ${bio}\n
    // Templates: ${templates} with a LA mod of ${levelAdjust}\n
    // Personality: ${personality}\n
    // Culture: ${culture}\n
    // `);
    //output to stat area
    // document.getElementById("con").innerText = `Con: ${stats.con} + ${statBonuses.con} = ${stats.con + statBonuses.con}`;
    // document.getElementById("str").innerText = `Str: ${stats.str} + ${statBonuses.str} = ${stats.str + statBonuses.str}`;
    // document.getElementById("dex").innerText = `Dex: ${stats.dex} + ${statBonuses.dex} = ${stats.dex + statBonuses.dex}`;
    // document.getElementById("wis").innerText = `Wis: ${stats.wis} + ${statBonuses.wis} = ${stats.wis + statBonuses.wis}`;
    // document.getElementById("int").innerText = `Int: ${stats.int} + ${statBonuses.int} = ${stats.int + statBonuses.int}`;
    // document.getElementById("cha").innerText = `Cha: ${stats.cha} + ${statBonuses.cha} = ${stats.cha + statBonuses.cha}`;
    // document.getElementById("level").innerText = `Lvl: ${baseLevel} + LA: ${levelAdjust} = Final Lvl: ${effectiveLevel}`;
    // document.getElementById("biology").innerText = `Biology: ${bio}`;
    // document.getElementById("background").innerText = `Background: ${background}`;
    // document.getElementById("personality").innerText = `Personality: ${[personality]}`;
    // document.getElementById("culture").innerText = `Culture: ${culture}`;

    const statMenus = document.querySelectorAll(".stat-select");  
    statMenus.forEach((element) => {
        //clears menus
        while (element.length > 0){
            element.removeChild(element.children[0]);
        }
        const choicesArr = [...statArray];
        while (choicesArr.length > 0){
            let option = document.createElement("option");
            let stat = choicesArr.sort((a, b) => a - b).reverse().splice(0, 1);
            option.value = stat;
            option.innerHTML = stat;
            element.appendChild(option);
        }
    })
}
function update(){
    charName = document.getElementById("charName").value;
    bio = document.getElementById("biology-menu").value;
    // classes.push(document.getElementById("class-menu").value);
    // templates.push(document.getElementById("template-menu").value);
    classes = document.getElementById("class-menu").value;
    background = document.getElementById("background-menu").value;
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
            // console.log(`Template: ${element.name} -> ${element.levelMod}`);
            levelAdjust = element.levelMod;
        }
    });
    //update stat bonuses
    document.getElementById("con-bonus").innerHTML = statBonuses.con;
    document.getElementById("str-bonus").innerHTML = statBonuses.str;
    document.getElementById("dex-bonus").innerHTML = statBonuses.dex;
    document.getElementById("wis-bonus").innerHTML = statBonuses.wis;
    document.getElementById("int-bonus").innerHTML = statBonuses.int;
    document.getElementById("cha-bonus").innerHTML = statBonuses.cha;
    //update stats
    const finalStats = document.querySelectorAll(".stat-box");
    finalStats.forEach((element) => {
        let baseStat = element.closest(".stat-row").querySelector(".stat-select").value;
        let statBonus = element.closest(".stat-row").querySelector(".stat-bonus").innerHTML;
        let investedPoints = element.closest(".stat-row").querySelector(".invested-points").innerHTML;
        element.innerHTML = +baseStat + +investedPoints + +statBonus;
    })
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
    update();
}
function randomizeAll(){
    const allMenus = document.querySelectorAll(".menu");
    allMenus.forEach((element) => {
        let menu = element;
        let menuOfficial = menu.querySelector(".official").children;
        let menuUnofficial = menu.querySelector(".unofficial").children;
        let menuOptions = [...menuOfficial, ...menuUnofficial];
        let random = Math.floor(Math.random() * menuOptions.length);
        menu.value = menuOptions[random].value;
    })
    update();
}
//button even listeners
document.getElementById("get-stats").addEventListener("click", getStats);
document.getElementById("save-char").addEventListener("click", update);
//update char when menu changes
const menus = document.querySelectorAll("select");
menus.forEach((element) => element.addEventListener("change", update));
//update char when button is clicked
const buttons = document.querySelectorAll("button");
buttons.forEach((element) => element.addEventListener("click", update));

const incrementers = document.querySelectorAll(".incrementer");
const decrementers = document.querySelectorAll(".decrementer");
incrementers.forEach((element) => element.addEventListener("click", function(){modifyStat("increment")}));
decrementers.forEach((element) => element.addEventListener("click", function(){modifyStat("decrement")}));


const randomizers = document.querySelectorAll(".randomizer");
randomizers.forEach(btn => {btn.addEventListener("click", randomize)});
document.getElementById("random-all").addEventListener("click", randomizeAll);
// document.getElementById("stat-style-select").addEventListener("change", tuneMenu)