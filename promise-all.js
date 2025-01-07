const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(10);
const promise3 = Promise.resolve(15);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // [5, 10, 15]
    const sum = results.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum:", sum); // Sum: 30
  })
  .catch((error) => {
    console.error("Error:", error);
  });
