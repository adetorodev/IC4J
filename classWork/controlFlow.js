// Write a program that allow only user below 18 years in our website
// Tip: create a Global variable call accessAllowed
// Create a variable that holds the user's age

// Soltn
//  let accessAllowed;

//  let age = prompt("Enter your age? ")

//  if(age < 18){
//     accessAllowed = "Access Granted"
//  }else {
//     accessAllowed = "Access Denied"
//  }
// let varName = condition ? true : false
// let accessAllowed = age < 18 ? true : false
// let accessAllowed = age < 18 ? alert("Access Granted") : alert("Access Not Granted")"Access Not Granted"

//  alert(accessAllowed)

//  Greate a login check program
// tip: varibale for message
// another varibale login

// let message;
let login = prompt("What is your position? ");

// if(login == 'Director'){
//     message = "Greetings"
// }else if (login == "Employee") {
//     message = "Hello"
// } else if(login == ''){
//     message= "No Login"
// } else{
//     message = ""
// }
// alert(message)

let message =
  login == "Employee"
    ? alert("Hello")
    : login == "Director"
    ? alert("Greetings")
    : login == ""
    ? alert("No Login")
    : "";
