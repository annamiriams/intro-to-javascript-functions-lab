/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x > y) {
        return x;
    } else if (x < y) {
        return y;
    } else return x || y;
};

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
    if (age >= 18) {
        return ('Adult');
    } else {
        return ('Minor');
    }
};

console.log('Exercise 2 Result:', isAdult(21));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

/*
Disclaimer: In the code below, I had originally used console.log instead of return. The output was "undefined." 
I read through MDN about switch statements, the Canvas module, all of my notes about switch statements, 
and ultimately used chatGPT about using console.log in switch statements and why my output was "undefined." 
That helped me figure out that return might get me the intended output.
*/

const isCharAVowel = (char) => {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
            break;
        default:
            return false;
    }
};

console.log('Exercise 3 Result:', isCharAVowel('a'));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => {
    return (`${name}@${domain}`);
};

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

/*
FYI: Since name was already defined for a previous exercise, I created a different parameter below called userName.
*/

const greetUser = (userName, timeOfDay) => {
    return (`Good ${timeOfDay}, ${userName}!`);
};

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
};

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (billAmount, tipPercentage) => {
    return (billAmount * (tipPercentage / 100));
};

console.log('Exercise 7 Result:', calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature = (temp, str) => {
    if (str === 'C') {
        return ((temp * (9 / 5)) + 32);
    } else {
        return ((temp - 32) / (9 / 5));
    }
};

console.log('Exercise 8 Result:', convertTemperature(100, "F"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (number1, number2, operation) => {
    if (operation === 'add') {
        return (number1 + number2);
    } else if (operation === 'subtract') {
        return (number1 - number2);
    } else if (operation === 'multiply') {
        return (number1 * number2);
    } else if (operation === 'divide') {
        return (number1 / number2);
    } else {
        return (`Check that you entered a valid operation and try again!`);
    }
};

console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'));

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (score) => {
    if (score >= 90) {
        return 'A'
    } else if (score >= 80 && score <= 89) {
        return 'B'
    } else if (score >= 70 && score <= 79) {
        return 'C'
    } else if (score >= 60 && score <= 69) {
        return 'D'
    } else {
        return 'F'
    }
};

console.log('Exercise 10 Result:', calculateGrade(85));

/*
I kept getting so stuck on exercise 11, so skipped it for the time being. Hoping to revisit it later during support time!
*/

/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

const numArgs = () => {
    return arguments.length - 1;
};

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));
