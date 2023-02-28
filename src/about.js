import { createHeader, createFooter, content } from "./homepage";

function createBodyMain() {
  const body = document.createElement("div");

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
