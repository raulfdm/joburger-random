const getBread = () => {
  const breads = [
 {
      name: "Breton Bun",
      img: "img/breads/bune.jpg"
    },
    {
      name: "Tortilla",
      img: "img/breads/tortila.jpg"
    },
    {
      name: "half-nude",
      img: "img/no-image.png"
    },
    {
      name: "nude",
      img: "img/breads/non.png"
    }
  ];
  const bread = random(breads.length);
  return breads[bread];
};

const fillBread = () => {
  const $name = document.querySelector(".bread-subtitle");
  const $img = document.querySelector(".bread-img");
  const bread = getBread();

  $name.innerHTML = bread.name;
  $img.src = bread.img;
};