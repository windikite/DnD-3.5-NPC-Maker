templateList = [
    {
        name: "Amphibious",
        levelMod: 0,
        official: true,
        helpText: "Gain amphibious quality, swim at 1/2 land speed, add aquatic subtype",
        source: 'Stormwrack pg. 135',
        con: 0,
        str: 0,
        dex: -2,
        wis: 0,
        int: 0,
        cha: 0,
      },
      {
        name: "Unseelie Fey",
        levelMod: 0,
        official: true,
        helpText: "51-100 on d%: fly 2* land speed (average), 91-95 on d%: tremorsense, 96-100 on d%: blindsight, become fey ",
        source: 'Dragon Compendium pg. 222',
        con: -2,
        str: -2,
        dex: 2,
        wis: 0,
        int: 0,
        cha: 2,
      },
      {
        name: "Feytouched",
        levelMod: 0,
        official: true,
        helpText: "become fey, immune to mind-affecting",
        source: '',
        con: -2,
        str: 0,
        dex: 2,
        wis: 0,
        int: 0,
        cha: 2,
      },
      {
        name: "Tiefling",
        levelMod: 0,
        official: true,
        helpText: "become outsider",
        source: '',
        con: 0,
        str: 0,
        dex: 2,
        wis: 0,
        int: 0,
        cha: -2,
      },
      {
        name: "Fairy",
        levelMod: 1,
        official: true,
        helpText: "helptext",
      },
      {
        name: "Spellwarped",
        levelMod: 3,
        official: true,
        helpText: "Become an abberation, usually evil, Spell Resistance 11 + HD. +2 Natural Armor, Spell Absorption",
        source: 'MM3 pg. 162',
        con: 4,
        str: 4,
        dex: 2,
        wis: 0,
        int: 4,
        cha: 0,
      },
      {
        name: "Werewolf (Afflicted)",
        levelMod: 2,
        official: true,
        helpText: `
        <br>A Natural Lycanthrope that bites a victim whose size is within one
        category of its Animal Form can pass on the disease of
        Lycanthropy (FortNeg DC15).
        <br>Able to change from one of its forms to another as a Standard
        Action. Its equipment is not effected & it does not heal.
        <br>Able to communicate with normal & dire versions of its base
        animal, gaining a +4 Racial bonus on checks to influence the
        animal’s attitude.
        <br>Gain Low-Light Vision & Scent abilities.
        <br>Gain Feat: Iron Will.
        <br>Gains (2 + Int mod) skill points for each HD of its base animal.
        <br>Keeps the Racial bonuses to skills of base creature and base animal
        <br>Keeps the base animal’s feats, though if the Humanoid form does
        not qualify for them, they are not available in that form.

        <br><b>Humanoid Form:</b> Natural Armor bonus
        increases by +2.
        <br>Able to cast spells normally.

        <br><b>Hybrid Form:</b> Natural Armor bonus is the
        better of its Humanoid form
        or its Animal Form.
        <br>Size is the larger of the base
        <br>creature & base animal.
        <br>Has the base creature’s speed.
        <br>Str +(base animal’s Str – 10)
        <br>Dex +(base animal’s Dex–10)
        <br>Con +(base animal’s Con–10)
        <br>Gains one bite (Category 6) & two claw (Category 4) attacks.
        <br>Able to cast spells that do not have verbal components.
        <br>Natural Lycanthropes gain Damage Reduction 10/silver.
        <br>Afflicted Lycanthropes gain Damage Reduction 5/silver.

        <br><b>Animal Form:</b> Natural Armor bonus
        increases by +2.
        <br>Able to cast spells that do not have verbal, somatic, or material components (due to metamagics).
        <br>Natural Lycanthropes gain Damage Reduction 10/silver.
        <br>Afflicted Lycanthropes gain Damage Reduction 5/silver.`,
        source: 'MM1 pg. 175',
        con: 4,
        str: 2,
        dex: 4,
        wis: 0,
        int: 0,
        cha: 0,
      },
      {
        name: "Werewolf (Natural)",
        levelMod: 3,
        official: true,
        helpText: `
        <br>A Natural Lycanthrope that bites a victim whose size is within one
        category of its Animal Form can pass on the disease of
        Lycanthropy (FortNeg DC15).
        <br>Able to change from one of its forms to another as a Standard
        Action. Its equipment is not effected & it does not heal.
        <br>Able to communicate with normal & dire versions of its base
        animal, gaining a +4 Racial bonus on checks to influence the
        animal’s attitude.
        <br>Gain Low-Light Vision & Scent abilities.
        <br>Gain Feat: Iron Will.
        <br>Gains (2 + Int mod) skill points for each HD of its base animal.
        <br>Keeps the Racial bonuses to skills of base creature and base animal
        <br>Keeps the base animal’s feats, though if the Humanoid form does
        not qualify for them, they are not available in that form.

        <br><b>Humanoid Form:</b> Natural Armor bonus
        increases by +2.
        <br>Able to cast spells normally.

        <br><b>Hybrid Form:</b> Natural Armor bonus is the
        better of its Humanoid form
        or its Animal Form.
        <br>Size is the larger of the base
        <br>creature & base animal.
        <br>Has the base creature’s speed.
        <br>Str +(base animal’s Str – 10)
        <br>Dex +(base animal’s Dex–10)
        <br>Con +(base animal’s Con–10)
        <br>Gains one bite (Category 6) & two claw (Category 4) attacks.
        <br>Able to cast spells that do not have verbal components.
        <br>Natural Lycanthropes gain Damage Reduction 10/silver.
        <br>Afflicted Lycanthropes gain Damage Reduction 5/silver.

        <br><b>Animal Form:</b> Natural Armor bonus
        increases by +2.
        <br>Able to cast spells that do not have verbal, somatic, or material components (due to metamagics).
        <br>Natural Lycanthropes gain Damage Reduction 10/silver.
        <br>Afflicted Lycanthropes gain Damage Reduction 5/silver.`,
        source: 'MM1 pg. 175',
        con: 4,
        str: 2,
        dex: 4,
        wis: 0,
        int: 0,
        cha: 0,
      },
      {
        name: "Felhornkin",
        levelMod: 0,
        official: false,
        helpText: "helptext",
      },
      {
        name: "Fyrcynn",
        levelMod: 1,
        official: false,
        helpText: "helptext",
      },
      {
        name: "Lithari",
        levelMod: 2,
        official: false,
        helpText: "helptext",
      },
      {
        name: "Luxicore",
        levelMod: 2,
        official: false,
        helpText: "helptext",
      },
      {
        name: "Uisce",
        levelMod: 2,
        official: false,
        helpText: "helptext",
      },
]
{/* <option value="Spellwarped">Spellwarped</option>
<option value="Fairy">Fairy(sprite)</option>
<option value="Undead">Undead</option>
<option value="Vampire">Vampire</option>
<option value="Werewolf">Werewolf</option>

<option value="Fellhornkin">Felhornkin</option>
<option value="Fyrcynn">Fyrcynn</option>
<option value="Lithari">Lithari</option>
<option value="Luxicore">Luxicore</option>
<option value="Uisce">Uisce</option> */}