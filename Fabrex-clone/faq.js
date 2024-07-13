let headerText = document.querySelector(".header-text");
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
  
document.getElementById('check').addEventListener('change', function() {
  document.querySelector('.checkbtn').classList.toggle('open', this.checked);
});
