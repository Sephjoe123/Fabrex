const boxContainer = document.querySelector(".box-container")
const cardContainer = document.getElementById("card-container")
document.addEventListener("DOMContentLoaded", function() {
    let animatedText = document.querySelector(".manage")
    
    var options = {
      strings: ["Manage your business <br> Strategy in  one place"],
      typeSpeed: 100,
      loop: true,
      smartBackspace: true,
      showCursor: false,
    };
    
    var typed = new Typed(animatedText, options);
    })

const moveAnimation = gsap.from(boxContainer.children, {
  y: 300,
  opacity: 0,
  duration: 1.5,
  ease: "easeInOut",
  stagger: 0.5,
});


let scrollLength = 400;

function triggerScroll() {
  console.log(window.scrollY);

  if (window.scrollY >= scrollLength) {
    moveAnimation.play();
  } else {
    moveAnimation.pause();
  }
}

window.addEventListener("scroll", triggerScroll);
triggerScroll();
