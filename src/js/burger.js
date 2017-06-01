const getBurger = () => {
  const burguers = [
    {
      burger: "Beef",
      image: "img/burgers/beef.jpg"
    },
    {
      burger: "Lamb",
      image: "img/burgers/lamb.jpg"
    },
    {
      burger: "Grilled Chicken Fillet",
      image: "img/burgers/grilled-chicken.jpg"
    },
    {
      burger: "Spiced Chicken Fillet",
      image: "img/burgers/spiced-chicken.jpg"
    },
    {
      burger: "Grilled Cod",
      image: "img/burgers/grilled-cod.jpg"
    },
    {
      burger: "Veggie Burger: Chickpea, red pepper & Coriander",
      image: "img/no-image.png"
    },
    {
      burger: "Veggie Burger: Sweet potato, roast red onion & mushroom",
      image: "img/no-image.png"
    }
  ];

  const burger = random(burguers.length);
  return burguers[burger];
};

const fillBurger = () => {
  const $name = document.querySelector(".burger-subtitle");
  const $img = document.querySelector(".burger-img");
  const burger = getBurger();
  $name.innerHTML = burger.burger;
  $img.src = burger.image;
};