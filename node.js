const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controlls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
   //Button click active class
   for (let i = 0; i < secBtn.length; i++) {
      secBtn[i].addEventListener("click", (e) =>{ // Added 'e' here
         let currentBtn = document.querySelectorAll(".actiive-btn");
         // Check if currentBtn is not undefined and has elements before accessing index 0
         if (currentBtn && currentBtn.length > 0) {
             // Remove "actiive-btn" class from the currently active button
             currentBtn[0].className = currentBtn[0].className.replace("actiive-btn", '' );
         }
         // Add "actiive-btn" class to the clicked button using e.target
         e.target.className += ' actiive-btn';
      })
   }
}

PageTransitions();
