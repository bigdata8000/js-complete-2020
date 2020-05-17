/*
    Number: floating point numbers.
    String: text.
    Boolean: true or falase.
    Undefined: data type with no value.
    Null: empty.
*/

// console.log("Hello World 2020!");


// video 2.5

var firstName = "John";
var lastName = "Smith";
var age = 21;
var canDrive = true;
var job;                // should show undefined in console.
var $favFood = "Curry";   // starting var name with $ and _ .
var _city = "London";
// var 3children = true;   // cant start with numbers.

console.log(firstName + " likes Pizza!");
console.log("and he is " + age + " years old.");
console.log(canDrive);
console.log(job);


// video 2.7 - basic operators, logical operators.

var a = 5;
var b = 2;
var blackJack = 10 + 11;
var firstIsBigger = a > b;      // return true or false.

console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a x b = " + (a * b));
console.log("a / b = " + (a / b));
console.log(blackJack);

console.log(firstIsBigger);


// video 2.8 - operator precedence.

var yearNow = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = yearNow - yearJohn >= fullAge;      //
console.log("John is 18 or above ? " + isFullAge);


var ageJack = 21;
var ageJill = 24;

var averageAge = (ageJack + ageJill) / 2;
console.log("The average age of Jack and Jill is: " + averageAge);


// video 2.9 - coding challenge

/*
    1 - Store: Mark's and John's weight and height.
    2 - calculate both their BMI (weight / height^2).
    3 - print a sentence like :Is Mark's BMI higher than John's ? true.
*/

var markWeight = 80;    // kg
var markHeight = 1.8;   // meters
var markBMI = (markWeight / (markHeight * markHeight));

var johnWeight = 70;    // kg
var johnHeight = 1.8;   // meters
var johnBMI = (johnWeight / (johnHeight * johnHeight));

var isMarkHeavier = markBMI > johnBMI;

console.log("Marks BMI is: " + markBMI);
console.log("John's BMI is: " + johnBMI);

console.log("Is Mark's BMI higher? " + isMarkHeavier);


// video 2.11 - if else statement

var p = 20;
var q = 11;

if (p>q) {
    console.log("p is greater than q.");
} else {
    console.log("q is greater than p.");
};



var currentYear = 2020;
var maryYear = 2018;
var maryAge = currentYear - maryYear;

if (maryAge >= 18) {
    console.log("Mary can vote.");
} else {
    console.log("Mary can't vote yet.");
};



var englishTest = 70;   // out of 100, pass mark is 60
var mathTest = 80;  
var itTest = 90;

var averageTest = ((englishTest + mathTest + itTest) / 3);

if (englishTest >=60 && mathTest >=60 && itTest >=60) {
    console.log("Well done. You passed all 3 tests and your average score is: " + averageTest + ".");
} else {
    console.log("You did not pass all 3 tests, please try again.");
};


// video 2.12 - boolean
/*
    AND (&&)
    OR (||)
    NOT (!)
*/

var yourName = "John";
var age = 16;

if (age < 13) {
    console.log(yourName + " is a boy.");
} else if (age >=13 && age <=20) {
    console.log(yourName + " is a teenager.");  // between 13 and 20.
} else {
    console.log(yourName + " is a man.");
};



var taxName = 'Richard';
var grossSalary = 60000;

if (grossSalary <=12500) {
    console.log("Your salary will be tax free.");
} else if (grossSalary >=12501 && grossSalary <=50000) {
    console.log("Your Tax Band is: Basic Rate.")
} else {
    console.log("Your Tax Band is: Higher Rate.");
};


// video 2.13 - ternary operator and switch statement
