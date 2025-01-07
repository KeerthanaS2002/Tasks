
//call back hell
//calling a function inside a function many times
// function attandace(callback) {
//     setTimeout(() => {
//         console.log("attandance");
//         callback(); // Call the callback after the delay
//     }, 2000);
// }

// function lunch(callback) {
//     setTimeout(() => {
//         console.log("lunch");
//         callback(); // Call the callback after the delay
//     }, 2000);
// }

// function goingtohome(callback) {
//     setTimeout(() => {
//         console.log("going to home");
//         callback(); // Call the callback after the delay
//     }, 2000);
// }

// attandace(() => { lunch(() => { goingtohome(() => {})   });});
// console.log("end");
