//  Control Flow
// Change and choices

// From Abere to Estate
//  a bike or Bus
//  if bike {
//     estate
// }

// if Bus {
//     if ilesaGarage {
//         olaiya
//     } else if ayetoro {
//         if olaiya {
//             estate
//         } else if oldGarage{
//                 estate
//         }
//     }
//     else{
//         estate
//     }
// }

// let year = prompt("Nigeria indenedence is what year? ")

// if (year == 1960) alert("You are right")

// if (year == 1960) {
//     alert("You are right")
// }else {
//     alert("You are wrong, it is 1960")
// }

// let year = prompt(
//   "In which year was the ECMAScript-2015 specification published?",
//   ""
// );
// if (year < 2015) {
//   alert("Too early...");
// } else if (year > 2015) {
//   alert("Too late");
// } else {
//   alert("Exactly!");
// }

// While Loop
//  run same code for numbers 1 - 10, run it
//  through a list of goods or product
/*
while (condition){
    // code to executive
}
*/

//  itertion
// let i = 0
// while(i< 5){
//     alert(i)
//     i++
// }

//  do ... while

/* 
do {
    // loop body
} while (consition)
*/
// let i =0
// do {
//     alert(i)
//     i++
// } while(i<5)

// for loop
/*
for(begin; condtion; step){
    loop body
}
*/
// for(let i =0; i < 5; i++){
//     alert(i)
// }
// let i =0
// for(; i < 5; i++){
//     alert(i)
// }

// for(; i < 5; ){
//     alert(i++)
// }

let sum = 0

while(true){
    let value = +prompt("enter a number: ")
    if(!value) break;
    sum += value
}
alert("sum: " + sum)


// for(let i=0; i<10;i++){
//     if(i%2==0) continue
//     alert(i)
//   }
  