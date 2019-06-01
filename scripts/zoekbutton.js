$(function()
{
	// Hide search wrap by default;
	$(".search-wrap").hide();

	$(".toggle-search").on("click", function(e) 
	{
		// Prevent default link behavior
		e.preventDefault();

		// Stop propagation
		e.stopPropagation();

		// Toggle search-wrap
		$(".search-wrap").slideToggle(500, function()
		{
			// Focus on the search bar
			// When animation is complete
			$("#search-bar").focus();	
		});
	});

	// Close the search bar if user clicks anywhere
	$(document).click(function(e)
	{
		var searchWrap = $(".search-wrap");
		
		if(!searchWrap.is(e.target) && searchWrap.has(e.target).length === 0)
		{
			searchWrap.slideUp(500);	
		}
	});    
});




var zoekknop = document.querySelector('button.zoek-button');
var zoekbalk = document.querySelector('input.search-wrap');
/* OUDE CODE
var verhaalcard = document.querySelector('div.card');
*/

zoekknop.addEventListener('click', function() {
    zoekknop.classList.toggle('active');
    zoekbalk.classList.toggle('active');
    console.log('CLICK zoekbutton');
});

// $(document).click(function(e)
//  {
// 	zoekknop.classList.remove('active');
// 	console.log('De zoekbalk is verborgen');
// });