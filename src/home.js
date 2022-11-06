function createHome() {
  const home = document.createElement("main");
  home.classList.add("main-content");
  home.appendChild(createP("Worlds best pizza"));
  home.appendChild(createP("Pizza pizza pizza"));

  return home;
}
function createP(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}
function loadHome() {
  const main = document.querySelector("#main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
