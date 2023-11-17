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
    rollStats() {
        Object.keys(this.stats).forEach(stat => {
          const rolls = new Array(4).fill(null).map(x => Math.floor(Math.random() * 6 + 1));
          this.stats[stat] = rolls.reduce((sum, value) => sum + value, 0) - Math.min(...rolls);
        });
        console.log(this.stats)
    }
    addLevel(className) {
        this.classes.push(className);
        this.classLevel += classList.find(e => e.className === element).levelMod;
    }
    build() {
        this.charName = document.getElementById('charName').value;
        this.classes = document.getElementById('classes').value;
        this.bioTemplate = document.getElementById('biology').value;
        this.laTemplates = document.getElementById('templates').value;
        this.laTemplateMod = 1;
        this.personality = document.getElementById('personalities').value;
        this.culture = document.getElementById('cultures').value;
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
        document.getElementById("finalString").innerText = `Saved ${this.personality} ${this.charName} the level ${this.effectiveLevel} ${this.laTemplates} ${this.bioTemplate} ${this.classes} of the ${this.culture}!`
        console.log(`Saved ${this.personality} ${this.charName} the level ${this.effectiveLevel} ${this.laTemplates} ${this.bioTemplate} ${this.classes} of the ${this.culture}!`)
    }
}


document.getElementById("saveChar").addEventListener("click", function() {calc.save(document.getElementById("charName").value)});
// document.getElementById("add-class").addEventListener("click", function() {calcLevel(document.getElementById("classes").value)});
document.getElementById("add-class").addEventListener("click", function() {calc.creatures[calc.saveSlot].addLevel(document.getElementById("classes").value)});