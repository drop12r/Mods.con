//adding and changes crafts
// F3+H in game to see object's ID or Teg.
//In game world write command: /reload to save it in world.

ServerEvents.recipes(event => {
    event.shaped(
        '#x minecraft: name', // What you want to craft
        [//(# - empty)
            '###', // First row
            '###', // Second row
            '###'  // Third row
        ],
    )
})

ServerEvents.recipes(event => {

    // Create + Ars Nouveau & Ars Elemental: Mechanical Magic
    // Crushing Archwood in a Millstone or Crushing Wheels (Create)
    // Yields Elemental Dust
    event.recipes.create.crushing([
        '2x ars_elemental:elemental_dust',
        Item.of('ars_elemental:elemental_dust').withChance(0.5) // 50% chance for extra dust
    ], 'ars_elemental:flashing_archwood')
    // Mechanical filling of Source (Create Spout)
    // Creation of Source-Infused Cogwheel
    // Note: using Source Gem as a "fluid" via item deployment mechanics, or a custom fluid if added.
    event.recipes.create.deploying('kubejs:source_infused_cogwheel', [
        'create:cogwheel',
        'ars_nouveau:source_gem'
    ])
    // Mass production of Source Gem via Mechanical Crafter
    // From Amethyst Shards, Golden Sheets, and Source Berry
    event.recipes.create.mechanical_crafting('ars_nouveau:source_gem', [
        ' S ',
        'GAG',
        ' S '
    ], {
        S: 'ars_nouveau:source_berry',
        G: 'create:golden_sheet',
        A: 'minecraft:amethyst_shard'
    })

    // 2. Occultism + Iron's Spells 'n Spellbooks: Demonic Magic
    // Demon's Blood Ink in a heated Basin
    // Epic/Legendary Ink for writing tier 5-6 spells
    event.recipes.create.mixing('irons_spellbooks:epic_ink', [
        'irons_spellbooks:common_ink',
        '3x occultism:demons_blood' // Or Fluid.of('kubejs:demons_blood', 250), if fluid exists
    ]).heated()
    // Occult Spell Tome (Occultism Ritual)
    // Creation of the "Tome of the Beyond" (Netherite-tier Spellbook)
    event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        activation_item: { item: 'irons_spellbooks:legendary_spell_book' }, // Central item
        pentacle_id: 'occultism:craft_djinni', // Required chalk pattern
        duration: 120,
        ritual_dummy: { item: 'occultism:ritual_dummy/custom_ritual' }, // A custom dummy item can be created
        ingredients: [
            { item: 'irons_spellbooks:blood_rune' },
            { item: 'irons_spellbooks:blood_rune' },
            { item: 'irons_spellbooks:ender_rune' },
            { item: 'irons_spellbooks:ender_rune' }
        ],
        result: { item: 'irons_spellbooks:netherite_spell_book' }
    })

    // 3. Global Integration: Mechanical Storm
    // "Mechanical Storm" Ritual (Spell Creation)
    // Mechanical Press presses the spell under immense pressure
    event.recipes.create.pressing('kubejs:kinetic_storm_scroll', [
        'irons_spellbooks:blank_rune' // Replace with the required blank scroll ID
    ])
    // Sequenced Assembly for the Absolute Magic Engine or a Complex Scroll
    // This is an example of combining all magical components into one powerful mechanism
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:absolute_magic_engine')
    ], 'create:brass_casing', [
        event.recipes.create.deploying('kubejs:incomplete_engine', ['kubejs:incomplete_engine', 'create:precision_mechanism']),
        event.recipes.create.deploying('kubejs:incomplete_engine', ['kubejs:incomplete_engine', 'ars_nouveau:source_jar']),
        event.recipes.create.deploying('kubejs:incomplete_engine', ['kubejs:incomplete_engine', 'occultism:spirit_attuned_gem']),
        event.recipes.create.pressing('kubejs:incomplete_engine', 'kubejs:incomplete_engine')
    ]).transitionalItem('kubejs:incomplete_engine').loops(3)
})