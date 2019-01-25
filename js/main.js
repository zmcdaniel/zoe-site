"use strict";
var clickEvent = "ontouchstart" in window ? "touchend" : "click",
    classMethods = ["remove", "add"];

function vanillajQuery(id, textArr, className) {
    var el = document.getElementsByTagName("html")[0];
    var acbox = document.getElementById(id),
        textNode = acbox.firstChild,
        toggled = false;
    acbox.addEventListener(
        clickEvent,
        function() {
            var selector = Number((toggled = !toggled));
            textNode.data = textArr[selector];
            el.classList[classMethods[selector]](className);
        },
        false
    );
}

function addInvertedControl() {
    vanillajQuery("invmode", ["Inverted mode", "Normal mode"], "inverted");
}

function addLeetControl() {
    vanillajQuery("leetmode", ["Leet mode", "Normal mode"], "leet");
}

addLeetControl();
addInvertedControl();
