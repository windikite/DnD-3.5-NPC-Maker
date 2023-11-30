let charName = '';//character name
const bio = [];//biological template
const classes = [];
const templates = [];
const background = [];
const personalityArchetype = [];
const culture = [];
const skills = [];
const statArray = [];
let saves = {
    fort: 0,
    will: 0,
    ref: 0,
}
let level = 0;//starting level from bio

let stats = {//base statistics
    con: 0,
    str: 0,
    dex: 0,
    wis: 0,
    int: 0,
    cha: 0,
};
let statBonuses = {
    con: 0,
    str: 0,
    dex: 0,
    wis: 0,
    int: 0,
    cha: 0,
};
let finalStats = {
    con: 0,
    str: 0,
    dex: 0,
    wis: 0,
    int: 0,
    cha: 0,
};

const dict = {
    poorSave: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    goodSave: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 12],
    skills: [`Appraise`, `Balance`, `Bluff`]
}

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
    updateFromDom();
}
function getStats(){
    let mode = document.getElementById("stat-style-select").value;
    let points = document.getElementById("points");
    //clears statArray
    while (statArray.length > 0){
        statArray.pop();
    }
    //clear points area
    points.innerHTML = 0;
    const allInvestedPoints = document.querySelectorAll(".invested-points");
    allInvestedPoints.forEach((element) => {
        element.innerHTML = 0;
    });
    //set up new stat area
    if (mode == "random"){
        rollArray();
    }else if (mode == "buy"){
        for (let i = 0; i < 6; i++) {
            points.innerHTML = 25;
            statArray.push(8);   
        }
    }else if (mode == "standard-monster"){
        for (let i = 0; i < 6; i++) {
            statArray.push(10);   
        }
    }else if (mode == "non-elite"){
        const array = [13, 12, 11, 10, 9, 8];
        array.forEach((element) => {statArray.push(element)});
    }else if (mode == "elite"){
        const array = [15, 14, 13, 12, 10, 8];
        array.forEach((element) => {statArray.push(element)});
    } else if (mode == "random-bad"){
        rollArray(true); 
    }
    const statMenus = document.querySelectorAll(".stat-select");  
    statMenus.forEach((element) => {
        //clears menus
        while (element.length > 0){
            element.removeChild(element.children[0]);
        }
        let defaultChoice = document.createElement("option");
        defaultChoice.value = "";
        defaultChoice.innerHTML = "--";
        element.appendChild(defaultChoice);

        const choicesArr = [...statArray];
        while (choicesArr.length > 0){
            let option = document.createElement("option");
            let stat = choicesArr.splice(0, 1);
            // .sort((a, b) => a - b).reverse()
            option.value = stat;
            option.innerHTML = stat;
            element.appendChild(option);
        }
    })
    updateFromDom();
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
function cullOptions(){
    let chosenOption = event.target;
    // let chosenOptionIndex = Array.from(event.target).findIndex(option => option.value == chosenOption.value);
    const allStatMenus = Array.from(document.querySelectorAll(".stat-select"));
    const otherMenus = allStatMenus.filter(e => e.name != chosenOption.name);
    otherMenus.forEach((m) => {
        m.childNodes.forEach((o) => {
            if (o.value == chosenOption.value){
                m.removeChild(o)
            }
        })
    });
}
function output(){
    //update stat bonuses
    document.getElementById("con-bonus").innerHTML = statBonuses.con;
    document.getElementById("str-bonus").innerHTML = statBonuses.str;
    document.getElementById("dex-bonus").innerHTML = statBonuses.dex;
    document.getElementById("wis-bonus").innerHTML = statBonuses.wis;
    document.getElementById("int-bonus").innerHTML = statBonuses.int;
    document.getElementById("cha-bonus").innerHTML = statBonuses.cha;
    //export to footer
    document.getElementById("export").innerHTML = `
    <br>${charName}
    <br>
    <br>Level ${level} ${classes[0].name}
    <br>
    <br><b>Str:</b> ${document.getElementById("final-str").innerHTML} || 
    <b>Dex:</b> ${document.getElementById("final-dex").innerHTML} || 
    <b>Con:</b> ${document.getElementById("final-con").innerHTML} || 
    <b>Int:</b> ${document.getElementById("final-int").innerHTML} || 
    <b>Wis:</b> ${document.getElementById("final-wis").innerHTML} || 
    <b>Cha:</b> ${document.getElementById("final-cha").innerHTML}
    <br>
    <br><b>Fortitude Save</b>: ${saves.fort} <b>Willpower Save</b>: ${saves.will} <b>Reflex Save</b>: ${saves.ref}
    <br>
    <br><b>Skills:</b> ${skills.join(", ")}
    <br><b>${bio[0].name}</b>: ${bio[0].helpText}
    <br>
    <br><b>${templates[0].name}</b>: ${templates[0].helpText}
    <br>
    <br><b>${culture[0].name}</b>: ${culture[0].helpText}
    <br>
    <br><b>${background[0].name}</b>: ${background[0].helpText}
    <br>
    <br><b>${personalityArchetype[0].name}</b>: ${personalityArchetype[0].helpText}
    `

}

function compileCharacter(source, name, array){
    source.forEach((element) => {
        if (element.name == name){
            element.levelMod ? level += element.levelMod : null;
            element.con ? statBonuses.con += element.con : null; 
            element.str ? statBonuses.str += element.str : null;
            element.dex ? statBonuses.dex += element.dex : null;
            element.wis ? statBonuses.wis += element.wis : null;
            element.int ? statBonuses.int += element.int : null;
            element.cha ? statBonuses.cha += element.cha : null;

            function getSaves(s){
                if(element[s] == `good`){
                    saves[s] += dict.goodSave[level-1];
                }else if(element[s] == `poor`){
                    saves[s] += dict.poorSave[level-1];
                }
            };
            element.fort ? getSaves(`fort`) : null;
            element.will ? getSaves(`will`) : null;
            element.ref ? getSaves(`ref`) : null;

            function getSkills(s){s.split(", ").forEach(e => {skills.push(e)});};
            
            element.skills ? getSkills(element.skills) : null;
            array.pop();
            array.push(element);
        }
    });
};


function updateFromDom(){
    //dom elements
    charName = document.getElementById("charName").value;
    let bioName = document.getElementById("biology-menu").value;
    let className = document.getElementById("class-menu").value;
    let backgroundName = document.getElementById("background-menu").value;
    let templateName = document.getElementById("template-menu").value;
    let personalityArchetypeName = document.getElementById("personality-archetype-menu").value;
    let cultureName = document.getElementById("culture-menu").value;
    //search lists for chosen values and update char
    level = 0;
    statBonuses.con = 0;
    statBonuses.str = 0;
    statBonuses.dex = 0;
    statBonuses.wis = 0;
    statBonuses.int = 0;
    statBonuses.cha = 0;
    saves.fort = 0;
    saves.will = 0;
    saves.ref = 0;
    while (skills.length > 0){
        skills.pop();
    }
    compileCharacter(bioList, bioName, bio);
    compileCharacter(classList, className, classes);
    compileCharacter(backgroundList, backgroundName, background);
    compileCharacter(templateList, templateName, templates);
    compileCharacter(personalityArchetypeList, personalityArchetypeName, personalityArchetype);
    compileCharacter(cultureList, cultureName, culture);
    //update stats
    
    const finalStats = document.querySelectorAll(".stat-box");
    finalStats.forEach((element) => {
        let baseStat = element.closest(".stat-row").querySelector(".stat-select").value;
        let statBonus = element.closest(".stat-row").querySelector(".stat-bonus").innerHTML;
        let investedPoints = element.closest(".stat-row").querySelector(".invested-points").innerHTML;
        element.innerHTML = +baseStat + +investedPoints + +statBonus;
    });
    output();
}
function randomize(){
    let menu = event.target.closest("div").querySelector(".menu");
    let menuOfficial = menu.querySelector(".official").children;
    let menuUnofficial = menu.querySelector(".unofficial").children;
    let menuOptions = [...menuOfficial, ...menuUnofficial];
    let random = Math.floor(Math.random() * menuOptions.length);
    menu.value = menuOptions[random].value;
    updateFromDom();
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
    updateFromDom();
}
//button even listeners
document.getElementById("get-stats").addEventListener("click", getStats);
// document.getElementById("save-char").addEventListener("click", update);
//update char when menu changes
const menus = document.querySelectorAll("select");
menus.forEach((element) => element.addEventListener("change", updateFromDom));
//update char when button is clicked
const buttons = document.querySelectorAll("button");
buttons.forEach((element) => element.addEventListener("click", updateFromDom));
//cull available options when array value is chosen
// const statMenus1 = document.querySelectorAll(".stat-select"); 
// statMenus1.forEach((element) => element.addEventListener("change", cullOptions));
//monitor incrementers/decrementers for point buy
const incrementers = document.querySelectorAll(".incrementer");
const decrementers = document.querySelectorAll(".decrementer");
incrementers.forEach((element) => element.addEventListener("click", function(){modifyStat("increment")}));
decrementers.forEach((element) => element.addEventListener("click", function(){modifyStat("decrement")}));
//monitor randomize buttons with event listeners
const randomizers = document.querySelectorAll(".randomizer");
randomizers.forEach(btn => {btn.addEventListener("click", randomize)});
document.getElementById("random-all").addEventListener("click", randomizeAll);
// document.getElementById("stat-style-select").addEventListener("change", tuneMenu)