let searchBtnOpen = document.getElementById("search-btn");
let menu = document.getElementsByClassName("menu")[0];
let searchArea = document.getElementsByClassName("search-display")[0];
let searchBtnClose = Array.from(document.getElementsByTagName("i"))
let closeSearch = searchBtnClose[1];
let searchItem = searchBtnClose[0]
let buttons = Array.from(document.querySelectorAll('.business-goals'));
let plusSign = Array.from(document.getElementsByClassName("plus"))
let businessText = document.querySelectorAll(".business-text")


let plusIds = ["plus-sign1","plus-sign2","plus-sign3"];

plusIds.forEach((id)=>{
let myElement = document.getElementById(id)
let iTag = myElement.querySelector(".fa-plus");
let Text = myElement.querySelector(".business-text")
myElement.addEventListener("click",changeTagDisplay)

 function changeTagDisplay(e)  {
  if(e.target.id === id && iTag.classList.contains("fa-plus")){
    iTag.classList.remove("fa-plus");
    iTag.classList.add("fa-minus");
    
  }
  else if(iTag.classList.contains("fa-minus")){
     iTag.classList.remove("fa-minus");
     iTag.classList.add("fa-plus")
  }

 }
}) 



window.addEventListener("scroll",animateOnScroll);
window.addEventListener("scroll",changeBgOnScroll);
window.addEventListener("scroll",changeMenuImg);
window.addEventListener("scroll",changeLinkColor);


function animateOnScroll (){
    let reveal = document.getElementsByClassName("visible");
     for( let i = 0; i < reveal.length; i++){
        let scrollHeight = window.innerHeight;
        let scrollTop = reveal[i].getBoundingClientRect().top;
        let revealPoint = 100;
        if(scrollTop < scrollHeight - revealPoint){
           reveal[i].classList.add("show");
        }
    else{
        reveal[i].classList.remove("show")
    }
     }
}

function changeBgOnScroll (){
    let scroll = window.scrollY;
    let scrollMenu = document.getElementsByClassName("main-menu")[0]
    if(scroll < 82){
      scrollMenu.classList.remove("background-scroll")
    }
    else{
      scrollMenu.classList.add("background-scroll");
 
    }

  }

  function changeMenuImg(){
    let scroll = window.scrollY;
    let menuImg = document.getElementById("nav-img")
    if(scroll > 82){
        menuImg.setAttribute("src", "https://fabrex.websitelayout.net/demos/startup-agency/img/logos/logo.png");
    }
    else{
        menuImg.setAttribute("src", "https://fabrex.websitelayout.net/demos/startup-agency/img/logos/logo-white.png")
    }
   
  }

  function changeLinkColor(){
   let scroll = window.scrollY;
   let links = Array.from(document.getElementsByClassName("link"))
   for(let i = 0; i < links.length; i++){
    if(scroll > 82){
        links[i].style.color = "#000";
        searchBtnOpen.style.color = "#000"
    }
        else{
         links[i].style.color = "#fff"
         searchBtnOpen.style.color = "#fff"
        }
   }

  }

  
  searchBtnOpen.addEventListener("click",() =>{
   searchArea.classList.add("search-display")
   searchArea.classList.remove("search-area")


  })


