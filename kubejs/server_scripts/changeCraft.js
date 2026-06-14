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
    event.shaped(
        '2x create:mechanical_crafter',
        [
            'SA ',
            'AA ',
            '   '
        ],
        {
            S: 'minecraft:hopper',
            A: 'create:andesite_alloy'
        }
    )
    event.shaped(
        '1x minecraft:hopper', //
        [
            'SAS',
            ' S ',
            '   '
        ],
        {
            S: 'minecraft:iron_ingot',
            A: 'minecraft:lever'
        }
    )
    event.shaped(
        '1x naturesaura:shockwave_creator', //
        [
            'NAN',
            'SBS',
            'VMV'
        ],
        {
            N: 'ars_nouveau:dull_trinket',
            A: 'naturesaura:token_rage',
            S: 'naturesaura:infused_stone',
            B: 'minecraft:tnt',
            M: 'minecraft:diamond_boots',
            V: 'naturesaura:tainted_gold',
        }
    )
    event.shaped(
        '1x naturesaura:pet_reviver', //
        [
            'MAV',
            'SBS',
            'NAN'
        ],
        {
            N: 'ars_nouveau:dull_trinket',
            A: 'minecraft:gold_ingot',
            S: 'naturesaura:sky_ingot',
            B: 'minecraft:bone',
            M: 'naturesaura:token_grief',
            V: 'naturesaura:token_joy',
        }
    )
})