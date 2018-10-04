/* 
plugin animate subelements, direct children of selected element with specific parameters: 
animation type,  properitys specific for aniamtion type (in array), delay and 
displaySub (none if animation subelement must display none before animation start or "" if not). 
*/
export default (function($) {
    $.fn.animateSubelements = function(config) {
        const options = $.extend(
            {
                animation: "fadeOut",
                properity: [500],
                delay: 500,
                displaySub: ""
            },
            config
        );
        return this.each(function() {
            const subelement = $(this).children();
            subelement.css("display", options.displaySub);
            subelement.each(function(i) {
                $(this).delay(options.delay * (i + 1));
                $(this)[options.animation](...options.properity);
            });
        });
    };
})(jQuery);

