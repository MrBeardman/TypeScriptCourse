var button = document.querySelector("button");
var inputl = document.getElementById("num1"); //Makes sure its HTML type
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value)); //always get conctatinated as a string in JS, we would have to do a if else check fro "number"
});
