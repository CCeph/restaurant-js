import steak from "./resources/steak-feast.jpg";

// Bind DOM
export const content = document.querySelector("#content");

function createTitle() {
  const title = document.createElement("h1");
  title.textContent = "SMOKEY BARBECUE";

  return title;
}

function createHomeButton() {
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.classList.add("home");
  return homeBtn;
}

function createAboutButton() {
  const aboutBtn = document.createElement("button");
  aboutBtn.textContent = "About";
  aboutBtn.classList.add("about");
  return aboutBtn;
}

function createContactButton() {
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact Us";
  contactBtn.classList.add("contact");
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

export function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  header.appendChild(createTitle());
  header.appendChild(createNav());

  return header;
}

function createBanner() {
  const banner = document.createElement("div");
  banner.classList.add("banner");

  const steakImg = new Image();
  steakImg.src = steak;
  banner.appendChild(steakImg);

  return banner;
}

function createIntro() {
  const intro = document.createElement("div");
  intro.classList.add("intro");

  const paragraph = document.createElement("p");
  paragraph.textContent = `This restaurant is amazing. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Cursus mattis molestie a iaculis at
    erat. Sed tempus urna et pharetra. Laoreet non curabitur gravida
    arcu ac. Mi ipsum faucibus vitae aliquet nec ullamcorper.
    Consequat nisl vel pretium lectus quam id leo. Tincidunt lobortis
    feugiat vivamus at. Accumsan lacus vel facilisis volutpat est
    velit. Tortor consequat id porta nibh venenatis cras sed felis
    eget. Urna nunc id cursus metus aliquam.`;
  intro.appendChild(paragraph);

  return intro;
}

function createBodyMain() {
  const bodyMain = document.createElement("div");
  bodyMain.classList.add("main");

  const banner = createBanner();
  bodyMain.appendChild(banner);

  const intro = createIntro();
  bodyMain.appendChild(intro);

  return bodyMain;
}

export function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const text = document.createElement("p");
  text.textContent = "Copyright of CCeph";
  footer.appendChild(text);

  return footer;
}

function createMainGrid() {
  const mainGrid = document.createElement("div");
  mainGrid.classList.add("main-grid");

  const header = createHeader();
  mainGrid.appendChild(header);

  const bodyMain = createBodyMain();
  mainGrid.appendChild(bodyMain);

  const footer = createFooter();
  mainGrid.appendChild(footer);

  return mainGrid;
}

export default function createHomePage() {
  const mainGrid = createMainGrid();
  content.appendChild(mainGrid);
}
