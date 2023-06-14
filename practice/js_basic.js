// 변수
let num = 10;
let nickname = "Kim"
const greeting = "hello";
var boolVar = true;


// 데이터 타입
const obj = {name: "John", age: 25};
const arr = [1, 2, 3];
const arr_str = ["1", "2", "3"];
function multiply(a, b) {
    return a * b;
}

console.log(multiply(1,2))

// 연산자
let result = 10 + 5;
let calc = true && false;

console.log(typeof calc);
console.log(result)


// 조건문
if (num > 5) {
    console.log("Number is greater than 5");
} else {
    console.log("Number is less than or equal to 5");
}

switch (nickname) {
    case "hello":
        console.log("Greeting is hello");
        break;
    case "goodbye":
        console.log("Greeting is goodbye");
        break;
    default:
        console.log("Unknown greeting");
        break;
}

// 반복문
for (let i = 0; i < arr.length; i++) { // for
    console.log(arr[i]);
}

let i = 0;
while (i < 3) { // while
    console.log(i);
    i++;
}

do {    // do-while
    console.log(i);
    i--;
} while (i > 0);

// 함수
function greet(name) {
    console.log("Hello" + name + "!");
}

greet("John");

const add = function(a, b) {
    return a + b;
};

result = add(3, 5);

function multiplyByTwo(a) {
    return a * 2;
}
function apply(callback, num) {
    return callback(num);
}
result = apply(multiplyByTwo, 4);

// 객체
const person = {
    name: "John",
    age: 25,
    greet: function() {
        console.log("Hello, my name is ${this.name} and I am ${this.age} years old.");
    }
};
console.log(person.name);
person.greet();

// 배열
const fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits[2]);

// 예외 처리
try {
    console.log(nonexistentVariable);
} catch(error) {
    console.log("An error occurred: " + error);
} finally {
    console.log("This code will always run.");
}