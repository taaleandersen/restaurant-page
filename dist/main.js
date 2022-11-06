/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/boilerPlate.js":
/*!****************************!*\
  !*** ./src/boilerPlate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




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
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menu-item");
  menuBtn.textContent = "Our menu";
  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active-button")) return;
    setActiveButton(menuBtn);
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("menu-item");
  contactBtn.textContent = "Contact us";
  contactBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active-button")) return;
    setActiveButton(contactBtn);
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startBoilerplate);


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _boilerPlate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boilerPlate */ "./src/boilerPlate.js");


(0,_boilerPlate__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNBO0FBQ007O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVc7QUFDZixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxFQUFFLDBCQUEwQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxpREFBUTtBQUNWO0FBQ0EsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNGaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEIzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ25CeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQ2xCeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ042Qzs7QUFFN0Msd0RBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2JvaWxlclBsYXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIk1hZ2ljIHBpenphXCI7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmV3TmF2YmFyKCkpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBuZXdOYXZiYXIoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICBob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1idXR0b25cIikpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ0bik7XG4gICAgbG9hZEhvbWUoKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiT3VyIG1lbnVcIjtcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLWJ1dHRvblwiKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihtZW51QnRuKTtcbiAgICBsb2FkTWVudSgpO1xuICB9KTtcblxuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzXCI7XG4gIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1idXR0b25cIikpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oY29udGFjdEJ0bik7XG4gICAgbG9hZENvbnRhY3QoKTtcbiAgfSk7XG4gIG5hdi5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtXCIpO1xuXG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtYnV0dG9uXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtYnV0dG9uXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29weXJpZ2h0LmlubmVySFRNTCA9IGAmY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IHRhYWxlYW5kZXJzZW5gO1xuICBjb3B5cmlnaHQuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1pdGVtXCIpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gc3RhcnRCb2lsZXJwbGF0ZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtaXRlbVwiKSk7XG4gIGxvYWRIb21lKCk7XG59XG5leHBvcnQgZGVmYXVsdCBzdGFydEJvaWxlcnBsYXRlO1xuIiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY3JlYXRlUChcIkNPTlRBQ1QgVVNcIikpO1xuXG4gIHJldHVybiBjb250YWN0O1xufVxuZnVuY3Rpb24gY3JlYXRlUCh0ZXh0KSB7XG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gcGFyYWdyYXBoO1xufVxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0O1xuIiwiZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUChcIldvcmxkcyBiZXN0IHBpenphXCIpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQKFwiUGl6emEgcGl6emEgcGl6emFcIikpO1xuXG4gIHJldHVybiBob21lO1xufVxuZnVuY3Rpb24gY3JlYXRlUCh0ZXh0KSB7XG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gcGFyYWdyYXBoO1xufVxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lO1xuIiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlUChcIk9VUiBNRU5VIEhFUkUhXCIpKTtcblxuICByZXR1cm4gbWVudTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVAodGV4dCkge1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHBhcmFncmFwaDtcbn1cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHN0YXJ0Qm9pbGVycGxhdGUgZnJvbSBcIi4vYm9pbGVyUGxhdGVcIjtcblxuc3RhcnRCb2lsZXJwbGF0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9