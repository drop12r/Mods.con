//Remove crafts
// F3+H in game to see object's ID or Teg.
//In game world write command: /reload to save it in world.

ServerEvents.recipes(event => {

    // Видаляємо стандартних рецепт
    event.remove({ output: 'minecraft:crafting_table' })
    event.remove({ output: 'minecraft:stonecutter' })
    event.remove({ output: 'minecraft:cartography_table' })
    event.remove({ output: 'minecraft:fletching_table' })
    event.remove({ output: 'minecraft:smithing_table' })
    event.remove({ output: 'minecraft:grindstone' })
    event.remove({ output: 'minecraft:loom' })
    event.remove({ output: 'minecraft:furnace' })
    event.remove({ output: 'minecraft:black_furnace' })
    event.remove({ output: 'minecraft:deepslate_furnace' })
    event.remove({ output: 'minecraft:smoker' })
    event.remove({ output: 'minecraft:blast_furnace' })
    event.remove({ output: 'minecraft:enchanting_table' })
    event.remove({ output: 'minecraft:brewing_stand' })
    event.remove({ output: 'minecraft:chest'})
    event.remove({ output: 'minecraft:barrel' })
    event.remove({ output: 'minecraft:ender_chest' })
    event.remove({ output: 'minecraft:shulker_box' })
    event.remove({ output: 'minecraft:lectern' })
    event.remove({ output: 'minecraft: '})

    // Видалив зброю + броню
    event.remove({ output: /^minecraft:.*_(sword|axe|pickaxe|shovel|hoe)$/ })
    event.remove({ output: 'minecraft:bow' })
    event.remove({ output: 'minecraft:crossbow' })
    event.remove({ output: 'minecraft:shield' })

    const armorTypes = ['helmet', 'chestplate', 'leggings', 'boots']
    const materials = ['leather', 'chainmail', 'iron', 'golden', 'diamond', 'netherite']

    materials.forEach(mat => {
        armorTypes.forEach(type => {
            event.remove({ output: `minecraft:${mat}_${type}` })
        })
    })


    // Видалив всю їжу
    const vanillaFood = [
        'minecraft:apple', 'minecraft:bread', 'minecraft:cooked_beef', 'minecraft:beef',
        'minecraft:cooked_chicken', 'minecraft:chicken', 'minecraft:cooked_porkchop', 'minecraft:porkchop',
        'minecraft:cooked_mutton', 'minecraft:mutton', 'minecraft:cooked_rabbit', 'minecraft:rabbit',
        'minecraft:cooked_cod', 'minecraft:cod', 'minecraft:cooked_salmon', 'minecraft:salmon',
        'minecraft:potato', 'minecraft:baked_potato', 'minecraft:carrot', 'minecraft:golden_carrot',
        'minecraft:golden_apple', 'minecraft:enchanted_golden_apple', 'minecraft:pumpkin_pie', 'minecraft:cookie'
    ]
    vanillaFood.forEach(food => event.remove({ output: food }))

    // Це приберая звичайну скриню, скриню-пастку, ендер-скриню та бочки
    event.remove({ output: /.*chest$/ })
    event.remove({ output: 'minecraft:barrel' })


})

// ice and fire
ServerEvents.recipes(event => {
    // Видалив всі рецепти з моду ice and fire:
    // sword, axe, pickaxe, shovel, hoe, bow, flail, rapier, dagger
    event.remove({
        mod: 'iceandfire',
        output: /.*_(sword|axe|pickaxe|shovel|hoe|bow|flail|rapier|dagger)$/
    })
    event.remove({ output: 'iceandfire:dragonbone_arrow' })
    event.remove({ output: 'iceandfire:hippogryph_sword' })
    event.remove({ output: 'iceandfire:lich_staff' })
    event.remove({ output: 'iceandfire:hydra_arrows' })
})
ServerEvents.recipes(event => {

        event.remove({
            mod: 'Apotheosis',
            output: /.*_(gem|sockets|malice|vial|material|sigil|upgrade)$/
        })
    })
