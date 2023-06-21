let menu = document.getElementsByClassName("menu")[0];
let searchBtnClose = Array.from(document.getElementsByTagName("i"));
let links = Array.from(document.querySelectorAll(" .menu li a"));

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("scroll", changeBgOnScroll);
window.addEventListener("scroll", changeLinkColor);
window.addEventListener("scroll", changeMenuImg);

function animateOnScroll() {
  let reveal = document.getElementsByClassName("visible");
  for (let i = 0; i < reveal.length; i++) {
    let scrollHeight = window.innerHeight;
    let scrollTop = reveal[i].getBoundingClientRect().top;
    let revealPoint = 100;
    if (scrollTop < scrollHeight - revealPoint) {
      reveal[i].classList.add("show");
    } else {
      reveal[i].classList.remove("show");
    }
  }
}


document.addEventListener("DOMContentLoaded", function () {
  let accordionItems = document.getElementsByClassName("accordion-text");

  for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener("click", () => {
      let showText = accordionItems[i].nextElementSibling;
      let isOpen = accordionItems[i].classList.contains("show-text");

      closeAccordionItems();
      if (!isOpen) {
        showText.style.display = "block";
        accordionItems[i].classList.add("show-text");
      
      }
    });
  }


  function closeAccordionItems() {
    for (let i = 0; i < accordionItems.length; i++) {
      accordionItems[i].classList.remove("show-text");
      accordionItems[i].nextElementSibling.style.display = "none";
    }
 
  }

  
});

function changeBgOnScroll() {
  let scrollMenu = document.getElementsByClassName("nav-ul")[0];
  let scroll = window.scrollY;
  if (scroll < 82) {
    scrollMenu.classList.remove("background-scroll");
  } else {
    scrollMenu.classList.add("background-scroll");
  }
}

function changeMenuImg() {
  let scroll = window.scrollY;
  let menuImg = document.querySelector(".nav-img");
  if (scroll < 82) {
    menuImg.setAttribute(
      "src",
      "https://fabrex.websitelayout.net/demos/startup-agency/img/logos/logo-white.png"
    );
  } else {
    menuImg.setAttribute(
      "src",
      "https://fabrex.websitelayout.net/demos/startup-agency/img/logos/logo.png"
    );
  }
}

function changeLinkColor() {
  let scroll = window.scrollY;
  for (let i = 0; i < links.length; i++) {
    if (scroll < 82) {
      links[i].style.color = "#fff";
    } else {
      links[i].style.color = "000";
    }
  }
}
