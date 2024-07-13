let menu = document.getElementsByClassName("menu")[0];
let searchBtn = document.querySelector(".searchBtn");
let links = Array.from(document.querySelectorAll(" .main-link"));
let headerText = document.querySelector(".header-text")
let dropDownTab = document.querySelector(".tabs-dropdown");
let othersContainer = document.querySelector(".other-container");
let tabsIcon = document.querySelector(".tabs-icon");

othersContainer.addEventListener("mouseover", () =>{
  dropDownTab.style.display = "block"
  tabsIcon.innerHTML = `
    -
  `
})
othersContainer.addEventListener("mouseleave",() =>{
  tabsIcon.innerHTML = `+`
  dropDownTab.style.display = "none"
})

dropDownTab.style.display = "none"

document.addEventListener("DOMContentLoaded", function () {
  let accordionItems = Array.from(document.querySelectorAll(".accordion-text"));

  function toggleAccordion(event) {
    let showText = event.currentTarget.nextElementSibling;
    let isOpen = event.currentTarget.classList.contains("show-text");

    closeAccordionItems();
    if (!isOpen) {
      showText.style.display = "block";
      event.currentTarget.classList.add("show-text");
    }
  }

  for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener("click", toggleAccordion);
  }

  function closeAccordionItems() {
    for (let i = 0; i < accordionItems.length; i++) {
      accordionItems[i].classList.remove("show-text");
      accordionItems[i].nextElementSibling.style.display = "none";
    }
  }
});


window.addEventListener("scroll", animateOnScroll);
window.addEventListener("scroll", changeBgOnScroll);
window.addEventListener("scroll", changeLinkColor);
window.addEventListener("scroll", changeMenuImg);

function animateOnScroll() {
  let reveal = document.getElementsByClassName("visible");
  for (let i = 0; i < reveal.length; i++) {
    let scrollHeight = window.innerHeight;
    let scrollTop = reveal[i].getBoundingClientRect().top;
    let revealPoint = 70;
    if (scrollTop < scrollHeight - revealPoint) {
      reveal[i].classList.add("show");
    } else {
      reveal[i].classList.remove("show");
    }
  }
}

function changeBgOnScroll() {
  let scrollMenu = document.getElementsByClassName("nav-ul")[0];
  let scroll = window.scrollY;
  let screenWidth = window.innerWidth;

  if (screenWidth > 992) {  
  if (scroll < 82) {
    scrollMenu.classList.remove("background-scroll");
  } else {
    scrollMenu.classList.add("background-scroll");
  }
}
}

function changeMenuImg() {
  let scroll = window.scrollY;
  let menuImg = document.querySelector(".nav-img");
  let screenWidth = window.innerWidth;

  if (screenWidth > 992) {  
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
}

function changeLinkColor() {
  let scroll = window.scrollY;
  let screenWidth = window.innerWidth;

  if (screenWidth > 992) {  
    for (let i = 0; i < links.length; i++) {
      if (scroll < 82) {
        links[i].style.color = "#fff";
        searchBtn.style.color = "#fff";
      } else {
        links[i].style.color = "#000";
        searchBtn.style.color = "#000";
      }
    }
  }
}

// Optionally, you can also add an event listener for window resize to re-check the screen width
window.addEventListener('resize', changeLinkColor);

// Add an event listener for scroll to call the function
window.addEventListener('scroll', changeLinkColor);

// Initial call to set the colors correctly on page load
changeLinkColor();


let cartItem1 = document.getElementById("cart");
let envelopeItem1 = document.getElementById("envelope");
let cartItem2 = document.getElementById("cart-2");
let envelopeItem2 = document.getElementById("envelope-2");

cartItem1.addEventListener("mouseenter", () => {
  cartItem1.style.display = "none";
  cartItem2.style.display = "block";
});

envelopeItem1.addEventListener("mouseenter", () => {
  envelopeItem1.style.display = "none";
  envelopeItem2.style.display = "block";
});

cartItem2.addEventListener("mouseleave", () => {
  if ((cartItem2.style.display = "block")) {
    cartItem2.style.display = "none";
    cartItem1.style.display = "block";
  }
});

envelopeItem2.addEventListener("mouseleave", () => {
  if ((envelopeItem2.style.display = "block")) {
    envelopeItem2.style.display = "none";
    envelopeItem1.style.display = "block";
  }
});

let countDisplay = document.querySelectorAll(".logo-items");
const options = {
  root: null,
  threshold: 0.3,
  once: true,
};

const observer = new IntersectionObserver(callback, options);

countDisplay.forEach((element) => {
  observer.observe(element);
});

function callback(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    let interval = 5000;
    countDisplay.forEach((display) => {
      let startValue = 0;
      let endValue = parseInt(display.childNodes[3].innerText);

      let duration = Math.floor(interval / endValue);
      let counter = setInterval(() => {
        startValue += 1;
        display.childNodes[3].innerText = `${startValue}+`;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
    observer.disconnect();
  } else {
    return;
  }
}

let searchSection = document.querySelector(".search-section");
let closeSearch = document.querySelector(".fa-x");

searchBtn.addEventListener("click", () => {
  if (searchSection.style.display !== "block") {
    searchSection.style.display = "block";
  } else {
    searchSection.style.display = "none";
  }
});

closeSearch.addEventListener("click", () => {
  if (searchSection.style.display == "block") {
    searchSection.style.display = "none";
  }
});

window.addEventListener("scroll", goTopPage);
let arrow = document.querySelector(".show-angle");

function goTopPage() {
  let scroll = window.scrollY;
  if (scroll > 500) {
    arrow.style.display = "block";
  } else if(scroll < 600){
    arrow.style.display = "none;";
  }

}


arrow.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.getElementById('check').addEventListener('change', function() {
  document.querySelector('.checkbtn').classList.toggle('open', this.checked);
});
