
/**
 * Example of callback
 * 
 * A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.
 * 
 */

// Simulated asynchronous function with a callback
function fetchData(callback) {
  setTimeout(() => {
    const data = 'Hello, world!';
    callback(data);
  }, 2000); // Simulate a delay of 2 seconds
}

// Callback function
function handleData(data) {
  console.log(data);
}

// Calling the asynchronous function with a callback
fetchData(handleData);


/**
 * Example of callback hell
 * 
 * Callback hell occurs when we have multiple nested asynchronous operations, leading to deeply nested callback functions.
 * 
 */

// Simulated asynchronous functions with callbacks
function fetchData(callback) {
  setTimeout(() => {
    const data = 'Hello';
    callback(data);
  }, 2000); // Simulate a delay of 2 seconds
}

function processData(data, callback) {
  setTimeout(() => {
    const processedData = data + ', world!';
    callback(processedData);
  }, 1500); // Simulate a delay of 1.5 seconds
}

function displayData(data) {
  console.log(data);
}

// Callback hell
fetchData(function(data1) {
  processData(data1, function(data2) {
    displayData(data2);
  });
});


/**
 * We can refactor the callback hell example using Promises to avoid the nested structure. 
 *
 * A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
 * A Promise can be in one of three states: Pending: The Promise has been created, but the promise is neither fulfilled nor rejected.
 */

// Simulated asynchronous functions returning Promises
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'Hello';
      resolve(data);
    }, 2000); // Simulate a delay of 2 seconds
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = data + ', world!';
      resolve(processedData);
    }, 1500); // Simulate a delay of 1.5 seconds
  });
}

function displayData(data) {
  console.log(data);
}

// Using Promises to avoid callback hell
fetchData()
  .then(processData)
  .then(displayData)
  .catch(error => {
    console.error('Error:', error);
  });


/**
 *
 * Use the async and await keywords with Promises to write asynchronous code in a synchronous-like manner.
 *
 */

// Simulated asynchronous functions returning Promises
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'Hello';
      resolve(data);
    }, 2000); // Simulate a delay of 2 seconds
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = data + ', world!';
      resolve(processedData);
    }, 1500); // Simulate a delay of 1.5 seconds
  });
}

function displayData(data) {
  console.log(data);
}

// Using async/await with Promises
async function fetchDataAndProcess() {
  try {
    const fetchedData = await fetchData(); // Wait for fetchData() to resolve
    const processedData = await processData(fetchedData); // Wait for processData() to resolve
    displayData(processedData); // Display the processed data
  } catch (error) {
    console.error('Error:', error); // Handle any errors
  }
}

// Call the async function
fetchDataAndProcess();



/**
 *
 * Promise.all is often used when there are many asynchronous tasks involved that the overall code relies on to work successfully - 
 * all of the ones we want to do before we continue to execute the code.
 *
 */

//Promise.all()
let promise1 = Promise.resolve("First");
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Third");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Output: ["First", 42, "Third"]
});


/**
 *
 * The Promise.race() method returns a Promise that is resolved or rejected, as soon as one of the promises in an iterable, 
 * such as an array, fulfills or rejects, with the value or reason from that Promise.
 *
 */


let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "First");
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Second");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // Output: "First"
});


/**
 *
 * Promise.any  method is used to return the first promise that fulfills.
 *
 */

//Promise.any
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));



/**
 * Difference between Promise.all and Promise.allSettled with Examples
 * 
 * Promise.all() will reject immediately upon any of the input promises rejecting. 
 * In comparison, the promise returned by Promise.allSettled() will wait for all input promises 
 * to complete, regardless of whether  or not one rejects. 
 * Use allSettled() if you need the final result of every promise in the input iterable.
 */

Promise.all([Promise.reject(1), Promise.resolve(2)])
  .catch((err) => {
    console.log('err', err);
  });
Promise.allSettled([Promise.reject(1), Promise.resolve(2)])
  .then(console.log);



