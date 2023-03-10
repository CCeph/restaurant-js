import { createHeader, createFooter, content } from "./homepage";

function createHoursText() {
  const hoursText = document.createElement("div");
  hoursText.classList.add("hours");

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

function createContactForm() {
  const contactForm = document.createElement("form");
  contactForm.setAttribute("action", " ");

  // name
  const nameLabel = document.createElement("label");
  contactForm.appendChild(nameLabel);
  nameLabel.textContent = "Name: (Required)";
  nameLabel.setAttribute("for", "name");

  const nameInput = document.createElement("input");
  contactForm.appendChild(nameInput);
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("required", "");
  nameInput.setAttribute("id", "name");

  // email
  const emailLabel = document.createElement("label");
  contactForm.appendChild(emailLabel);
  emailLabel.textContent = "Email: (Required)";
  emailLabel.setAttribute("for", "email");

  const emailInput = document.createElement("input");
  contactForm.appendChild(emailInput);
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("required", "");
  emailInput.setAttribute("id", "email");

  // subject
  const subjectLabel = document.createElement("label");
  contactForm.appendChild(subjectLabel);
  subjectLabel.textContent = "Subject: (Required)";
  subjectLabel.setAttribute("for", "subject");

  const subjectInput = document.createElement("input");
  contactForm.appendChild(subjectInput);
  subjectInput.setAttribute("type", "text");
  subjectInput.setAttribute("required", "");
  subjectInput.setAttribute("id", "subject");

  // message
  const messageLabel = document.createElement("label");
  contactForm.appendChild(messageLabel);
  messageLabel.textContent = "Message: (Required)";
  messageLabel.setAttribute("for", "message");

  const messageInput = document.createElement("textarea");
  contactForm.appendChild(messageInput);
  messageInput.setAttribute("id", "message");
  messageInput.setAttribute("cols", "30");
  messageInput.setAttribute("rows", "10");
  messageInput.setAttribute("required", "");

  // submit
  const submit = document.createElement("button");
  contactForm.appendChild(submit);
  submit.textContent = "Submit";

  return contactForm;
}

function createContactText() {
  const contactText = document.createElement("div");
  contactText.classList.add("contact");

  const contactForm = createContactForm();
  contactText.appendChild(contactForm);

  return contactText;
}

function createBodyMain() {
  const body = document.createElement("div");
  body.classList.add("main");

  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Hours";
  body.appendChild(hoursTitle);

  const hoursText = createHoursText();
  body.appendChild(hoursText);

  const contactUsTitle = document.createElement("h2");
  contactUsTitle.textContent = "Contact Us";
  body.appendChild(contactUsTitle);

  const contactUsText = createContactText();
  body.appendChild(contactUsText);

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
