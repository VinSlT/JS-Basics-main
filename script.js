//Сокуренко Владислав
// 1. Variables and Data Types
let studentName = "John Doe";
let studentAge = 20;
let isEnrolled = true;


// 2. Functions
function greet(name) {
    return `Hello, ${name}!`;
}

function add(a, b) {
    return a + b;
}

function isEven(number) {
    return number % 2 === 0;
}


// 3.  
let colors = ["red", "green", "blue"];

function getFirstElement(arr) {
    return arr[0];
}


// 4.  
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}



if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        studentName,
        studentAge,
        isEnrolled,
        greet,
        add,
        isEven,
        colors,
        getFirstElement,
        car,
        getFullName
    };
}