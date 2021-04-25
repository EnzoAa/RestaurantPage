import description from "./modules/description";
import foods from "./modules/products";
import location from "./modules/location";
import header from "./modules/header";

const render = function () {
  //DOM cache

  const father = document.getElementById("content");
  header();
  const bar = document.createElement("div");
  bar.style.cssText = "display:flex;justify-content:center;";
  father.appendChild(bar);
  const nav = document.createElement("div");
  nav.id = "nav";
  bar.appendChild(nav);
  const homeBtn = document.createElement("button");
  homeBtn.innerHTML = "About";
  homeBtn.id = "homebtn";
  homeBtn.onclick = () => {
    document.getElementById("mainContent").style.cssText =
      "visibility:visible;opacity:100%;";
    document.getElementById("products").style.cssText = "";
    document.getElementById("location").style.cssText = "";
    document.getElementById("homebtn").style.cssText =
      "border-bottom: 2px solid white;";
    document.getElementById("productBtn").style.cssText = "";
    document.getElementById("descbtn").style.cssText = "";
  };

  const productBtn = document.createElement("button");
  productBtn.innerHTML = "Pizzas";
  productBtn.id = "productBtn";
  productBtn.onclick = () => {
    document.getElementById("mainContent").style.cssText = "";
    document.getElementById("products").style.cssText =
      "visibility:visible;width:90% ;";
    document.getElementById("location").style.cssText = "";
    document.getElementById("homebtn").style.cssText = "";
    document.getElementById("productBtn").style.cssText =
      "border-bottom: 2px solid white;";
    document.getElementById("descbtn").style.cssText = "";
  };

  const descbtn = document.createElement("button");
  descbtn.innerHTML = "Location";
  descbtn.id = "descbtn";
  descbtn.onclick = () => {
    document.getElementById("mainContent").style.cssText = "display:none;";
    document.getElementById("location").style.cssText =
      "visibility:visible;opacity:100%;margin-top:50px";
    document.getElementById("products").style.cssText = "display:none;";
    document.getElementById("homebtn").style.cssText = "";
    document.getElementById("productBtn").style.cssText = "";
    document.getElementById("descbtn").style.cssText =
      "border-bottom: 2px solid white;";
  };
  descbtn.style.cssText =
    "width:10%;background-color:black;color:white;border-style: none;;border-bottom: 1px solid rgb(92, 92, 92);";

  nav.appendChild(homeBtn);
  nav.appendChild(productBtn);
  nav.appendChild(descbtn);

  description();
  foods();
  location();

  return father;
};
render();
