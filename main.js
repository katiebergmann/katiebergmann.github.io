$(document).ready(function() { 
	
	$(window).on('resize', function(event) { 
		autoSize(); 
	}); 
	
	autoSize(); 

	var page = getUrlParameter('page');
	console.log(page);
	if (page) {
		goToPage(getUrlParameter('page'));
	}

	$('.lb-album > li > a').bind('click', lightBoxOpen);
	$('.lb-close').bind('click', lightBoxClose);

});

// Resizes all the containers to 
// the full window width and height 
// with the class auto-size 
var autoSize = function() { 
	
	var containers = $('.auto-size'); 

	containers.each(function(item) { 
		$(this).height($(window).height()); 
	}); 

}

var pages = ['portfolio', 'artiststatement'];
var currentPage = '';
var goToPage = function(page) {

	if (pages.indexOf(page) != -1) {
		if (page !== currentPage) {
			$('#kb-view').load("views/" + page + ".html", function() {
				console.log(page + ' was loaded!');

				$('.lb-album > li > a').unbind('click', lightBoxOpen);
				$('.lb-album > li > a').bind('click', lightBoxOpen);

				$('.lb-close').unbind('click', lightBoxClose);
				$('.lb-close').bind('click', lightBoxClose);

				if (getUrlParameter('page') != currentPage) {
					window.history.pushState("", "", "?page=" + page);
				}
			});
		}
	}
	else {
		goToPage('portfolio');
	}

}

var getUrlParameter = function(sParam) { var sPageURL = window.location.search.substring(1); var sURLVariables = sPageURL.split('&'); for (var i = 0; i < sURLVariables.length; i++) { var sParameterName = sURLVariables[i].split('='); if (sParameterName[0] == sParam) { return sParameterName[1]; } } }


var lightBoxOpen = function() {
	$('body').addClass('no-scroll');
}

var lightBoxClose = function() {
	$('body').removeClass('no-scroll');
}
