// Bind DOM
const content = document.querySelector("#content");

function createTitle() {
  const title = document.createElement("h1");
  title.textContent = "SMOKEY BARBECUE";

  return title;
}

function createHomeButton() {
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  return homeBtn;
}

function createAboutButton() {
  const aboutBtn = document.createElement("button");
  aboutBtn.textContent = "About";
  return aboutBtn;
}

function createContactButton() {
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact Us";
  return contactBtn;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  nav.appendChild(createHomeButton());
  nav.appendChild(createAboutButton());
  nav.appendChild(createContactButton());

  return nav;
}

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  header.appendChild(createTitle());
  header.appendChild(createNav());

  return header;
}

function createMain() {}

function createFooter() {}

function createMainGrid() {
  const mainGrid = document.createElement("div");
  mainGrid.classList.add("main-grid");

  const header = createHeader();
  mainGrid.appendChild(header);

  const main = createMain();
  // Append

  const footer = createFooter();
  // Append

  return mainGrid;
}

export default function createHomePage() {
  const mainGrid = createMainGrid();
  content.appendChild(mainGrid);
}
