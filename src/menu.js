import { createHeader, createFooter, content } from "./homepage";
import steakFeast from "./resources/steak-feast.jpg";
import salmonImg from "./resources/salmon.jpg";
import sliderImg from "./resources/burger2.jpg";
import burgerImg from "./resources/burger3.jpg";
import wingsImg from "./resources/wings.jpg";
import shrimpImg from "./resources/shrimp.jpg";

function createDish(name, imageSrc, description) {
  const foodContainer = document.createElement("div");
  foodContainer.classList.add("food-container");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  foodContainer.appendChild(imageContainer);

  const image = new Image();
  image.src = imageSrc;
  imageContainer.appendChild(image);

  const foodTitle = document.createElement("h3");
  foodTitle.textContent = name;
  foodContainer.appendChild(foodTitle);

  const foodText = document.createElement("p");
  if (description === undefined) {
    foodText.textContent = `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.`;
  } else {
    foodText.textContent = description;
  }
  foodContainer.appendChild(foodText);

  return foodContainer;
}

function createBodyMain() {
  const body = document.createElement("div");
  body.classList.add("menu-grid");

  const firstItem = createDish("Steak Feast", steakFeast);
  body.appendChild(firstItem);

  const secondItem = createDish("Slider", sliderImg);
  body.appendChild(secondItem);

  const thirdItem = createDish("Burger", burgerImg);
  body.appendChild(thirdItem);

  const fourthItem = createDish("Salmon", salmonImg);
  body.appendChild(fourthItem);

  const fifthItem = createDish("Wings", wingsImg);
  body.appendChild(fifthItem);

  const sixthItem = createDish("Shrimp", shrimpImg);
  body.appendChild(sixthItem);

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

export default function createContactPage() {
  const mainGrid = createMainGrid();
  content.appendChild(mainGrid);
}
