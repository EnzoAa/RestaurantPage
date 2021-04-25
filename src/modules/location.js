function location() {
  const father = document.getElementById("content");
  //central DOm
  const central = document.createElement("div");
  central.id = "location";
  father.appendChild(central);
  //Central texts
  const adressbox = document.createElement("p");
  adressbox.id = "locationBigText";
  var adress = document.createTextNode("  Location");
  adressbox.appendChild(adress);
  const locationbox = document.createElement("p");
  locationbox.id = "locationSmallText";
  var location = document.createTextNode("Cairo");
  locationbox.appendChild(location);
  const contactbox = document.createElement("p");
  contactbox.id = "locationBigText";

  var contact = document.createTextNode(" Phone Number");
  contactbox.appendChild(contact);
  const numberbox = document.createElement("p");
  numberbox.id = "locationSmallText";
  var number = document.createTextNode(" 4002-8922");
  numberbox.appendChild(number);
  const textbox = document.createElement("p");
  textbox.id = "locatioSubText";
  var text = document.createTextNode(
    " Diuretics paradis num copo é motivis de denguis. Mé faiz elementum girarzis, nisi eros vermeio."
  );
  textbox.appendChild(text);

  central.appendChild(adressbox);
  central.appendChild(locationbox);
  central.appendChild(contactbox);
  central.appendChild(numberbox);
  central.appendChild(textbox);
}
export default location;
