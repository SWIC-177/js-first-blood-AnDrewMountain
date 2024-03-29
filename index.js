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
  