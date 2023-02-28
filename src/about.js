import { createHeader, createFooter, content } from "./homepage";

function createHoursText() {
  const hoursText = document.createElement("p");

  // Used to simplify code as many linebreaks are needed.
  const linebreak = document.createElement("br");
  const lineOne = document.createElement("p");
  lineOne.textContent = "Monday - Friday: 11 AM to 8 PM";
  hoursText.appendChild(lineOne);
  hoursText.appendChild(linebreak);
  const lineTwo = document.createElement("p");
  lineTwo.textContent = "Saturday: 11 AM to 11 PM";
  hoursText.appendChild(lineTwo);
  hoursText.appendChild(linebreak);
  const lineThree = document.createElement("p");
  lineThree.textContent = "Sunday: 11 AM to 5 PM";
  hoursText.appendChild(lineThree);
  hoursText.appendChild(linebreak);

  return hoursText;
}

function createBodyMain() {
  const body = document.createElement("div");
  body.classList.add("main");

  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Hours";
  body.appendChild(hoursTitle);

  const hoursText = createHoursText();
  body.appendChild(hoursText);

  return body;
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

export default function createAboutPage() {
  const mainGrid = createMainGrid();
  content.appendChild(mainGrid);
}
