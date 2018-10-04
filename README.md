# jQuery_plugin_animate_subelements

### Plugin animate subelements -direct children of selected element with specific parameters: 
- animation type,  
- properitys specific for animation type (in array), 
- delay and 
- displaySub

### How to install?
Plugin is in js folder in animateSubelementsPlugin.js file. Copy this file to your js files and import to your code:
```
import animateSubelementsPlugin  from "./animateSubelementsPlugin.js";
```
Remember to change the script type attribute in the html file with the main js file in this way: ```<script type="module" src="<your js file js>"></script>```

### How to use?
##### You must put 3 parameters:
1. animation type in string - like "fadeIn", "fadeOut", "slideDown", "slideUp", "animate" or another 
2. properity in array -  parameters corresponding to the type of animation selected above
3. delay in ms - daley animation 
4. displaySub in string - "none" if animation subelements must "display: non" before animation start or "" if not

```
$("<example_elements>").animateSubelements({
 	animation: "<animation type>",
	properity: [<properity1>, <properity1>, <...> ],
	delay: <number in ms>,
	displaySub: "<"none" or "">"
})
```
### Settings defaults
If you use a plug-in without parameters or do not put one of the parameters, the plugin will set the default parameters:

```
{
	animation: "fadeOut",
	properity: [500],
	delay: 500,
	displaySub: ""
}
```

### Example:
```
$("div").animateSubelements({
    animation: "fadeIn",
    properity: [600],
    delay: 600,
    displaySub: "none"
});
```
```
$(".test2").animateSubelements({
    animation: "animate",
    properity: [
        {
            width: "70%",
            opacity: 0.4,
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        },
        500
    ],
    delay: 500
});
```
### How to start a demo?
Clone this repository and put commands:
```
npm install
npm run browsersync
```
