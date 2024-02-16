const burger = document.querySelector("nav > section.main-nav .burger");
const menu = document.querySelector("nav menu");

let isNavOpen = false;

burger.addEventListener("click", () => {
  if (!isNavOpen) {
    burger.innerHTML = '<img src="./images/icon-close.svg" alt="icon-hamburger" />';
    menu.setAttribute("class","open");
    document.body.style = "overflow: hidden"
    isNavOpen = true
  } else {
    burger.innerHTML = '<img src="./images/icon-hamburger.svg" alt="icon-hamburger" />';
    menu.removeAttribute("class","open");
    document.body.style = "overflow: none"
    isNavOpen = false
  }
})