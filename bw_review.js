"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Angelina Stilphen
   Date:   3.13.19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/



  


  
  
  
/*=================================================================*/
// run the init function when the page loads 
window.onload = init; 


function init() {
      // 
      var stars = document.querySelectorAll("span#stars img");
      console.log(stars);
      // add event listener for 
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightstars); 
      }
      // document.getElementById("comment").addEventListener("keyup", updateCount); 
}

function lightstars(e) {
      // color a star when user moves mouse pointer over a star image to the user’s rating of the book
      var starNumber = e.target.alt;
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png"; 
      }
      for (var i = 0; starNumber.value < 5 ; i++) {
            stars[i].src = "bw_star.png"; 
      } 
      document.getElementById("rating").value = starNumber + "stars";
      e.target.addEventListener("mouseleave", turnOffStars);
      e.target.addEventListener("click", function(){ e.target.removeEventListener("mousemove", turnOffStars); });
}



function turnOffStars() {
      var stars = document.querySelectorAll("span#stars img");

      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png"; 
      }
}

//b. Use the countCharacters() function with commentText as the parameter value to calculate the number of characters in commentText. Store the value in the charcount variable. 

function updateCount() {
      var commentText = document.getElementById("comment").value; 
      countCharacters(commentText) = charCount;
}
 
function countCharacters(textStr) {
   var commentregx = /\s/g; 
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   