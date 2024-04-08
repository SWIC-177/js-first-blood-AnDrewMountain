// Define the function
//function greet(name) {
 //   return name;
//}
/*const greet = (name) => {
    return `Hello, ${name}!`;
}*/
/*function greet(name) {
    return '${name}!' 
}*/

    // Call the function 
//const myName = "Andrew";
//const greeting = greet(myName);

    //Print result in the console
//console.log("Hello, ",greeting);

// Week 9 Homework
 
//Declare a variable (name & age)
//const name = "Andrew";
//let age = 20;

//Write function 

//function verifyAdulthood(name, age){
//    if(age < 18){
//        return `You are not old enough to enter, ${name}`
//    }else {
//        return `Wlecome,${name}`;
//    }
//}

//console.log(verifyAdulthood(name, age));

//Week 10 Homework

const person = {
    name: "John",
    age: 18, // Changed age to 18 to make sure it works
  };
  
  function verifyAdulthood(personName, personAge) {
    if (personAge >= 18) return `Welcome, ${personName}!`;
  
    return `You are not old enough to enter, ${personName}.`;
  }
  
  const adultMessage = verifyAdulthood(person.name, person.age); // Corrected function call
  
  console.log(adultMessage);

  const people = [
    {
      name: "John",
      age: 17,
    },
    {
      name: "Jane",
      age: 20,
    },
    {
      name: "Mary",
      age: 25,
    },
    {
      name: "Peter",
      age: 30,
    },
    {
      name: "Paul",
      age: 35,
    },
  ];
      
  function verifyAdulthood(personName, personAge) {
    if (personAge >= 18) return `Welcome, ${personName}!`;
    return `You are not old enough to enter, ${personName}.`;
  }
  
  // Loop through the people array
  for (const person of people) {
    // Call verifyAdulthood function for each person
    const message = verifyAdulthood(person.name, person.age);
    console.log(message);
  }

  //Week 11 Homework

  // Creating an arrow function
const square = (x) => x * x;
  
// Example of passing a function as an argument
function operateOnNumber(num, operation) {
  return operation(num);
}

console.log(operateOnNumber(5, square));