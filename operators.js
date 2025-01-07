
// //arithmetic +,-,*,/,%,++,--
// //comarison   ==,===,!=,>,<,>=,<=
// //logical  &&,||,!

// // 1. AND(&&) Short Circuit
// // `In an expression using the logical AND operator (&&), evaluation stops as soon as a false result is encountered. This is because, in the case of &&, if any operand evaluates to false, the entire expression will be false, regardless of the remaining conditions.

// // When JavaScript encounters an expression with &&, it evaluates from left to right:

// // If the first operand is false, it short-circuits and returns false, skipping any further evaluations.
// // If the first operand is true, it proceeds to evaluate the next condition.
// // Short-circuiting in JavaScript can also be used to replace if-else statements. For example, true && expression always evaluates to the expression, and false && expression always evaluates to false.

// // Example 1: Below is an example of the Short circuiting operators.



// // 1
// // const result = false && (console.log("This won't run"), true); 
// // 2
// // console.log(result);

// // Output
// // false
// //  Example 2: Short-circuiting using the AND(&&) operator. 



// // 1
// // const a = 5;
// // 2
// // const b = 10;
// // 3
// // const result = (a > 0 && b < 20) && "Both conditions are true";
// // 4
// // console.log(result);

// // Output
// // Both conditions are true
// // 2. OR(||) Short Circuit
// // In an expression using the logical OR operator (||), evaluation stops as soon as a true result is encountered. This is because if any operand is true, the entire expression will be true, regardless of the remaining conditions.

// // When JavaScript encounters an expression with ||, it evaluates from left to right:

// // If the first operand is true, it short-circuits and returns true, skipping further evaluations.
// // If the first operand is false, it proceeds to evaluate the next condition.
// // Like &&, OR short-circuiting can be used as a replacement for if-else statements. For example, true || expression always returns true, and false || expression always returns the expression.

// // Example: Short-circuiting using OR(||). `

// //=======================================================================================================================================================//
// let a=5;
// let b=a++ + --a;
// let c=++b + b++;
// a++;
// console.log(a)
// console.log(b)
// console.log(c)
// //Let's break down the code step by step:

// ### Code:
// ```javascript
// let a = 5;
// let b = a++ + --a;
// let c = ++b + b++;
// a++;
// console.log(a);
// console.log(b);
// console.log(c);
// ```

// ### Step-by-Step Execution:

// #### Initial Value:
// - `a = 5`

// #### Line 2: `let b = a++ + --a;`
// - `a++` is **post-increment**: The current value of `a` (5) is used, then `a` is incremented to 6.
// - `--a` is **pre-decrement**: `a` is decremented to 5 before being used.
// - Calculation:
//   ```
//   b = 5 (from a++) + 5 (from --a)
//   b = 10
//   ```
// - `a` is back to 5.

// #### Line 3: `let c = ++b + b++;`
// - `++b` is **pre-increment**: `b` is incremented to 11 before being used.
// - `b++` is **post-increment**: The current value of `b` (11) is used, then `b` is incremented to 12.
// - Calculation:
//   ```
//   c = 11 (from ++b) + 11 (from b++)
//   c = 22
//   ```
// - `b` is now 12.

// #### Line 4: `a++;`
// - `a++` is **post-increment**: The current value of `a` (5) is used, then `a` is incremented to 6.

// #### Final Values:
// - `a = 6`
// - `b = 12`
// - `c = 22`

// ### Output:
// ```javascript
// console.log(a); // 6
// console.log(b); // 12
// console.log(c); // 22
// ```

// Let's revisit **how `b` becomes 12** in detail:

// ### Code:
// ```javascript
// let b = a++ + --a;
// let c = ++b + b++;
// ```

// #### First Line: `let b = a++ + --a;`
// - Initially, `a = 5`.

// Step-by-step:
// 1. `a++`: **Post-increment**, so `5` is used first, then `a` becomes `6`.
// 2. `--a`: **Pre-decrement**, so `a` is decremented back to `5` before being used.
// 3. Calculation:
//    ```
//    b = 5 (from a++) + 5 (from --a)
//    b = 10
//    ```
// - At the end of this line:
//   - `a = 5` (after `--a`).
//   - `b = 10`.

// #### Second Line: `let c = ++b + b++;`
// Step-by-step:
// 1. `++b`: **Pre-increment**, so `b` is incremented **before** use:
//    ```
//    b = 10 + 1 = 11
//    ```
//    `11` is used in the calculation.
// 2. `b++`: **Post-increment**, so `11` (current value of `b`) is used, and then `b` is incremented:
//    ```
//    b = 11 + 1 = 12
//    ```
// 3. Calculation for `c`:
//    ```
//    c = 11 (from ++b) + 11 (from b++)
//    c = 22
//    ```
// - At the end of this line:
//   - `b = 12`.

// ---

// ### Final Answer:
// `b` becomes `12` because:
// 1. It was incremented by `++b` (**pre-increment**) to `11`.
// 2. It was incremented again by `b++` (**post-increment**) to `12`.

// This explains how `b` is now `12`.
// // ==========================================================
// let a=true;
// !!!!!a;
// console.log(a) //true a value is not changed
// // ==========================================================
// // ==========================================================
// let a=true;
// a=!!!!!a;
// console.log(a) //true a value is not changed
// // ==========================================================
// let a=10 & 3;
// console.log(a);
// // // ==========================================================
// let x=10 | 3;
// console.log(x);
// // // ==========================================================
// let s=10 ~ 3;
// console.log(s);
// // ==================================================
