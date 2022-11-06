function createMenu() {
  const menu = document.createElement("main");
  menu.classList.add("main-content");
  menu.appendChild(createP("OUR MENU HERE!"));

  return menu;
}
function createP(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}
function loadMenu() {
  const main = document.querySelector("#main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
