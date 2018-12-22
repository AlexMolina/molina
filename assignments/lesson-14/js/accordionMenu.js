$(function(){
	$('.accordion-toggle .accordion-link').click(function(){
		if(!$(this).hasClass('accordion-on'))
		$('.accordion-toggle .accordion-link').removeClass('accordion-on');
		$(this).toggleClass('accordion-on');
		$(this).next(".accordion-panel").slideToggle().siblings(".accordion-panel:visible").slideToggle();
	})
});