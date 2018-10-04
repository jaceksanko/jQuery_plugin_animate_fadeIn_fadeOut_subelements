import animateSubelementsPlugin  from "./animateSubelementsPlugin.js";
//Examples runing
$(".test1").animateSubelements({
    animation: "slideDown",
    properity: [500],
    delay: 500,
    displaySub: "none"
});

$(".test3").animateSubelements({
    animation: "slideUp",
    properity: [500],
    delay: 500
});

$("div").animateSubelements({
    animation: "fadeIn",
    properity: [600],
    delay: 600,
    displaySub: "none"
});

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
