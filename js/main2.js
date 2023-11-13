const calc = {
    creatures: [],
    save:  function(name){
        if (calc.creatures.some(e => e.charName == name)){
            this.overwrite(name);
        } else {
            this.saveAsNew();
        };
    },
    overwrite: function(){
        // calc.creatures[name].build; call build function on object found by name
        console.log(`Overwrote existing character named ${name} with new data.`);
    },
    saveAsNew: function(){
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
        this.classes = {};
        this.cLevel = 0;
        this.eLevel = 0;
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
        Level: ${calcLevel(this)}\n
        Classes: ${this.classes}\n
        Stats: ${this.stats}\n
        Race: ${this.bioTemplate}\n
        Templates: ${this.laTemplates} with a LA mod of ${this.laTemplateMod}\n
        Personality: ${this.personality}\n
        Culture: ${this.culture}\n
        `);
        console.log(`Saved ${this.personality} ${this.charName} the level ${calcLevel(this)} ${this.laTemplates} ${this.bioTemplate} ${this.classes} of the ${this.culture}!`)
    }

}

function calcLevel(creature){
    //take creature's levels from classes and add the levels from templates
    //return effective level
    level = creature.cLevel + creature.laTemplateMod;
    return level;
}
document.getElementById("saveChar").addEventListener("click", function() {calc.save(document.getElementById("charName").value)});