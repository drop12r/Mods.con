// Реєструємо подію для серверних рецептів
ServerEvents.recipes(event => {

    // 1. Видаляємо стандартний рецепт верстака (Vanilla)
    event.remove({ output: 'minecraft:crafting_table' })

    // 2. Додаємо новий, складніший рецепт
    // Використовуємо знання JSON для опису інгредієнтів
    event.shaped(
        'minecraft:crafting_table', // Що отримуємо
        [
            'AA',
            'BB'
        ],
        {
            A: '#minecraft:logs',     // Будь-яка колода (тег)
            B: 'minecraft:flint'      // Кремінь
        }
    )

    // Додатково: приклад безформного крафта (Shapeless)
    // Дозволяємо "розібрати" верстак назад на 4 дошки
    event.shapeless('4x minecraft:oak_planks', ['minecraft:crafting_table'])

})