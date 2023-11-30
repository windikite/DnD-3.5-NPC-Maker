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
        levelMod: 1,
        official: false,
        helpText: `Felhornkin are among the oddest folk to be found anywhere, 
        blurring the line between man and plant. Their name is due to 
        the similarities they share with some of the most feared primal 
        forces in the untamed forests, sending shivers down the spines 
        of woodsmen and hunters when spoken. However, a Felhornkin 
        by your side is one of the best wards from their namesake, 
        despite the superstitions.
        
        
        <br><b>Physical Features</b>
        <br>A Felhornkin’s appearance may not seem too different from the 
        average person. In fact, it can be difficult to identify one on 
        looks alone. While they may present green, brown, burning 
        red or teal hair and eye colors, they show few obvious traces 
        of their ancestry beyond that. Uncommonly, Felhornkin may 
        have visible horns or protrusions, as well as airways for 
        ventilation that protrude out of the skin. Additionally, a 
        final suspicious aspect of them is their unnaturally light 
        frame, as if partly hollow. This isn’t far from the truth as a 
        Felhornkin has bones of wood, flesh and organs like a hardy 
        weed, and various chambers within them for storing air. 
        
        
        <br><b>Ancestral Traits</b>
        <br>Soon after their ancestry manifests, a Felhornkin gains the 
        ability to send powerful gusts of wind up to 10 feet away, as 
        well as +2 on jump and move silently checks. Additionally, it 
        is common to develop some of the following features, each 
        granting a specific benefit when chosen. You can choose one 
        at 1st, 6th, 12th and 18th level. A feature chosen cannot be 
        chosen again.
        
        <br><b>Ligniflesh:</b> Your flesh warps and hardens into bark-encrusted 
        wood on command, sharpening edges and gaining durability.
          -You gain +2 AC as well as +2 damage on unarmed attacks.
        
          <br><b>Leaf Turn:</b> Your body rapidly heals wounds by shedding 
        scratches as leaves, sewing open wounds with bramble and 
        resetting broken bones. 
          -Resting for at least 1 hour purifies you of certain conditions
          and heals you for your Constitution modifier per hour rested.  
          Eligible conditions include Blinded, Deafened, Fatigued, and 
          Sickened. Additionally, minor poisons, burns, wounds and 
          broken bones are healed.
        
          <br><b>Hollow Chords:</b> Parts of your throat, chest and back have 
        telltale wooden protrusions and holes that expand upon your 
        vocal chords.
          -You may speak up to three times louder and farther away 
          while still remaining understandable. Doing so temporarily 
          deafens those who hear within 30 ft.
        
          <br><b>Flowering:</b> A flower-like structure has protruded from your 
        back, entangled and grown from your spine and circulatory 
        system.
          -As an action you can draw in and release stored air, 
          propelling you through the air up to 50 ft away.  

          <br><b>Contact Breathing:</b> You are able to breathe through your 
        skin like an underwater plant would.
          -You can breathe underwater and become immune to 
          asphyxiation.

          <br><b>Breeze:</b> Accompanied by a stiff breeze, you become more 
        difficult to perceive, appearing shaded and blurry.
          -Once per day as a bonus action, you cause the wind to pick 
          up to a moderate gust and gain +2 on hide checks. 

        `,
        source: 'Ancestries',
        con: 0,
        str: 0,
        dex: 0,
        wis: 0,
        int: 0,
        cha: 0,
      },
      {
        name: "Fyrcynn",
        levelMod: 1,
        official: false,
        helpText: `Fyrcynn occupy a unique spot within people’s minds, 
        radiating warmth and light as much as flame and ash. 
        Friendliness and distance seem to go hand in hand, 
        fostering both respect and fear.  
        
        
        <br><b>Physical Features</b>
        Fyrcynn are known to have hair and eye colors that are 
        bright and glow like flame in the light. Though red, orange 
        and yellow are quite common, other striking colors like 
        purple, blue and green still burn with a wicked intensity. 
        Soot and ash may sometimes sprinkle from their skin and 
        hair, particularly while a wound is healing. 
        
        
        <br><b>Ancestral Traits</b>
        Soon after their ancestry manifests, a Fyrcynn gains the 
        ability to ignite or snuff out fire in a 1 foot by 1 foot cube 
        up to 5 feet away as an action, as well as gaining +2 on 
        Intimidate checks. Additionally, it is common to develop 
        some of the following features, each granting a specific 
        benefit when chosen. You can choose one at 1st, 6th, 12th 
        and 18th level. A feature chosen cannot be chosen again. 
        
        <br><b>Smolder:</b> Black patches of soot cover large sections of your 
        body at will. 
          -By flexing your skin the soot gives way to burning coal 
          and billowing smoke, granting +2 ac vs ranged attacks and 
          +2 on hide checks. 
        
          <br><b>Ignition:</b> Your flesh sizzles and cracks as you move, rippling 
        with explosive energy.
          -You gain the ability to ignite your flesh, wreathing a part 
          of your body such as an arm or leg in a mantle of roaring 
          flame that burns to the touch. 
        
          <br><b>Cinderbones:</b> Your bones become black and durable, a prized 
        item among less scrupulous collectors and crafters
          -You gain resistance to bludgeoning damage.
        
          <br><b>Cavpivating Warmth:</b> A captivating warmth always radiates 
        from you, bathing your surroundings in pleasant feelings.
          -You gain +2 on diplomacy and bluff checks.
          <br><b>Internal Volcanism:</b> Your insides churn and burn just below 
          the skin, ready to burst forth like a solar flare.
            -Wounds you sustain cauterize themselves in a shower of 
            sparks and flame, healing you for your constitution modifier 
            when you take damage, up to the amount you took. 

            <br><b>Radiance:</b> Your skin is hot to the touch, heating surfaces with 
          sustained contact. There does not seem to be a limit. 
            -Objects you touch raise in temperature, glowing ever more 
            blinding as the seconds pass.  Mundane metal melts in a minute,
            while more heat-resistant ones may take up to an hour. `,
        source: 'Ancestries',
        con: 0,
        str: 0,
        dex: 0,
        wis: 0,
        int: 0,
        cha: 0,
      },
      {
        name: "Lithari",
        levelMod: 1,
        official: false,
        helpText: `
        <br>Punching heavily above their weight class, Lithari are suited 
        to surviving in extremely hostile environments with little 
        food and voracious predators. They don’t fall easily and 
        when they do, it’s not long before they get back up again. 
        
        
        Physical Features
        <br>As many hues and textures you can find stone and gems, you 
        can find a Lithari to match it. Clear jade eyes of real jade, dark 
        basalt skin composited with real basalt. Copper hair speckled 
        with pure copper and a gold inlay tattoo. These are just a 
        couple variations possible in a Lithari, limited only by avail
        able resources. However, there are some similar traits among 
        most golems, such as more angular ears, noses and muscle 
        definition, as well as being much heavier than expected for 
        their size. It is also not uncommon to find trace grooves and 
        edges along their body outlining muscle groups to a fine 
        degree.
        
        <br><b>Ancestral Traits</b>
        <br>Soon after their ancestry manifests, a Lithari gains the ability 
        to levitate and shape a 1 foot by 1 foot cube of stone or dirt 
        up to 5 feet away, as well as +2 on concentration and tumble 
        checks. Additionally, it is common to develop some of the 
        following features, each granting a specific benefit when 
        chosen. You can choose one at 1st, 6th, 12th and 18th level. 
        A feature chosen cannot be chosen again.
        
        <br><b>Geodic Flesh:</b> Your insides are stone and crystal, with long 
        strata of precious gemstone. 
          -You gain +2 on Fortitude Saving Throws and -5 movement 
          speed.
        
          <br><b>Idealized Visage:</b> Your features become either softer or 
        rougher, akin to an idyllic angel or monstrous demon.
          -When you choose this feature, you gain +2 on intimidate 
          and -2 on diplomacy checks, or the inverse.
        
          <br><b>Petrification:</b> The amount of stone in your skin greatly 
        increases, making you more durable and indistinguishable from 
        it. The low sound of cracking and stone shifting can sometimes 
        be heard when you move.
          -You gain +2 AC and -2 on move silently checks.

          <br><b>Kilnheart:</b> Where your stomach would normally be is a 
        kiln-like hollow, perfect for breaking down both conventional 
        food and raw stone, among other things. The intense heat is 
        expelled through openings on your chest and abdomen, glowing 
        with fire.
          -You can subsist on stone and other inorganic materials as 
          food. Once per day, consuming particularly reactive ones such 
          as coal grant +20 movement speed. 
        
          <br><b>Sculpted Extremeties:</b> You develop any or all between wings, 
        horns or a tail, but only one of the options is imbued with magic.
          -You gain flight at a speed of 30 ft, one 1st level spell you can 
          cast via your horns, or an extra unarmed attack with your tail 
          each round.
          
        `,
        
        source: ``,
        con: 0,
        str: 0,
        dex: 0,
        wis: 0,
        int: 0,
        cha: 0,
      },
      {
        name: "Luxicore",
        levelMod: 1,
        official: false,
        helpText: `While all other ancestries are far older, the Luxicore
        are a recent phenomenon that began a generation ago 
        when the first Luxacore was seen. Since that moment, 
        whether stricken by illness or birthed into it by blood, 
        this group from all corners of the world have had to 
        carve out their own way devoid of help or intervention 
        from the gods, and occasionally their own kin.
        
        
        <br><b>Physical Features</b>
        <br>While a Luxicore can be descended from any other 
        ancestry and have remnants of any previously defining 
        traits, that is where the similarities end. Luxicore are 
        known to gain batlike features as they grow older, such 
        as much larger and potentially furry ears, thin 
        membranes between their fingers, fangs and dark sclera. 
        
        
        <br><b>Ancestral Traits</b>
        <br>Soon after birth or adjustment to their new physiology, 
        a Luxicore gains Blindsight (30 ft) and +2 on Listen 
        checks. Neither of these benefits can be used while 
        deafened. Additionally, it is common to develop some of 
        the following features, each granting a specific benefit 
        when chosen. You can choose one at 1st, 6th, 12th and 
        18th level. A feature chosen cannot be chosen again. 
        
        <br><b>Unusual Appetite:</b> Glowing, vent-like crevices appear on 
        your body, such as on the neck, behind the ears or on the 
        abdomen.
          -When a spell is cast on you, you gain +2 temporary hit 
          points. 
        
          <br><b>Echolocation:</b> Your ears become pointed and enlarged like 
        a bat’s, providing ample improvement to your hearing.
          -Your Blindsight extends to 60 ft.
        
          <br><b>Deceptive Fur:</b> Tufts of fur grow around the ears or 
        on the chest or arms, 
          -You gain +2 on Diplomacy checks and -2 on Intimidate 
          checks. 
        
          <br><b>Elongated Digits:</b>  With longer fingers and toes, deftness
        and accuracy come naturally to you. 
          -You gain +2 on Craft and Slight of Hand checks.
          <br><b>Awkward Lankiness:</b> Your entire body is lengthened, as if 
        pulled by an unrelenting upward force. While your torso may
        only gain a couple inches, your limbs are more drastically
        extended, up to a foot each, particularly from the elbows and
        knees down. 
          -You gain +5 movement and flying speed and +2 on Climb and 
          Jump checks.


          <br><b>Pseudowings:</b> Many small, folded wing-like structures form 
        on the back and arms. Lightweight and tough membranes 
        likewise grow in between your fingers and toes.
          -You can unfurl your wings, and though they may be small 
          they still provide flight ( speed of 30 ft). `,
        source: 'Ancestries',
        con: 0,
        str: 0,
        dex: 0,
        wis: 0,
        int: 0,
        cha: 0,
      },
      {
        name: "Uisce",
        levelMod: 1,
        official: false,
        helpText: `
        <br>(Ish-ke)
        <br>As a people best suited to aquatic or semi-aquatic life, the
        Uisce are naturally most often found close to the water. 
        Whether bog, pond, river, lake or sea, tales of 
        water-breathing folk eager to sell off lost items they’ve 
        dredged up are some of the most quaint floating around. 
        
        
        <br><b>Physical Features</b>
        <br>Uisce are among the most varied of the fey-folk, 
        displaying a wide range of hair, eye and skin colors. Some 
        may have rough, clammy skin while others could have 
        smooth skin with hard plating protecting it. While 
        claw-like nails, webbed feet and pointed teeth are common 
        enough sights to be the telltale marks of an Uisce, the 
        most accurate one is a spiraling pattern of shell-like 
        scales that radiate from the heart and other vital areas.
        
        
        <br><b>Ancestral Traits</b>
        <br>Soon after their ancestry manifests, an Uisce gains the 
        ability to move a 1 foot by 1 foot cube of water up to 5 
        feet away, as well as +2 on swim checks and the ability to 
        breathe underwater. Additionally, it is common to 
        develop some of the following features, each granting a 
        specific benefit when chosen. You can choose one at 1st, 
        6th, 12th and 18th level. A feature chosen cannot be 
        chosen again. 
        
        <br><b>Shellmail:</b> Your scales increase in number and size to 
        provide ample defense. Broken shells slowly reform over 
        time.
          -You gain resistance to slashing damage. 
        
          <br><b>Eye of the Deep:</b> Your eyes turn black and inky with the 
        pupil of an aquatic creature, such as a kraken, shark or 
        other deep sea fish. 
          -You gain darkvision (60ft) and low-light vision 
          (120ft) but become blinded by bright light.
        
          <br><b>Shark Teeth:</b> Both your teeth, nails and scales have 
        developed vicious points and edges.
          -When you succeed in grappling a creature and every 
          turn after that, deal 1d4 damage per level (max 4d4) 
          to that creature.
        
          <br><b>Symbiosis:</b> You are home to a living colony of algae, 
        symbiotically benefiting each other.
          -You gain resistance to poison, or immunity if you 
          already have resistance.
          <br><b>Olfaction:</b> Your sense of smell has heightened to that of an 
          apex predator. 
            -You gain blindsight (15ft) and +2 on search checks, except 
            while in the presence of foul odors. This effect is doubled 
            underwater. 
        `,
        source: 'Ancestries',
        con: 0,
        str: 0,
        dex: 0,
        wis: 0,
        int: 0,
        cha: 0,
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