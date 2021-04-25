function description() {
  const father = document.getElementById("content");
  //central DOm
  const central = document.createElement("div");
  central.id = "mainContent";
  father.appendChild(central);
  //Central texts
  const textWrapper = document.createElement("div");
  central.appendChild(textWrapper);
  textWrapper.id = "descriptionWrapper";
  const imageWrapper = document.createElement("div");
  central.appendChild(imageWrapper);
  const subtitle = document.createElement("p");
  subtitle.id = "subtitle";
  var subtext = document.createTextNode(
    "Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Si num tem leite então bota uma pinga aí cumpadi! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Diuretics paradis num copo é motivis de denguis. Mé faiz elementum girarzis, nisi eros vermeio."
  );
  subtitle.appendChild(subtext);
  textWrapper.appendChild(subtitle);
  const img = document.createElement("img");
  img.src = "../src/Pizza.png";
  img.id = "productImage";
  imageWrapper.appendChild(img);
}
export default description;
