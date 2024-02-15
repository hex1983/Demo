// Arrow function example

// const func = (x, y) => ({x: x, y: y});

// const result = func(1, 2);
// console.log(result);

// difference between arrow function and standard function 

// const getName = () => {
//     return this.firstName + " " + this.lastName
// };

// const person = {
//     firstName: "Tim",
//     lastName: "Ruscica",
//     getName: getName,
// };

// const person2 = {
//     firstName: "Joe",
//     lastName: "Smith",
//     getName: getName,
// };
// const personName = person.getName();
// console.log(personName);

// Map, Filter, Reduce examples

// Map function 

// const arr = [1,2,3,4,5,6];

// function map(arr, func) {
//     const newArr = [];

//     for (const value of arr) {
//         const newValue = func(value);
//         newArr.push(newValue);
//     }
    
//     return newArr;
// }

// const result = map(arr, (x) => x ** 2);
// console.log(result);


// filter  function

// const arr = [1, 2, 3, 4, 5, 6];
// const filteredArr = arr.filter((value) => value % 2 == 0);
// console.log(filteredArr);

// filter function from scratch to see what the filter function is doing behond the scenes.

// const arr = [1,2,3,4,5,6];

// function filter(arr, func) {
//     const newArr = [];
    
//     for (const value of arr) {
//         if (func(value)) {
//             newArr.push(value);
//         }
//     }

//     return newArr;
// }

// const result = filter(arr, (x) => x % 2 == 0);
// console.log(result);

// Reduce function 

// const arr = [1,2,3,4,5,6];
// const sum = arr.reduce((prev, current) => prev + current);
// console.log(sum);

// functio reduce written out to show what is happening in the code

// const arr = [1,2,3,4,5,6];

// function reduce(arr, func) {
//     let currentResult = 0;

//     for (const num of arr) {
//         currentResult = func(currentResult, num);
//     }

//     return currentResult;
// }
// const result = reduce(arr, (prev, next) => prev - next);
// console.log(result);

// const arr = ["Tim", "Cooper", "Bob"];
// const filteredArr = arr.filter( (name) => {
//     if(name !== "Tim") {
//         return true;
//     }else {
//         return false;
//     }
// })
// console.log(filteredArr);

// scope function

// const x = 5;

// function test(x) {
//     if (x === 3) {
//         console.log("one");
//     } else if (x === 4) {
//         console.log("two");
//     } else {
//         console.log("three");
//     }
// }

// test(4);

// mutability

// function modifyObj(x) {
//     x.prop = "test";
// }
// const obj = {name: "Tim"};
// console.log(obj);
// modifyObj(obj);
// console.log(obj);

// math Rounding Math.round()

// const num = 2.9;
// const roundedNum = Math.ceil(num);
// console.log(roundedNum)

// Math MAX or MIN value

// const arr = [1,3,4,5,2,1,2]

// const max = Math.min(...arr);
// console.log(max);

// Absolute value

// const log = Math.log2(9);
// console.log(log);


// Infinity

// const x = Infinity;

// const arr = [1,2,3];
// const x = 10;

// const min = Math.min(...arr);

// console.log(min);

// const max = Math.max(min, x);

// console.log(max);

// Random how to generate random numbers

// const num = 10 + Math.round(Math.random() * 10);
// console.log(num);

// function randomNum(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// const num = randomNum(-20, 80);

// console.log(num);


// function randomNum(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// let num = randomNum(1, 100);
// let numGuesses = 0;

// function reset() {
//     num = randomNum(1, 100);
//     numGuesses = 0;
//     document.getElementById("num-guesses").innerHTML = 0;
// }

// function makeGuess() {
//     const guessInput = document.getElementById("guess");
//     const guess = Number(guessInput.value);
//     guessInput.value = "";
//     const feedback = document.getElementById("feedback");

//     numGuesses++;
//     document.getElementById("num-guesses").innerHTML = numGuesses;

//     if (guess === num) {
//        feedback.innerHTML = "You guessed it";
//        reset();
//    } else if (guess > num) {
//     feedback.innerHTML = "It is lower.";
//    } else {
//     feedback.innerHTML = "It is higher.";
//    }
// }

// Sorting 

// const num = [1,2,3,34,12,50,2,1,2, 6];

// const sortedNums = num.sort((a, b) => b - a);
// console.log(sortedNums);


// const objs = [
//     {year: 2012, make: "Ford"},
//     {year: 2017, make: "Porsche"},
//     {year: 1999, make: "Volvo"},
//     {year: 2022, make: "Chevy"},
//     {year: 2022, make: "Chevy"},
//     {year: 2017, make: "Porsche"},
//     {year: 1999, make: "Volvo"},
// ];

// const sortedObjs = objs.sort((a, b) => {
//     const diffInYear = b.year - a.year;
//     if (diffInYear === 0) {
//         if (a.make > b.make) {
//             return 1;
//         } else if (a.make < b.make) {
//             return -1;
//         } else {
//             return 0;
//         }

//         return diffInYear;
//     }
// })
// console.log(sortedObjs);

// Classes and Objects


// class Person {
//     // denotes what property we want for all people
//     name;
//     age;
    // function that runs each time we instantiate a new instancde of a class.
//     constructor(name, age) {
//         this.name = name 
//         this.age = age

//     }
       // This is a methods or functions that we define inside of the class that can act on our objects 
//     sayHi(shouldSayBye) {
//         console.log(`Hello my name is ${this.name} and I am ${this.age} years old`)
//         if (shouldSayBye) {
//             console.log("Bye");
//         }
//     }
// }
// This is an instance or an individual creation of this class.
// const person = new Person("Tim", 10);
// This is an instance or an individual creation of this class.
// const person2 = new Person("Joe", 12);
// person.sayHi(false);
// person2.sayHi(true);


// class Person {
//     // denotes what properties/ attributes we want for all people
//     name;
//     age;

//     // This is a methods or functions that we define inside of the class that can act on our objects
//     sayHi(shouldSayBye) {
//         console.log(`Hello my name is ${this.name} and I am ${this.age} years old`)
//         if (shouldSayBye) {
//             console.log("Bye");
//         }
//     }
// }
// // This is an instance or an individual creation of this class.
// const person = new Person();
// person.name = "Tim";
// // This is an instance or an individual creation of this class.
// const person2 = new Person();
// person.sayHi(false);
// person2.sayHi(true);


// Attributes and Methods

// class Teacher {
//     name;
//     age;
//     #salary; // add # symbol to make property/attribute private. 

//     constructor(name, age, salary) {
//         this.name = name
//         this.age = age
//         this.#salary = salary
//         console.log(this.#getSalary()) // calling #getSalary() from within the class will output the salary.
//     }

//     #getSalary() { // add # symbol to create a private method and is only accessible from within the class.
//         return this.#salary;
//     }

//     setSalary(newSalary) {
//         if (newSalary <= 0) {
//             throw Error("Invalid salary, must be above 0.");
//         }
//         this.#salary = newSalary;
//     }
// }

// const teacher = new Teacher("Joe", 24, 65000)


// Static Attributes and Methods.

// class Person {
//     name;
//     static numberOfPeople = 9;

//     constructor(name) {
//         this.name = name;
//         Person.numberOfPeople++;
//     }

//     static getNumberOfPerople() {
//         if (this.numberOfPeople >= 10) this,this.removePerson();
//         return this.numberOfPeople;
//     }

//     static removePerson() {
//         this.numberOfPeople-- ;
//     }
// }

// const p = new Person("tim");
// const p2 = new Person("joe");

// console.log(Person.getNumberOfPerople());

// Inheritance

// class Person { // this is considered the "base" class or "super" class
//     name;
//     age;

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         return this.name + " " + this.age;
//     }
// }

// class Teacher extends Person { // this is another child class that inherites from parent class
//     salary;

//     constructor(name, age, salary) {
//         super(name, age);
//         this.salary = salary;
//     }

//     greet() {
//         return "I am the teacher " + super.greet(); // super pulls from greet() in the super/parent class
//     }
// }

// class Student extends Person { // This would be considered the "child" or "derived" class
//     group;

//     constructor(name, age, group) { // this constructor overrides base level constructor
//         super(name, age); // super function calls constructor of parent class
//         this.group = group; // instanciates the group as an additional attribute for student class
//     }
// }

// const s1 = new Student("Tim", 10, "A");
// const t1 = new Teacher("Sally", 30, 65000);
// console.log(s1.greet());
// console.log(t1.greet());


// Usinkg 'var'
function example() {
    var aVar = 1;
    if (true) {
        var aVar = 2;
        console.log("Inside block using 'aVar':", aVar); // Output: "Inside block using 'aVar': 2"
    }
    console.log("Outside block using 'aVar':", aVar); // Output: "Outside block using 'aVar': 2"
}

// Using 'let'
let aLet = 1;
if (true) {
    let aLet = 2;
    console.log("Inside block using 'let':", aLet); // Output: "Inside block using 'let': 2"
}
console.log("Outside block using 'let':", aLet); // Output: "Outside block using 'let': 1"

// Using 'const'
const aConst = 1;
if (true) {
    const aConst = 2;
    console.log("Inside block using 'const':", aConst); // Output: "Inside block using 'const': 2"
}
console.log("Outside block using 'aConst':", aConst); // Output: "Outside block using 'const': 1"


example();


// Define an object representing a person
const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
    },
};
// Mistake

// Create a new object using the original person object
// const updatedPerson = {...person}; // shallow copy reference to that property "person"

// Update the name property of the new object
// updatedPerson.name = "Jane Doe";

// update the city property of the new object's address
// updatedPerson.address.city = "Los Angeles";

// update the city property of the new object's address
// updatedPerson.address.city = "Los Angeles";

// console.log(person);
// console.log(updatedPerson);


// Solution

// Deep clone the person object using JSON.,parse and JSON.stringify
const updatedPersonDeep = JSON.parse(JSON.stringify(person));

// Now, updating the properties of the updatedPersonDeep won't affect the original person object
updatedPersonDeep.name = "Jane Doe";
updatedPersonDeep.address.city = "Los Angeles";

console.log(person);
console.log(updatedPersonDeep);

// Mistake

//  Define a factory function for a Car object
function createCar(make, model, year) {
    return {
        make: make,
        model: model,
        year: year,
    

    // Define logDetailsRegular as a regular function
        logDetailsRegular: function() {
            console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
        },
    
    // Define logDetailsArrow as an arrow function
        logDetailsArrow: () => {
            console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
        }
    };

};

// Create a new Car object
const myCar = createCar('Toyota', 'Camry', 2020);

// Call the logDetailsregular method, which correctly logs the car's details
myCar.logDetailsRegular(); // Output: "Make: Toyota, Model: Camry, Year: 2020"

// Call the logDetailsArrow method, which logs 'undefined' due to arrow function's 'this' behavior
myCar.logDetailsArrow(); //Output: "Make: undefined, Model: undefined, Year: undefined"

// Solution

const myObject = {
    name: "John",
    sayHello: function () {
        console.log(`Hello from ${this.name}`);

        // Arrow function inherits 'this' from the surrounding context
        const arrowFunction = () => {
            console.log(`Arrow function: Hello from ${this.name}`);
        };

        arrowFunction();
    },
};

myObject.sayHello(); // Output: "Hello from John"
// Output: "Arrow function: Hellow from John"

// Mistake Mishandling asynchronous code

// Simulate an asynchronous API call using setTimeout and Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from API");
        }, 1000);
    });
}

// Incorrect handling of asynchronous code
function displayData() {
    const data = fetchData();
    console.log("Data:", data); // Output: "Data: Promise { <pending> }"
}

displayData();

// Correct handling of asynchronous code using Promises
function displayDataWithPromises() {
    fetchData()
        .then((data) => {
            console.log("Data with Promise:", data); // Output: "Data with Promise: Data from API"
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

displayDataWithPromises();

// Correct handling of asynchronous code using async/await

async function displayDataAsync() {
    try {
        const data = await fetchData();
        console.log("Data with async/await:", data); // Output: "Data with async/await: Data from API"
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

displayDataAsync();