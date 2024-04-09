//------- Example of callback----

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


///-----Example of callback hell-------

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



//---------Refactor the callback hell example using Promises to avoid the nested structure. -----

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


//---Use the async and await keywords with Promises to write asynchronous code in a synchronous-like manner.

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





