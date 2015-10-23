$(document).ready(function(){
	new WOW().init();
	// Parallax
	$('#chamada').parallax("50%", 0.5, "100%");
	// Typed
	$(function(){
      $(".titulo-pagina h2 .typed").typed({
         strings: ["Sites GBrand"],
         contentType: 'html',
         typeSpeed: 10
      });
    });

    $(".cd-more-info").mouseenter(function(){

    	if ($(".fases").hasClass("pulsar")) {
    		$(".fases").removeClass("pulsar");
    	};

    	var id = $(this).attr("data-content-fase");

    	$("."+id).addClass("pulsar");
    }).mouseleave(function(){
    	$(".cd-single-step").removeClass("pulsar");
    });
});