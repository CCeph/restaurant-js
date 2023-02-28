import "./style.css";
import fillHomePage from "./homepage";

// Bind DOM
const content = document.querySelector("#content");

function deletePage() {
  content.innerHTML = "";
}

function bindEvents() {
  const homeBtn = document.querySelector(".nav .home");
  homeBtn.addEventListener("click", createHomePage);

  // about

  // contact
}

function createHomePage() {
  deletePage();
  fillHomePage();
  bindEvents();
}

function createAboutPage() {
  deletePage();
  // fill
  bindEvents();
}

createHomePage();
