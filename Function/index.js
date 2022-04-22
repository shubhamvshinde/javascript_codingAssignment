console.log("Hey Buddy");

console.log("Que1..........");
function print(){
    console.log("print console statement using function without pass parameter");
}
print();

console.log("Que2............");
sum = 0;
function add(a,b){
    sum = a+b;
    console.log(sum);
}
add(3,4);

console.log("Que3............");
const arrowfunc = () => {
    return "This is a arrow function.";
}
console.log(arrowfunc);

console.log("Que4............");
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();

console.log("Que5............");
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};


console.log("Que6...............");
// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };

// error a and b is not defined
console.log("give error variables are not defined");


console.log("Que7.................");
// Write a function that accepts parameter n and returns factorial of n ?
let fact=1;
function factorial(n){
    for(let i=1; i <= n; i++){
        if(n==0){
            fact=1;
            break;
        }
        fact = fact * i;
    }
    console.log(`The factorial of the ${n} is ${fact}`);
}
factorial(8);