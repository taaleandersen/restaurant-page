import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header-container");

  const logo = document.createElement("h1");
  logo.classList.add("logo");
  logo.textContent = "Magic pizza";

  header.appendChild(logo);
  header.appendChild(newNavbar());
  return header;
}

function newNavbar() {
  const nav = document.createElement("nav");
  nav.classList.add("menu");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("menu-item");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active-button")) return;
    setActiveButton(homeBtn);
    loadHome();
  });

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menu-item");
  menuBtn.textContent = "Our menu";
  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active-button")) return;
    setActiveButton(menuBtn);
    loadMenu();
  });

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("menu-item");
  contactBtn.textContent = "Contact us";
  contactBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active-button")) return;
    setActiveButton(contactBtn);
    loadContact();
  });
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".menu-item");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active-button");
    }
  });

  button.classList.add("active-button");
}

function createMain() {
  const main = document.createElement("main");
  main.setAttribute("id", "main");
  main.classList.add("main-content");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer-container");
  const copyright = document.createElement("div");
  copyright.innerHTML = `&copy; ${new Date().getFullYear()} taaleandersen`;
  copyright.classList.add("footer-item");
  footer.appendChild(copyright);
  return footer;
}

function startBoilerplate() {
  const content = document.getElementById("main-container");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector(".menu-item"));
  loadHome();
}
export default startBoilerplate;
