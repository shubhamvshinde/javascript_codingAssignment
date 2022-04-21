console.log("hey buddy");

console.log("working");

//Q1.
let parent = {
    name:"shubham",
    age: 21,
    gender:"male",
    showDetails : function(){
        console.log(this.name + " " + this.age +" " + this.gender);
    }
}
parent.showDetails();


let child = {
    name: "sss",
}

child.__proto__ = parent;
child.showDetails();
console.log(child);
console.log(parent);


//Q2.

let arr = [1,2,3,4,5];
function add(){
    console.log("ADD");
}
console.log(add.__proto__);
console.log(add.__proto__.__proto__);
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);


//Q3.
let arr1 = [1,2,3,4,5];
let arr2 = {
    getName : function(){
        let result = arr1.reduce((acc,curr)=>acc= acc+curr,0);
        console.log(result);
    }
}
arr2.getName();


//Q4.
function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("akash")));