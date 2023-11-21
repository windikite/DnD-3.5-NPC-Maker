const calc = {
    saveSlot: 0,
    creatures: [],
    save: function(name) {
        if (calc.creatures.some(e => e.charName == name)){
            this.overwrite(name);
        } else {
            this.saveAsNew();
        };
    },
    load: function(name){
        this.saveSlot = calc.creatures.findIndex(e => e.charName == name);
        //eventually load information and set to page
    },
    overwrite: function(name) {
        this.load(name);
        const saveSlot = calc.saveSlot;
        calc.creatures[saveSlot].build();
        console.log(`Overwrote existing character named ${name} in character slot ${saveSlot} with new data.`);
        console.log(calc.creatures[saveSlot]);
    },
    saveAsNew: function () {
        let newCreature = new creature();
        newCreature.build();
        newCreature.rollStats();
        this.creatures.push(newCreature);
        console.log(`Saved ${newCreature.charName} as new character.`)
    }
}

class creature{
    constructor(){
        this.charName = '';
        this.classes = [];
        this.baseLevel = 0;
        this.classLevel = 0;
        this.effectiveLevel = this.baseLevel + this.classLevel;
        this.stats = {
            con: 0,
            str: 0,
            dex: 0,
            wis: 0,
            int: 0,
            cha: 0,
        };
        this.bioTemplate = '';
        this.laTemplates = [];
        this.laTemplateMod = 0;
        this.personality = '';
        this.culture = '';
    };
    rollStats() {
        Object.keys(this.stats).forEach(stat => {
          const rolls = new Array(4).fill(null).map(x => Math.floor(Math.random() * 6 + 1));
          this.stats[stat] = rolls.reduce((sum, value) => sum + value, 0) - Math.min(...rolls);
        });
        console.log(this.stats)
    }
    addLevel(element) {
        this.classes.push(element);
        this.classLevel += classList.find(e => e.className === element).levelMod;
    }
    build() {
        //bind dom elements
        this.charName = document.getElementById('charName').value;
        this.classes = document.getElementById('class-menu').value;
        this.bioTemplate = document.getElementById('biology-menu').value;
        this.laTemplates = document.getElementById('template-menu').value;
        this.laTemplateMod = 1;
        this.personality = document.getElementById('personality-menu').value;
        this.culture = document.getElementById('culture-menu').value;
        //console log char
        console.log(`
        Name: ${this.charName}\n
        Level: ${this.effectiveLevel}\n
        Classes: ${this.classes}\n
        Stats: ${this.stats}\n
        Race: ${this.bioTemplate}\n
        Templates: ${this.laTemplates} with a LA mod of ${this.laTemplateMod}\n
        Personality: ${this.personality}\n
        Culture: ${this.culture}\n
        `);
        //output to footer
        document.getElementById("finalString").innerText = `Saved ${this.personality} ${this.charName} the level ${this.effectiveLevel} ${this.laTemplates} ${this.bioTemplate} ${this.classes} of the ${this.culture}!`
        console.log(`Saved ${this.personality} ${this.charName} the level ${this.effectiveLevel} ${this.laTemplates} ${this.bioTemplate} ${this.classes} of the ${this.culture}!`)
    }
}



//menu functions
// function showClasses() {
//     const i = gemChoice.selectedIndex;
//     const gem = gemstones[i-1];
//     gemName.textContent = `Name: ${gem.name}`;
//     gemEtym.textContent = `Etymology: ${gem.etymology}`;
//     gemHardness.textContent = `Hardness: ${gem.hardness}`;
//     gemBirthmonth.textContent = `Birthmonth: ${gem.birthstone}`;
//     gemColors.textContent = `Colors: ${gem.colors}`;
//     gemWearability.textContent = `Wearability: ${gem.wearability}`;
//     gemImg.src = `images/gems/${gem.name}.webp`
// };

//event listeners
document.getElementById("saveChar").addEventListener("click", function() {calc.save(document.getElementById("charName").value)});
document.getElementById("add-class").addEventListener("click", function() {calc.creatures[calc.saveSlot].addLevel(document.getElementById("classes").value)});

