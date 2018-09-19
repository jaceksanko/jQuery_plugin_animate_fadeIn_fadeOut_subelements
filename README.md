# jQuery_plugin_animate_subelements

Plugin animate subelements - direct children of selected element witch specific parameters: animation (fadeIn/fadeOut/slideDown/slideUp/animate), duraction and delay.

How to used?

You must put 3 parameters:
1. animation - "fadeIn" or "fadeOut" or "slideDown" or "slideUp" or "animate"
2. duraction in ms
3. delay in ms
4. properity if you used "animate" in animation type 

$("example_elements").animateSubelements({ <br>
  animation: "fadeIn" or "fadeOut" or "slideDown" or "slideUp" or "animate", <br>
  duraction: number in ms, <br>
  delay: number in ms <br>
  properity: object same like in .animate() metod in jQuery https://api.jquery.com/animate/
})

example:<br>
$("div").animateSubelements({ <br>
  animation: "fadeIn",<br>
  duraction: 500,<br>
  delay: 500<br>
})

If you used plugin without parameters the plugin will set the default parameters:<br>
{<br>
animation: "fadeIn",<br>
duraction: 500,<br>
delay: 200<br>
}

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
