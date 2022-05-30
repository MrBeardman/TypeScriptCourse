const button = document.querySelector("button");
const inputl = document.getElementById("num1") as HTMLInputElement; //Makes sure its HTML type
const input2 = document.getElementById("num2") as HTMLInputElement;


function add (num1: number, num2:number) { //:number gives the variable a type of number
return num1+ num2;
}
button.addEventListener ("click", function () {
console.log(add(+input1.value, +input2.value)); //always get conctatinated as a string in JS, we would have to do a if else check fro "number"
});