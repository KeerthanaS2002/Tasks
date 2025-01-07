//=========================================================================================
// let a = 47;
//  if ((a % 3 === 0) && (a  %5 === 0)) {
//     console.log("hihello");
// }
// else if (a % 3 === 0) {
//     console.log("hi");
// }
// else if (a % 5 === 0) {
//     console.log("hi");
// }

// else {
//     console.log("bye");
// }
//=========================================================================================
// switch(choice){
//     case 1:
//         statements;
//         break;
//      case 2:
//         statements;
//         break;
//     case 3:
//         statements;
//         break;
//     default:
//         statements;
//         break;
// }

//==============================================================================
// //string can be used
// let choice="hello";
// switch(choice){
//     case "hi":
//         console.log("hi");
       
//      case "hello":
//         console.log("hello");
//         break;
//     case "h":
//         console.log("hihello");
//         break;
//     default:
//         console.log("welcome"); break;
// }
//===============================================
//  an array cannot directly be used as the `choice` value in a `switch` statement in JavaScript. The `switch` statement performs strict equality comparison (`===`) between the `choice` value and the `case` values, and strict equality between objects (including arrays) only evaluates to `true` if they are the same reference.

// Here’s an example to demonstrate this:

// ```javascript
// let choice = [1, 2, 3];

// switch (choice) {
//     case [1, 2, 3]: // This will not work as expected because the arrays are different references.
//         console.log("Matched!");
//         break;
//     default:
//         console.log("Default case"); // This will execute.
// }
// ```

// ### Why It Doesn't Work
// In the example above:
// - The `choice` variable holds an array reference.
// - The `case [1, 2, 3]` creates a new array reference, which is different from the `choice` reference.
// - Since `choice` and `[1, 2, 3]` do not refer to the same object in memory, the comparison fails.

// ### Alternatives
// If you want to use arrays in such a context, consider converting the array to a string or some other comparable value:

// ```javascript
// let choice = [1, 2, 3].toString();

// switch (choice) {
//     case "1,2,3":
//         console.log("Matched!");
//         break;
//     default:
//         console.log("Default case");
// }
// ```
//--------------------------------------------------------------------------------------------
//error
// if(false)
//     console.log("hi");
//     console.log("hello" );
// else
//   console.log("bye")

//-------------------------------------------------------------------------

// if(false)
// {
//     console.log("hi");
//     console.log("hello" );}
// else
//   console.log("bye")

// console.log("byebye")
