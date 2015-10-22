$(document).ready(function(){
	new WOW().init();
	// Parallax
	$('#chamada').parallax("50%", 0.8);
	// Typed
	$(function(){
      $(".titulo-pagina h2 .typed").typed({
         strings: ["Sites GBrand"],
         contentType: 'html',
         typeSpeed: 10
      });
    });
});