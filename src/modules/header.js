function header() {
  const father = document.getElementById("content");
  const title = document.createElement("p");
  title.id = "title";
  var text = document.createTextNode("Za Worldo!");
  title.appendChild(text);
  father.appendChild(title);
}
export default header;
