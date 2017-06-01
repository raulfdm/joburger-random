const random = n => {
    return Math.floor(Math.random() * n);
};

const $btnGenerate = document.querySelector('#generateBurger');
const $name = document.querySelector('.style-name');
const $contentIngredients = document.querySelector('.style-ingredients');

const mountElement = (node, information, options = {
    add: false
}) => {

    if (!options.add) {
        node.innerHTML = information;
    } else {
        node.innerHTML += information;
    }
}
const generateRandomBurger = event => {
    fillBurger();
    fillBread();
    fillStyle();
}

$btnGenerate.addEventListener('click', generateRandomBurger)
