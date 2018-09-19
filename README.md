# jQuery_plugin_animate_fadeIn_fadeOut_subelements

Plugin animate subelements - direct children of selected element witch specific parameters: direction (fadeIn/fadeOut), duraction and delay.

How to used?
You must put 3 parameters:
1. direction - "fadeIn" or "fadeOut"
2. duraction in ms
3. delay in ms

$("example_elements").animateSubelements({
  direction: "fadeIn" or "fadeOut",
  duraction: number in ms,
  delay: number in ms
})

example:
$("div").animateSubelements({
  direction: "fadeIn",
  duraction: 500,
  delay: 500
})

If you used plugin without parameters the plugin will set the default parameters:
{
direction: "fadeIn",
duraction: 500,
delay: 200
}
