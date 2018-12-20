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
var wegburgerknop = document.querySelector('div');

burgermenuknop.addEventListener('click', function() {
    burgerzijmenu.classList.add('menuopen');
    console.log('Het burgerzijmenu is getoond')
});

wegburgerknop.addEventListener('click', function() {
	burgerzijmenu.classlist.remove('menuopen');
	console.log('Het burgerzijmenu is verborgen');
});
