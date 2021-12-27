// 1.
function tellStory() {
    array[0] = (prompt("Enter your name: "));
    array[1] = (prompt("Enter your mood: "));
    array[2] = (prompt("Enter your activity: "));
    if(array[0] === "" || array[1] === "" || array[2] === "") {
        alert("Not a valid input!");
    }else {
        document.write("This is " + array[0] + ". " + array[0] + " is a nice person. Today they are " + array[1] + ". They are " + array[2] + " all day. The end.");
    }
}

let array = [];
tellStory();

// 2.
function validNumber(checker) {
    if(!isNaN(checker)) {
        return checker;
    }else {
        console.log("Your input is not valid!");
    }
}

function sumNumbers() {
    let sum = 0;
    let checker = 0;
    for(let i=0; i<5; i++) {
        arrayNumber.push(parseInt(prompt("Enter a number")));
        checker = arrayNumber[i];
        validNumber(checker);
        sum = sum + arrayNumber[i]; 
    }
    console.log(sum);
}

let arrayNumber = [];
sumNumbers();

// 3.
function mergeArray() {
    let n;
    n = prompt("Enter the number of words you want to merge");
    for(let i=0; i<n; i++) {
        arrayMerge.push(prompt("Enter a word: "));
    }
    console.log(arrayMerge.join(' '));
}

let arrayMerge = [];
mergeArray();

// 4.
function numberPrinter() {
    for(let i=0; i<20; ++i) {
        console.log(arrayNumbers[i]);
    }
}

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
numberPrinter();

// 5.
function MaxMinFinder() {
    let n, sumNumbers = 0, max = 0, min = 99999999;
    n = prompt("Enter the number of inputs you are gonna enter: ");
    for(let i=0; i<n; i++) {
        arrayRandomNumbers.push(parseInt(prompt("Enter a number: ")));
        if(arrayRandomNumbers[i] > max) {
            max = arrayRandomNumbers[i];
        }
        if(arrayRandomNumbers[i] < min) {
            min = arrayRandomNumbers[i];
        }
        sumNumbers = sumNumbers + arrayRandomNumbers[i]; 
    }
    console.log("Max: " + max + ", Min: " + min + ", Sum: " + sumNumbers);
}

let arrayRandomNumbers = [];
MaxMinFinder();

// 6. 
function fullName() {
    arrayFullName.push("1. " + arrayName[0] + " " + arraySurname[0]);
    arrayFullName.push("2. " + arrayName[1] + " " + arraySurname[1]);
}

let arrayName = ["Bob", "Jill"];
let arraySurname = ["Gregory", "Wurtz"];
let arrayFullName = [];
fullName();
console.log(arrayFullName);