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

