console.log("hey buddy");


let studentRecords = [ {name: 'Shubham', id: 123, marks : 98 },
                       {name: 'Saurabh', id: 101, marks : 23 },
                       {name: 'akash', id: 200, marks : 45 },
                       {name: 'pranit', id: 115, marks : 75 } ] ;
console.log("Que1............");
let capletter = studentRecords.map(n => n.name.toUpperCase());
console.log(capletter);

console.log("Que2......... ");
let greatmarks = studentRecords.filter(m => m.marks > 50 );
console.log(greatmarks);

console.log("Que3............ ");
let idMarks = studentRecords.filter((m) => m.marks > 50 && m.id > 120);
console.log(idMarks);

console.log("Que4......... ");
let sumMarks = studentRecords.reduce((acc,cur) => acc = acc + cur.marks,0);
console.log(sumMarks);

console.log("Que5........ ");
let marksName = studentRecords.filter(m => m.marks > 50);
// console.log(marksName);
for(let i=0; i < marksName.length; i++){
    console.log(marksName[i].name);
}

console.log("Que6............. ");
let idMarksSum = studentRecords.filter(i => i.id > 120);
let sum = 0;
// for(let i=0; i<idMarksSum.length; i++){
//     sum = sum + idMarksSum[i].marks;
// }
// console.log(sum);
let sum1 = idMarksSum.reduce((acc,cur) => acc = acc + cur.marks,0);
console.log(sum1);

console.log("Que7............");
let marksgreater = studentRecords.filter(m => m.marks > 50);
let totalmarks = marksgreater.reduce((acc,cur) => acc = acc + cur.marks,0);
console.log("Total marks of the student who score greter than 50 marks " + totalmarks);

let lessmarks = studentRecords.filter(m => m.marks < 50);
console.log("Total marks of the student who score more than 50 marks "+lessmarks);
let gress = 0;
for(let i=0; i<lessmarks.length; i++){
    gress = lessmarks[i].marks + 15;
    console.log("Added 15 marks tostudent who score less than 50 marks then the marks are"+gress);
}


console.log("Que8.............");
function Student(sname, sclass, srollno){
    this.sname = sname;
    this.sclass = sclass;
    this.srollno = srollno;
};

let student1 = new Student("Thor","God of Thunder",440,);
let student2 = new Student("Iron man","Tony ",101);
let student3 = new Student("Hulk","Bahubali avenger",10001);
let student4 = new Student("vision","Mind Stone",606);
let student5 = new Student("Black Widow","ledy avenger",303);
let student6 = new Student("Thanos","King mecker",1);

let avenger = [student1,student2,student3,student4,student5,student6];
console.log(avenger);