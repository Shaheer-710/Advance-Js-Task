// Question


// Declare a variable using var outside of any function or block.
// ● Declare a variable using let outside of any function or block.
// ● Declare a variable using const outside of any function or block.
// ● Log all three variables to the console.
// ● Are they accessible globally?


// var studentId = "cdc471"
// let student2Id = "bdc561"
// const student3Id = "yudc471"

// console.log(studentId);
// console.log(student2Id);
// console.log(student3Id);

// Answer
// yes they all are accesible globally

// // Question 2
// function myprac(){
//      var stdData = "bre456"
// }

// console.log(stdData);


// function my2prac(){
//     let std2Data = "bre456"
// }

// console.log(std2Data);


// function my3prac(){
//     const std3Data = "bre456"
// }

// console.log(std3Data);

// ANSWER
// They can not be consoled

// Question 3

// if(true){
//      var AppName = "Python"
//      let App2Name = "Javascript"
//      const App3Name = "Html"
// }

// console.log(AppName);
// console.log(App2Name);
// console.log(App3Name);

// Answer
// Only  var can be calledoutside the if

// Queston 4

// console.log(myData);

// var myData = "b45676"

// Answer
// Undeeffined

// Question 5

// console.log(My_Data);

// let My_Data = "bdc471"

// console.log(myInfo);

// let myInfo = "b34c471"

// Answer
// Uncaught Reference Error

// Queston 6

// var it = 'mynme'
// var it = 'your name'
// console.log(it);

// let it = 'mynme'
// let it = 'your name'
// console.log(it);

// const it = 'mynme'
// const it = 'your name'
// console.log(it);

// Answer
//  Only var can be redeclared

// Question 7

// const it = 'mynme' 
// it = 'your name'
// console.log(it);

// let it = 'mynme'
// it = 'your name'
// console.log(it);

// var it = 'mynme'
// it = 'your name'
// console.log(it);

// Answer
//  only var and let can be reassigned

//  Question 8

// console.log(stdeclare);


// function Declaration() {
//     let stdeclare = "i  will redeclare this above"
// }
// Declaration()

// console.log(stde2clare);


// function Declaration2() {
//     const stde2clare = "i  will redeclare this above"
// }
// Declaration2()

// Answer
// While let and const declarations are hoisted to the 
// top of their scope, their initialization is not. This means 
// the variable exists, but its value is not yet defined.

// QUESTION 9

// Var can be useful alongside its limitations in specific legacy code

// function myFunction() {
//     for (var i = 0; i < 5; i++) {
//       console.log(i);
//     }
//     console.log(i); // i is accessible here, even after the loop
//   }

//   myFunction();

// let is ideal for declaring variables that need to be reassigned within a block scope.

// let count = 0;

// function increment() {
//   let count = 0; // New block scope for count
//   count++;
//   console.log(count); // Output: 1
// }

// increment();
// console.log(count); // Output: 0 (global count remains unchanged)

// const is perfect for declaring variables that should not be reassigned throughout their scope

// const PI = 3.14159;

// function calculateArea(radius) {
//   const area = PI * radius * radius;
//   return area;
// }

// const circleArea = calculateArea(5);
// console.log(circleArea); // Output: 78.53975

// Question 10

// const firstName = prompt('Enter your name')
// const lastName = prompt('Enter your lastname')

// const fullname =  `
// ${firstName}  ${lastName}
// `

// console.log(fullname);

// Question 11

// let adress = `
// azizabad
// karachi
// `
// console.log(adress);

// Question 12

// let number = +prompt('enter any number')
// let range = +prompt('Enter range')

//     let sum = `
//     ${number* range}
//     `
//     console.log(sum);


// Question 13

// function multiplyNumbers(num1, num2) {
//     return num1 * num2;
//   }

//   const number1 = 5;
//   const number2 = 10;

//   const product = multiplyNumbers(number1, number2);

//   console.log(`The product of ${number1} and ${number2} is ${product}`);

// Question 14

// function logTag(strings, ...expressions) {
//     console.log(strings[0] + expressions[0] + strings[1]);
//   }

//   const name = "Alice";
//   logTag`Hello, ${name}!`;

// Question 15


// function uppercase() {
//     let name = "alice";
//     let uppname = name.toUpperCase();
//     console.log(`Formatted name is ${uppname}`);
//   }

//   uppercase();

// Question 16

// const currentHour = new Date().getHours();
// const message = console.log(`It's ${currentHour < 12 ? 'Morning' : 'Afternoon'}!`);

// console.log(message);

// Question 17

// const fruitsArr = [
//     'apple',
//     'mango',
//     'pineaplle',
// ]

// const formatedarr = console.log(`
// ${fruitsArr[0]}
// ${fruitsArr[1]}
// ${fruitsArr[2]}
//     `);

// Question 18

// const string_with_backtick = "`This is a string with a backtick:`"
// console.log(string_with_backtick)

// Question 19

// const tableHTML = `
// <table>
//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>Age</th>
//       <th>City</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Alice</td>
//       <td>30</td>
//       <td>New York</td>
//     </tr>
//     <tr>
//       <td>Bob</td>
//       <td>25</td>
//       <td>Los Angeles</td>
//     </tr>
//   </tbody>
// </table>
// `;

// console.log(tableHTML);

// Question 20

// const age = +prompt('Enter your age')

// const canVote = age>=18?  'You are alllowed to vote' : 'you are no allowed to vote'

// console.log(canVote);

// Question 21

// const number = +prompt('enter a number')

// const EvenOrOdd = number % 2 ===  0 ? `${number} is even `: `${number} is odd`

// console.log(EvenOrOdd);

// Question 22

// const score = +prompt('Enter your score')

// const result = score >= 90 ? "Your grade is A" : score >= 80 ? 'your grade is B' : score >= 70 ? 'your grade is C' : score >= 60 ? 'Your grade is D' : 'You are failed'

// console.log(result);

// Question 23

// let isLoggedIn = true; 

// let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";

// console.log(statusMessage);

// Question 24

// const isMember = prompt('Are you a member')
// const purchaseAmount = +prompt('Enter Purchase amount')

// const discount = isMember === 'Yes'.toLowerCase() &&  purchaseAmount >= 100 ? `yo get a discont of ${purchaseAmount/100*10}`: 'you dont get a discont'

// console.log(discount);

// Question 25

// function maxValue(a, b) {
//     return a > b ? a : b;
//   }
  
//   let num1 = 10;
//   let num2 = 25;
  
//   let max = maxValue(num1, num2);
//   console.log("The maximum value is:", max);

// Question 26

// const numbers = [0,1,2,3,4,5,6,7,8,9,10]

// const doubleOrtriplenums = numbers.map(number =>[
//     number % 2 === 0 ? number*2 : number/3
// ])

// console.log(doubleOrtriplenums);

// Question27

// const arrayOfstrings=['shaheer' , 'credohighschool' , 'grade9-B commerce' , 'apple' , 'banana' , 'mountaindew', 'pep']

// const arrayOfStrings = ['shaheer', 'credohighschool', 'grade9-B commerce', 'apple', 'banana', 'mountaindew', 'pe'];

// const arrayWithStrings3 = arrayOfStrings.filter(element => element.length > 3);

// console.log(arrayWithStrings3);

// Question 28

// const arrayOfstrings=['shaheer' , 'credohighschool' , 'grade9-B commerce' , 'apple' , 'banana' , 'mountaindew', 'pep']

// const coopiedArray = [...arrayOfstrings, 1]

// console.log(coopiedArray);

// Question 29

// const array1=['shaheer' , 'credohighschool' ,]
// const array2 = ['shaheer', 'hamza']

// const mergedarray = [...array1,...array2]

// console.log(mergedarray);

// Question 30

// const arrayOfnumbers = [1,2,3,4] 

// const newArray = [0 , ...arrayOfnumbers ,5]

// console.log(newArray);

// Question 31

// const originalObject = {
//         name1 : 'shaheer',
//         hours : 23
// }

// const copiedObject ={
//     ...originalObject,
// }

// copiedObject.hours = 24

// console.log(copiedObject);
// console.log(originalObject);

// Question 32

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const mergedObj = { ...obj1, ...obj2 };

// Question 33

// user={
//     name: 'Shaheer',
//     age:24,
//     email:'shaheer7w@gmail.com'
// }

// updatedUser= {
//     ...user, 
//     email: 'shaheer8w@gmail.com',
//     address: '123 Main St'
// }

// console.log(updatedUser);
// console.log(user);

// Question 34

// function sum(a, b, c) {
//     return a + b + c;
//   }
  
//   const numbers = [1, 2, 3];
  
//   const result = sum(...numbers); 
  
//   console.log(result); 

// Question 35

// const sum = (a, b, c) => {
//     return a + b + c;
//   }
//   array = [1,2,3]
//   const result = sum(...array); 

//   console.log(result);

// Question 36

// const combineArrays = (...arrays) => {
//     return [].concat(...arrays);
//   }
  
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   const array3 = [7, 8, 9];
  
//   const combinedArray = combineArrays(array1, array2, array3);
  
//   console.log(combinedArray);

// Question 37

// const multiply = (number, ...args) => {
//     return args.map(arg => number * arg);
//   }
  
//   const result = multiply(5, 2, 3, 4); 
  
//   console.log(result); 

// Question 38

// const nestedArr =[
//     [
//         'orange','pineapple','mango'
//     ]
//     [
//        'car','bike','plane'
//     ]
// ]

// const copiedArr = [
//     ...nestedArr
// ]

// copiedArr[0] = 10

// console.log(nestedArr);
// console.log(copiedArr);

// Qestion 39

// const sum = (...numbers) => {
//     let total = 0;
//     for (const number of numbers) {
//       total += number;
//     }
//     return total;
//   };
  
//   console.log(sum(1, 2, 3));

// Question 40

// const average = (...numbers) => 
//     numbers.length === 0 
//       ? 0 
//       : numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  
//   console.log(average(2, 3, 4, 5, 6)); 

// Question 41

// const array = [1,2,3,4,5]

// const [variable1 , ...rest] = array

// console.log(variable1);
// console.log(array);
// console.log(rest);

// Question 42

// const colors = ["red", "green", "blue", "yellow", "purple"];

// const [first, second, ...remainingColors] = colors;

// console.log(remainingColors)

// Question 43

// const person ={
//     name:'Jhon',
//     email:'shgcshghc@gmail.com',
//     age : 45
// }

// const {name , email, ...rest} = person

// console.log(rest);

// Question 44

// const user = {
//     id : 402429 ,
//     name :'Shaheer',
//     grade : 'Á*',
//     info :{
//           age : 14, 
//           major :'Cs'
//     }
// }

// const {
//     id,
//     name,
//     info : {major},
//     ...rest
// } = user


// console.log(id);
// console.log(name);
// console.log(major[1]);
// console.log(rest);

// Question 45

const filterEven = (...nums)=>{
       return  nums.filter(num => num % 2 === 0) 
}

console.log(filterEven(2,3,4,5,6,7,8,11,14));

