console.log("hey buddy time to practise.");

//Que 1. 
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}
// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());
console.log("when we open page or refresh the page this code display alert window 4 times and display 1 to 4 numbers .");

//Que 2.

let count = 0;
    (function immediate() {
        if (count === 0) {
            let count = 1;
            console.log("becouse this is in the local/blocked scope : " +count); // What is logged?// display value 1
        }
        console.log("this is declared in the globle scope : " +count); // What is logged? display value 0
    })();


// Que 3.

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log("this code counts i three time after 1 sec."+i); // What is logged?
    }, 1000);
}
//this code prints value of i three time after 1 sec.

// Que 4.
// Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

let outer = function(l){
    inner = function(b){
       console.log(`The area of the rectangle is ${l*b}`);
    }
}
outer(6);
inner(5);

//Que 5.
// Take a variable in outer function and create an inner function to increase the counter every time it is called?

const outerFunc = function(){
    outerNumber = 0;
    innerFunc = function(){
        console.log(`Increse the count when it is called again ${outerNumber+=1}`); 
    }
}
outerFunc();
innerFunc();//1
innerFunc();//2
innerFunc();//3
innerFunc();//4
innerFunc();//5
innerFunc();//6


// Que 6.
// var a = 12;
// (function () {
//   alert(a);
// })();
console.log("This shows alert window with value 12.");


// Oue 7.
var a = 10;
    var x = (function () {
      var a = 12;
      return function () {
        alert(a);
    };
})();
x();

// Que 8.
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    console.log(
    "outerArg = " + outerArg + "\n" +
    "innerArg = " + innerArg + "\n" +
    "outerVar = " + outerVar + "\n" +
    "innerVar = " + innerVar + "\n" +
    "globalVar = " + globalVar);
    
    })(456);
})(123);

//Output :-
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz