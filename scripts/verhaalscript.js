/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
    document.querySelector("img").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-5.1em";
    document.querySelector("img").style.top = "2em";
  }
  prevScrollpos = currentScrollPos;
}