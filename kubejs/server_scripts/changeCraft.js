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