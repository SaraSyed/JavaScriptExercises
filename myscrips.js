
//alert("Hello World");

//var greeting = "Hi";
//console.log(greeting);
//alert(greeting);
//document.write(greeting);


//function mysquare(x) {
// return x * x;
//};

//document.write(mysquare(2));
//alert(mysquare(2));
//console.log(mysquare(2));


//function sum(num1,num2,num3){
//return num1+num2+num3;
//};

//document.write(sum(1,1,1));


//var Person = { name: "Sara", age: 27, occupation: "Consultant" };

//Person.output = new function () {
//document.write("Name: ", Person.name, " " + "Age: ", Person.age, " " + "Occupation: ", Person.occupation, " ");
//}

//Person.age = "28";
//Person.output = new function () {
//document.write("Name: ", Person.name, " " + "Age: ", Person.age, " " + "Occupation: ", Person.occupation, " ");
//}

//function increaseAge() {
// Person.age = 29;
// document.write("Name: ", Person.name, " " + "Age: ", Person.age, " " + "Occupation: ", Person.occupation, " ");
//}

function maker(name, age, occupation) {
    var newPerson = {};
    newPerson.name = document.getElementById("name").value;
    newPerson.age = document.getElementById("age").value;
    newPerson.occupation = document.getElementById("occupation").value;
    
    document.getElementById("person").innerHTML 
    document.getElementById("output").value = "Name: " +  newPerson.name + "\n" + "Age: " +  newPerson.age + "\n" + "Occupation: " + newPerson.occupation + " ";
};