function food(name, priceSmall, priceBig, description, image) {
  const container = document.createElement("div");
  container.id = "container";
  const textWrapper = document.createElement("div");
  textWrapper.id = "textWrapper";
  container.appendChild(textWrapper);
  const imageWrapper = document.createElement("div");
  imageWrapper.id = "imageWrapper";
  container.appendChild(imageWrapper);
  const productName = document.createElement("p");
  productName.id = "productBigText";
  let product = document.createTextNode(name);
  productName.appendChild(product);
  textWrapper.appendChild(productName);
  //Description
  const desc = document.createElement("p");
  desc.id = "productSmallText";
  let info = document.createTextNode(description);
  desc.appendChild(info);
  textWrapper.appendChild(desc);
  //Prices
  const priceWrapper = document.createElement("div");
  priceWrapper.id = "priceWrapper";
  textWrapper.appendChild(priceWrapper);

  const right = document.createElement("div");
  right.id = "right";
  const left = document.createElement("div");
  priceWrapper.appendChild(right);
  priceWrapper.appendChild(left);

  const priceRigth = document.createElement("p");
  priceRigth.id = "productBigText";
  let priceS = document.createTextNode(priceSmall);
  priceRigth.appendChild(priceS);
  right.appendChild(priceRigth);

  const sizeRigth = document.createElement("p");
  sizeRigth.id = "productSmallText";
  let sizeR = document.createTextNode("35cm");
  sizeRigth.appendChild(sizeR);
  right.appendChild(sizeRigth);

  const priceLeft = document.createElement("p");
  priceLeft.id = "productBigText";
  let priceB = document.createTextNode(priceBig);
  priceLeft.appendChild(priceB);
  left.appendChild(priceLeft);

  const sizeLeft = document.createElement("p");
  sizeLeft.id = "productSmallText";
  let sizeL = document.createTextNode("17cm");
  sizeLeft.appendChild(sizeL);
  left.appendChild(sizeLeft);

  //Image
  const img = document.createElement("img");
  img.src = image;
  img.id = "productImage";
  imageWrapper.appendChild(img);

  return container;
}

function foods() {
  const father = document.getElementById("content");

  const products = document.createElement("div");
  father.appendChild(products);
  products.id = "products";
  const comida = food(
    "Naples",
    "R$ 40",
    "R$ 20",
    "Á tradicional pizza italiana ",
    "images/Italia.png"
  );

  const comida2 = food(
    "New York-style",
    "R$ 40",
    "R$ 20",
    "Á tradicional pizza nova iorquina ",
    "images/NewYork.png"
  );
  products.appendChild(comida);
  products.appendChild(comida2);
}
export default foods;
