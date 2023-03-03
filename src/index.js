import "./style.css";
import fillHomePage from "./homepage";
import fillMenuPage from "./menu";
import fillContactPage from "./contact";

// Bind DOM
const content = document.querySelector("#content");

function deletePage() {
  content.innerHTML = "";
}

function bindEvents() {
  // Binds the home button to replacing the current page with the home page.
  const homeBtn = document.querySelector(".nav .home");
  // eslint-disable-next-line no-use-before-define
  homeBtn.addEventListener("click", createHomePage);

  const menuBtn = document.querySelector(".nav .menu");
  // eslint-disable-next-line no-use-before-define
  menuBtn.addEventListener("click", createMenuPage);

  const contactBtn = document.querySelector(".nav .contact");
  // eslint-disable-next-line no-use-before-define
  contactBtn.addEventListener("click", createContactPage);
}

// Erases the current page and replaces it with the Home page.

function createHomePage() {
  deletePage();
  fillHomePage();
  bindEvents();
}

// Erases the current page and replaces it with the Menu page.

function createMenuPage() {
  deletePage();
  fillMenuPage();
  bindEvents();
}

// Erases the current page and replaces it with the Contact page.

function createContactPage() {
  deletePage();
  fillContactPage();
  bindEvents();
}

// Currently only used for debugging. Change to createHomePage() later.
createContactPage();
