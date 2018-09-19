
"use strict";

//plugin aniamte subelements, direct children of selected element witch specific parameters: direction (fadeIn/fadeOut), duraction and delay.
(function($){
  $.fn.animateSubelements = function(config) {
      const options = $.extend({
          direction: "fadeIn",
          duraction: 500,
          delay: 200
      }, config);

      return this.each(function() {        
        const subelement = $(this).children()
        if (options.direction == "fadeIn") {
          subelement.css('display', 'none');
          subelement.each(function(i) {
            $(this).delay(options.delay * (i+1)).fadeIn(options.duraction);
          });
        }
        if (options.direction == "fadeOut") {
          subelement.each(function(i) {
            $(this).delay(options.delay * (i+1)).fadeOut(options.duraction);
          });
        } 
      });
  }
})(jQuery);


//Examples runing

$("div").animateSubelements({
  direction: "fadeIn",
  duraction: 500,
  delay: 500
})

$(".test2").animateSubelements({
  direction: "fadeOut",
  duraction: 500,
  delay: 500
})