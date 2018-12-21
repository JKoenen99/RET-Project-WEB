/*
var zoekbutton = document.querySelector('img');
var zoekveld = document.querySelector('header');

zoekbutton.addEventListener('click', function(){
    zoekveld.classList.toggle('show-search'); /zet class erbij of haalt er weg/
    zoekveld.classList.add('show-search'); /zet class erbij/
    zoekveld.classList.remove('show-search'); /haalt class weg/
});
*/
console.log('Het script is geladen');
var burgermenuknop = document.querySelector('button');
var burgerzijmenu = document.querySelector('section');
var wazigeachtergrond = document.querySelector('div');

burgermenuknop.addEventListener('click', function() {
    burgerzijmenu.classList.add('menuopen');
    wazigeachtergrond.classList.add('menuopen');
    console.log('Het burgerzijmenu is getoond');
});

wazigeachtergrond.addEventListener('click', function() {
	burgerzijmenu.classList.remove('menuopen');
	wazigeachtergrond.classList.remove('menuopen');
	console.log('Het burgerzijmenu is verborgen');
});


// terwijl de de section class 'menuopen' heeft wil ik dat de rest van de pagina niet scrollbaar is dus: y-overflow.

