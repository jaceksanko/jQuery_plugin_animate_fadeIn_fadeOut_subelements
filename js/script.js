
"use strict";

//plugin aniamte subelements, direct children of selected element witch specific parameters: animation (fadeIn/fadeOut/slideDown/slideUp/animate), duraction and delay.
(function($){
  $.fn.animateSubelements = function(config) {
      const options = $.extend({
          animation: "fadeIn",
          duraction: 500,
          delay: 200
      }, config);

      return this.each(function() {        
        const subelement = $(this).children()
        if (options.animation == "fadeIn") {
          subelement.css('display', 'none');
          subelement.each(function(i) {
            $(this).delay(options.delay * (i+1)).fadeIn(options.duraction);
          });
        }
        if (options.animation == "fadeOut") {
          subelement.each(function(i) {
            $(this).delay(options.delay * (i+1)).fadeOut(options.duraction);
          });
        }
        if (options.animation == "slideDown") {
          subelement.css('display', 'none');
          subelement.each(function(i) {
            $(this).delay(options.delay * (i+1)).slideDown(options.duraction);
          });
        } 
        if (options.animation == "slideUp") {
          subelement.each(function(i) {
            $(this).delay(options.delay * (i+1)).slideUp(options.duraction);
          });
        }
        if (options.animation == "animate") {
          subelement.each(function(i) {
            $(this).delay(options.delay * (i+1)).animate(options.properity, options.duraction);
          });
        }
      });
  }
})(jQuery);


//Examples runing
$(".test1").animateSubelements({
  animation: "slideDown",
  duraction: 500,
  delay: 500
}) 


$("div").animateSubelements({
  animation: "fadeIn",
  duraction: 500,
  delay: 500
}) 

$(".test2").animateSubelements({
  animation: "animate",
  duraction: 500,
  delay: 500,
  properity: {
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"}
})