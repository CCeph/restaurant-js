import "./style.css";
import restaurant from "./resources/steak-feast.jpg";

const pic = new Image();
pic.src = restaurant;

const container = document.querySelector(".banner");
container.appendChild(pic);

console.log("Webpack works");
