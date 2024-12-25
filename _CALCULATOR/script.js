var string = "";
var input = document.querySelector(".input");
var buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach(function (button) {
    button.addEventListener('click', function (event) {
        var target = event.target;
        if (target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }
        else if (target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else if (target.innerHTML == "Del") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (target.innerHTML == "%") {
            input.value = string + target.innerHTML;
            string = ((parseFloat(string)) / 100).toString();
            input.value = string;
        }
        else {
            string = string + target.innerHTML;
            input.value = string;
        }
    });
});
