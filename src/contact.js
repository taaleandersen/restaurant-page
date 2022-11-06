function createContact() {
  const contact = document.createElement("main");
  contact.classList.add("main-content");
  contact.appendChild(createP("CONTACT US"));

  return contact;
}
function createP(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}
function loadContact() {
  const main = document.querySelector("#main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
