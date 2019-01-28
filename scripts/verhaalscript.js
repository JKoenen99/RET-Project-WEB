/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector(".contentverhaal wit").add('');
//     document.querySelector("img").style.top = "0";
//   } else {
//     document.querySelector("header").style.top = "-5.1em";
//     document.querySelector("img").style.top = "2em";
//   }
//   prevScrollpos = currentScrollPos;
// }



// console.log('Het script is geladen');
// var burgermenuknop = document.querySelector('button');
// var burgerzijmenu = document.querySelector('section');
// var wazigeachtergrond = document.querySelector('div');

// burgermenuknop.addEventListener('click', function() {
//     burgerzijmenu.classList.add('menuopen');
//     wazigeachtergrond.classList.add('menuopen');
//     console.log('Het burgerzijmenu is getoond');
// });

// wazigeachtergrond.addEventListener('click', function() {
// 	burgerzijmenu.classList.remove('menuopen');
// 	wazigeachtergrond.classList.remove('menuopen');
// 	console.log('Het burgerzijmenu is verborgen');
// });


console.log('Het script is geladen'); 

var witVerhaal = document.querySelector('.content-verhaal .wit');
var geelVerhaal = document.querySelector('.content-verhaal .geel');
var roodVerhaal = document.querySelector('.content-verhaal .rood');
var blauwVerhaal = document.querySelector('.content-verhaal .blauw');


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    witVerhaal.classList.add('content-hidden');
    roodVerhaal.classList.remove('content-hidden');
  } else {
    witVerhaal.classList.remove('content-hidden');
    roodVerhaal.classList.add('content-hidden');
  }
  prevScrollpos = currentScrollPos;
}