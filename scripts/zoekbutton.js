const searchbox = document.querySelector('input.search-box');
const searchbutton = document.querySelector('button.search-button');
const spanicon = document.querySelector('span.fa');
const main = document.querySelector('main');

searchbutton.addEventListener('click', (e) => {
  searchbox.classList.toggle('hidden');
  
  if(searchbox.classList.contains('hidden')) {
    searchbutton.classList.remove('active');
    spanicon.classList.replace('fa-times', 'fa-search');
  } else {
    searchbutton.classList.add('active');
    spanicon.classList.replace('fa-search', 'fa-times');
  }
});

main.addEventListener('click', (e) => {
  searchbox.classList.add('hidden');
  searchbutton.classList.remove('active');
  spanicon.classList.replace('fa-times', 'fa-search');
});

function myFunction() {
  // Declare variables
  var input, filter, section, article, h2, i, txtValue;
  input = document.querySelector('input.search-box');
  filter = input.value.toUpperCase();
  section = document.getElementById("mySection");
  article = section.getElementsByTagName('article');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < article.length; i++) {
    h2 = article[i].getElementsByTagName("h2")[0];
    txtValue = h2.textContent || h2.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      article[i].style.display = "";
    } else {
      article[i].style.display = "none";
    }
  }
}

function accordion(section, heading, list) {
  $(section).each(function() {
    var that = this,
        listHeight = $(this).find(list).height();

    $(this).find(heading).click(function() {
      $(this).toggleClass('plus minus');
      $(that).find(list).slideToggle(250);
    });
  });
};

accordion('.filter-item', '.filter-item-inner-heading', '.filter-attribute-list');