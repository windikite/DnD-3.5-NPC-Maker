function save(name) {
    if (calc.creatures.some(e => e.charName == name)){
        this.overwrite(name);
    } else {
        this.saveAsNew();
    };
}
function load(name){
    this.saveSlot = calc.creatures.findIndex(e => e.charName == name);
    //eventually load information and set to page
}
function overwrite(name) {
    this.load(name);
    const saveSlot = calc.saveSlot;
    calc.creatures[saveSlot].build();
    console.log(`Overwrote existing character named ${name} in character slot ${saveSlot} with new data.`);
    console.log(calc.creatures[saveSlot]);
}
function saveAsNew() {
    let newCreature = new creature();
    newCreature.build();
    newCreature.rollStats();
    this.creatures.push(newCreature);
    console.log(`Saved ${newCreature.charName} as new character.`)
}
function rollStats() {
    Object.keys(this.stats).forEach(stat => {
      const rolls = new Array(4).fill(null).map(x => Math.floor(Math.random() * 6 + 1));
      this.stats[stat] = rolls.reduce((sum, value) => sum + value, 0) - Math.min(...rolls);
    });
    console.log(this.stats)
}
function addLevel(className) {
    this.classes.push(className);
    this.classLevel += classList.find(e => e.className === element).levelMod;
}
// calcLevel() {
//     this.classLevel = this.classes.forEach((element) => {
//         totalLevels = classList.find(e => e.className === element).levelMod;
//         return this.classLevel += levelMod;
//     });
//     console.log(this.classLevel);
// }
function build() {
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