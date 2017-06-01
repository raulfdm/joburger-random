const ingredients = [
    {
        id: 1,
        name: 'tomato',
        image: `http://growyourowngroceries.org/wp-content/uploads/2015/07/bigstock-Red-sliced-tomato-90434192-300x171.jpg`
    }, {
        id: 2,
        name: 'Caramelized chili banana',
        image: `http://omgfood.com/wp-content/uploads/2015/02/caramelized-bananas.jpg`
    }, {
        id: 3,
        name: 'goats cheese',
        image: `http://www.cheesemaking.com/images/recipes/33Chevre/Pics/pic02.jpg`
    }, {
        id: 4,
        name: 'Gochujang chili',
        image: `https://images-na.ssl-images-amazon.com/images/I/51gKVJau3LL.jpg`
    }, {
        id: 5,
        name: 'Maasdam cheese',
        image: `https://www.gourmetfoodshop.co.za/wp-content/uploads/2013/04/Maasdam.jpg`
    }, {
        id: 6,
        name: 'Rocket',
        image: `http://i.dailymail.co.uk/i/pix/2016/07/17/01/05BB030C000005DC-0-image-a-2_1468716713715.jpg`
    }, {
        id: 7,
        name: 'Pickle',
        image: `https://img.buzzfeed.com/buzzfeed-static/static/2015-03/31/1/campaign_images/webdr03/pickle-2-9207-1427781389-2_dblbig.jpg`
    }, {
        id: 8,
        name: 'Bush peach curry sauce',
        image: `https://s-media-cache-ak0.pinimg.com/736x/a5/7b/3f/a57b3ffda0a51f72d48cf2d24ca7ad9d.jpg`
    }, {
        id: 9,
        name: 'Emmental cheese',
        image: `https://www.gourmetfoodshop.co.za/wp-content/uploads/2013/04/Emmental.png`
    }, {
        id: 10,
        name: 'Red Onion Marmalade',
        image: `https://supervalu.ie/image/var/files/recipes/imported/redonionmaralade_460x260.jpg`
    }, {
        id: 11,
        name: 'Chipotle',
        image: `http://www.chipotle-peppers.com/chipotle-peppers.jpg`
    }, {
        id: 12,
        name: 'Pineapple',
        image: `https://images.fineartamerica.com/images-medium-large-5/pineapple-slice-steve-gadomski.jpg`
    }, {
        id: 13,
        name: 'Balsamic relish',
        image: `http://www.oliviersandco.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/4/7426_1.jpg`
    }, {
        id: 14,
        name: 'Beetroot',
        image: `https://conseilssanteetalimentation.files.wordpress.com/2015/08/la-betterave-le-super-anti-age.jpg`
    }, {
        id: 15,
        name: 'Horseradish',
        image: `https://www.organicfacts.net/wp-content/uploads/2013/08/horseradish.jpg`
    }, {
        id: 16,
        name: 'Salad',
        image: `http://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/6/17/3/FNM080109Insert030_s4x3.jpg.rend.hgtvcom.1280.960.jpeg`
    }, {
        id: 17,
        name: 'Egg',
        image: `http://i.dailymail.co.uk/i/pix/2012/09/29/article-2210304-0BADB886000005DC-1_468x434.jpg`
    }, {
        id: 18,
        name: 'Bacon',
        image: `http://theheritagecook.com/wp-content/uploads/2011/10/Slices-of-Cooked-Bacon-iStock.jpg`
    }, {
        id: 19,
        name: 'Jo\'buger relish',
        image: `http://1.bp.blogspot.com/-nyzyE3ngZwQ/VCc59KfVeXI/AAAAAAAAKs4/kBEYfldKmOo/s1600/pepper%2Brelish%2Bcooking.jpg`
    }, {
        id: 20,
        name: 'Roast pepper',
        image: `http://www.daringgourmet.com/wp-content/uploads/2016/09/Roasted-Peppers-2.jpg`
    }, {
        id: 21,
        name: 'Rocket almond pesto',
        image: `http://myfoodbook.com.au/sites/default/files/styles/single_recipe/public/recipe_photo/Rocket%20and%20Almond%20Pesto%20Dip_RESIZED_1.jpg?itok=zI_CID2h`
    }, {
        id: 22,
        name: 'Flat mushroom',
        image: `http://fruitandvegetablesmelbourne.com.au/wp-content/uploads/2015/01/Flat-Mushroom.jpg`
    }, {
        id: 23,
        name: 'Garlic butter',
        image: `http://assets.epicurious.com/photos/57ab6b8c25175b383477359b/master/pass/parsley-garlic-butter.jpg`
    }, {
        id: 24,
        name: 'Fresh Salsa',
        image: `http://www.cbc.ca/inthekitchen/assets_c/2011/10/Salsa1770-thumb-596x350-128550.jpg`
    }, {
        id: 25,
        name: 'Avocado',
        image: `https://avocadosfrommexico.com/wp-content/uploads/2016/11/hmaimg2.png`
    }, {
        id: 26,
        name: 'Smoked Applewood cheese',
        image: `http://wittmanscheese.com/wp-content/uploads/2015/10/Applewood-Cheddar-600x600.jpg`
    }, {
        id: 27,
        name: 'Apple',
        image: `http://static3.businessinsider.com/image/4b604fe60000000000e9b462-506-253/best-rumored-name-for-apple-tablet-apple-slice.jpg`
    }, {
        id: 28,
        name: 'Brie',
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Brie_01.jpg/1200px-Brie_01.jpg`
    }, {
        id: 29,
        name: 'Pear ginger jo\'burger relish',
        image: `http://learntopreserve.com/storage/LemonyGingerPearPreserves1.jpg?__SQUARESPACE_CACHEVERSION=1319892991897`
    }, {
        id: 30,
        name: 'Green Thai Curry Mayo',
        image: `http://cookieandkate.com/images/2015/03/thai-green-curry-with-spinach-1.jpg`
    }, {
        id: 31,
        name: 'Coriander',
        image: `https://www.organicfacts.net/wp-content/uploads/2013/05/Coriander2.jpg`
    }, {
        id: 32,
        name: 'Chilli',
        image: `https://abs-images.aussiefarmers.com.au/unsafe/1000x/https://s3-ap-southeast-2.amazonaws.com/abs-afd-images/store/product/chilli-bullet-red-packet-4404.jpg`
    }, {
        id: 33,
        name: 'Harrisa Mint Aioli',
        image: `http://www.seriouseats.com/recipes/assets_c/2015/06/20150609-aioli-variations-3-thumb-1500xauto-423830.jpg`
    }, {
        id: 34,
        name: 'Peanut Chilli Sauce',
        image: `https://s-media-cache-ak0.pinimg.com/originals/c8/20/14/c82014c1556da06ec02b974f9d3a2156.jpg`
    }, {
        id: 35,
        name: 'Fourme d\'ambert blue cheese',
        image: `http://www.president.uk.com/sites/default/files/four_dambert_french.jpg`
    }, {
        id: 36,
        name: 'Cream cheese',
        image: `http://ichef.bbci.co.uk/food/ic/food_16x9_608/foods/c/cream_cheese_16x9.jpg`
    }, {
        id: 37,
        name: 'Fresh mango salsa',
        image: `http://gooddinnermom.com/wp-content/uploads/42.jpg`
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
            <img class="ingredient-image" src="${ingredient.image}" alt="${ingredient.name}">
            <p class="ingredient-name">${ingredient.name}</p>
        </div>
    `;
}