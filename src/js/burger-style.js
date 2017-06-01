const getBurgerStyle = () => {
    const styles = [
        {
            name: 'Pure',
            ingredients: [1, 19]
        }, {
            name: 'Ikqezi',
            ingredients: [2, 18, 3]
        }, {
            name: 'Koji Dobson',
            ingredients: [4, 5, 6, 7]
        }, {
            name: 'Bari',
            ingredients: [8, 9]
        }, {
            name: 'Phiri',
            ingredients: [10, 6]
        }, {
            name: 'Mofolo',
            ingredients: [11, 12, 13, 6]
        }, {
            name: 'Mapetla',
            ingredients: [14, 15, 16, 6]
        }, {
            name: 'Jabulani',
            ingredients: [17, 18, 19]
        }, {
            name: 'Dube',
            ingredients: [18, 19]
        }, {
            name: 'Zola',
            ingredients: [20, 21]
        }, {
            name: 'Emdeni',
            ingredients: [19, 22, 23]
        }, {
            name: 'Pimville',
            ingredients: [24, 25]
        }, {
            name: 'Tladi',
            ingredients: [19, 26, 27]
        }, {
            name: 'Naledi',
            ingredients: [28, 29]
        }, {
            name: 'Moroka',
            ingredients: [18, 28, 19]
        }, {
            name: 'Zondi',
            ingredients: [30, 31, 32]
        }, {
            name: 'Oriando',
            ingredients: [33, 6]
        }, {
            name: 'Moletsane',
            ingredients: [34, 31]
        }, {
            name: 'Molapo',
            ingredients: [35, 36, 19]
        }, {
            name: 'Chiawelo',
            ingredients: [37, 6]
        }
    ];

    const style = random(styles.length)
    return styles[style]
};

const fillStyle = () => {
    const $name = document.querySelector('.style-subtitle')
    const $contentIngredients = document.querySelector('.style .segment .images')

    const style = getBurgerStyle()
    const styleIngredients = getInfoIngredientes(style)

    const images = styleIngredients.reduce((atual, ingredient) => {
        return atual + buildImageIgredient(ingredient)
    }, '')
    $name.innerText = style.name;
    $contentIngredients.innerHTML = images;
}