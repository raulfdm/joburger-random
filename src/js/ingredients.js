const ingredients = [
    {
        id: 1,
        name: 'tomato',
        img: 'img/ingredients/tomato-sliced.jpg'
    }, {
        id: 2,
        name: 'Caramelized chili banana',
        img: 'img/ingredients/caramelized-chili-banana.jpg'
    }, {
        id: 3,
        name: 'goats cheese',
        img: 'img/ingredients/goats-cheese.jpg'
    }, {
        id: 4,
        name: 'Gochujang chili',
        img: 'img/ingredients/gochujang-chili.jpg'
    }, {
        id: 5,
        name: 'Maasdam cheese',
        img: 'img/ingredients/maasdam-cheese.jpg'
    }, {
        id: 6,
        name: 'Rocket',
        img: 'img/ingredients/rockets.png'
    }, {
        id: 7,
        name: 'Pickle',
        img: 'img/ingredients/pickle.jpg'
    }, {
        id: 8,
        name: 'Bush peach curry sauce',
        img: 'img/ingredients/bush-peach-curry-sauce.jpg'
    }, {
        id: 9,
        name: 'Emmental cheese',
        img: 'img/ingredients/emmental-cheese.jpg'
    }, {
        id: 10,
        name: 'Red Onion Marmalade',
        img: 'img/ingredients/red-onion-marmalade.jpg'
    }, {
        id: 11,
        name: 'Chipotle',
        img: 'img/ingredients/chipotle.jpg'
    }, {
        id: 12,
        name: 'Pineapple',
        img: 'img/ingredients/pineapple.jpg'
    }, {
        id: 13,
        name: 'Balsamic relish',
        img: 'img/ingredients/balsamic-relish.jpg'
    }, {
        id: 14,
        name: 'Beetroot',
        img: 'img/ingredients/beetroot.jpg'
    }, {
        id: 15,
        name: 'Horseradish',
        img: 'img/ingredients/horseradish.jpg'
    }, {
        id: 16,
        name: 'Salad',
        img: 'img/ingredients/salad.jpeg'
    }, {
        id: 17,
        name: 'Egg',
        img: 'img/ingredients/egg.jpg'
    }, {
        id: 18,
        name: 'Bacon',
        img: 'img/ingredients/bacon.jpg'
    }, {
        id: 19,
        name: 'Jo\'buger relish',
        img: 'img/ingredients/jo-relish.jpg'
    }, {
        id: 20,
        name: 'Roast pepper',
        img: 'img/ingredients/roasted-peppers.jpg'
    }, {
        id: 21,
        name: 'Rocket almond pesto',
        img: 'img/ingredients/rocket-almond-pesto.jpg'
    }, {
        id: 22,
        name: 'Flat mushroom',
        img: 'img/ingredients/flat-mushroom.jpg'
    }, {
        id: 23,
        name: 'Garlic butter',
        img: 'img/ingredients/garlic-butter.jpg'
    }, {
        id: 24,
        name: 'Fresh Salsa',
        img: 'img/ingredients/fresh-salsa.jpg'
    }, {
        id: 25,
        name: 'Avocado',
        img: 'img/ingredients/avocado.png'
    }, {
        id: 26,
        name: 'Smoked Applewood cheese',
        img: 'img/ingredients/smoked-applewood-cheese.jpg'
    }, {
        id: 27,
        name: 'Apple',
        img: 'img/ingredients/apple-sliced.jpg'
    }, {
        id: 28,
        name: 'Brie',
        img: 'img/ingredients/brie-cheese.jpg'
    }, {
        id: 29,
        name: 'Pear ginger jo\'burger relish',
        img: 'img/ingredients/pear-ginger joburger-relish.jpg'
    }, {
        id: 30,
        name: 'Green Thai Curry Mayo',
        img: 'img/ingredients/green-thai-curry-mayo.jpg'
    }, {
        id: 31,
        name: 'Coriander',
        img: 'img/ingredients/coriander.jpg'
    }, {
        id: 32,
        name: 'Chilli',
        img: 'img/ingredients/chilli.jpg'
    }, {
        id: 33,
        name: 'Harrisa Mint Aioli',
        img: 'img/ingredients/harrisa-mint-aioli.jpg'
    }, {
        id: 34,
        name: 'Peanut Chilli Sauce',
        img: 'img/ingredients/peanut-chilli-sauce.jpg'
    }, {
        id: 35,
        name: 'Fourme d\'ambert blue cheese',
        img: 'img/ingredients/fourme-dambert-blue-cheese.jpg'
    }, {
        id: 36,
        name: 'Cream cheese',
        img: 'img/ingredients/cream-cheese.jpg'
    }, {
        id: 37,
        name: 'Fresh mango salsa',
        img: 'img/ingredients/fresh-mango-salsa.jpg'
    }
]

const getIngredients = (ingredientsId) => {
    let result = []
    ingredientsId.forEach(id => {
        ingredients.map(ingredient => {
            if (ingredient.id === id) {
                result.push(ingredient)
            }
        })
    });
    return result
}

const getInfoIngredientes = style => {
    return getIngredients(style.ingredients)
}

const buildImageIgredient = ingredient => {
    return `
        <div class="image">
            <img class="ingredient-image" src="${ingredient.img}" alt="${ingredient.name}">
            <p class="ingredient-name">${ingredient.name}</p>
        </div>
    `;
}