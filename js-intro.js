// 3 ways to declare variables in JS:
// var
// let
// const

let student; // var. declaration (saving a spot in memory)
console.log("Value is: ", student); // Value is:  undefined
student = "marcos"; // var. assignment (initialization) - giving it a value

let firstName = "sandra"; // declaration and initialization in the same time

// π¨can't name it with number starting nor with JS reserved words:
// let 3students π«π«π«
// class, let, const, function, for, ... π«π«π«

// multiple var. declarations
let price, tax, total;

// use camelCase (but if you want to use snake_case is OK, just be consistent)
let totalPrice; // camelCase
let total_amount; // snake_case

// this is single line comment
/* this is
multiple lines
comment */

let name; // lowercase
// let Name; π«π«π«
