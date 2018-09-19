# jQuery_plugin_animate_fadeIn_fadeOut_subelements

Plugin animate subelements - direct children of selected element witch specific parameters: direction (fadeIn/fadeOut), duraction and delay.

How to used?

You must put 3 parameters:
1. direction - "fadeIn" or "fadeOut"
2. duraction in ms
3. delay in ms

$("example_elements").animateSubelements({ <br>
  direction: "fadeIn" or "fadeOut", <br>
  duraction: number in ms, <br>
  delay: number in ms <br>
})

example:<br>
$("div").animateSubelements({ <br>
  direction: "fadeIn",<br>
  duraction: 500,<br>
  delay: 500<br>
})

If you used plugin without parameters the plugin will set the default parameters:<br>
{<br>
direction: "fadeIn",<br>
duraction: 500,<br>
delay: 200<br>
}
