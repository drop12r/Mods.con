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
        '2x create:mechanical_crafter', //
        [//(# - empty)
            'SA ', // First r
            'AA ', // Second row
            '   '  // Third row
        ],
        {
            S: 'minecraft:hopper',
            A: 'create:andesite_alloy'
        }
    )
    event.shaped(
        '1x minecraft:hopper', //
        [//(# - empty)
            'SAS', // First r
            ' S ', // Second row
            '   '  // Third row
        ],
        {
            S: 'minecraft:iron_ingot',
            A: 'minecraft:lever'
        }
    )
})