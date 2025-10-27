## Q1. How do you create an HTTP server in Node.js?

In Node.js, we can create an HTTP server using the built-in `http` module. This doesn’t require any external dependencies. It allows us to handle requests and send responses manually.

**Example:**

```javascript
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // success status
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World! This is a basic Node.js server.');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

**Explanation:**

* We import the `http` module.
* Use `http.createServer()` to create a server that handles requests.
* Respond with `res.end()`.
* Finally, the server listens on a specified port.

---

## 🎯 **Main Question 2: How do you create an HTTP server in Node.js using Express?**

**Answer (Interview Style):**

Express is a popular Node.js framework that simplifies handling HTTP requests, routing, and middleware. It abstracts the low-level code we write with the native `http` module.

**Example:**

```javascript
const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World! This is an Express server.');
});

// Start the server
app.listen(3000, () => {
  console.log('Express server running at http://localhost:3000/');
});
```

**Explanation:**

* Import `express` and initialize an app.
* Define routes like `app.get()`, `app.post()`, etc.
* Start the server using `app.listen()`.
* Express handles request and response objects internally, making it cleaner and more scalable.

---

## ⚖️ **Difference Between Native HTTP and Express**

| Feature     | Native HTTP                                  | Express                                        |
| ----------- | -------------------------------------------- | ---------------------------------------------- |
| Setup       | Manual, verbose                              | Simple, minimal                                |
| Routing     | Manual checks for `req.url` and `req.method` | Built-in route methods (`app.get`, `app.post`) |
| Middleware  | Needs custom implementation                  | Built-in and third-party middleware support    |
| Scalability | Harder to manage for large apps              | Easier to scale and maintain                   |
| Use Case    | Learning or low-level control                | Production-grade applications                  |

---

## 💬 **Possible Cross-Questions & Smart Answers**

**Q1. Why use Express when Node’s HTTP module can do the same thing?**
👉 Express saves time and code. It provides built-in routing, middleware, and better error handling, which makes the app more scalable and maintainable — ideal for production environments.

---

**Q2. What is middleware in Express?**
👉 Middleware functions are functions that have access to the request and response objects. They can modify them, end the response, or pass control to the next middleware using `next()`. Example:

```javascript
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  next();
});
```

---

**Q3. Can Express run without the HTTP module?**
👉 Internally, Express still uses Node’s `http` module. It’s essentially built on top of it, providing a higher-level abstraction.

---

**Q4. How would you handle errors in Express?**
👉 Using an error-handling middleware:

```javascript
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send('Internal Server Error');
});
```

---

**Q5. How can you serve static files using Express?**
👉 Using the built-in `express.static()` middleware:

```javascript
app.use(express.static('public'));
```

---

## Q2. What is Express.js? Why is it used?

**Express.js** is a **minimal and flexible Node.js web application framework** that simplifies building server-side applications and APIs. It provides a robust set of features for handling **HTTP requests, routing, middleware, and more**, making backend development faster and more organized.

It’s built on top of **Node.js**, which allows developers to handle **client requests and server responses efficiently** using JavaScript on both the front-end and back-end.

---

### 🚀 **Why Express.js is Used:**

1. **Simplified Routing:**
   Express provides a clean and easy way to define routes for handling different endpoints.

2. **Middleware Support:**
   You can easily use middleware functions to handle requests, responses, authentication, logging, etc.

3. **Fast Development:**
   It abstracts away a lot of repetitive code, so developers can focus on building features.

4. **Scalability and Flexibility:**
   Works well for small projects as well as large-scale RESTful APIs.

5. **Integration with Databases and Frontend:**
   Easily integrates with MongoDB, MySQL, React, Angular, etc.

---

### 💻 **Code Example:**

```javascript
// Import express
const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

// Example of a POST route
app.post('/user', (req, res) => {
  const user = req.body;
  res.send(`User ${user.name} added successfully!`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

### 🧠 **Possible Cross-Questions & Answers:**

**1. Q:** What is middleware in Express.js?

**A:** Middleware functions are functions that have access to the request and response objects. They can modify them or end the request-response cycle. They’re often used for tasks like logging, authentication, or parsing request bodies.
Example:

```javascript
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Move to the next middleware
});
```

---

**2. Q:** How does Express.js handle routing?

**A:** Express uses methods like `app.get()`, `app.post()`, `app.put()`, and `app.delete()` to define routes that handle different HTTP requests.
Example:

```javascript
app.get('/about', (req, res) => {
  res.send('About Page');
});
```

---

**3. Q:** What is the difference between Node.js and Express.js?

* **Node.js** is a runtime environment for running JavaScript on the server.
* **Express.js** is a framework built on top of Node.js that simplifies server and API creation.

---

**4. Q:** Can you build REST APIs with Express.js?

**A:** Yes, Express.js is commonly used to build RESTful APIs because it provides easy routing and JSON handling.

---

## Q3. How do you handle routes in Express?

In **Express.js**, routes are used to define how an application responds to different client requests. Each route is associated with a specific HTTP method (like `GET`, `POST`, `PUT`, `DELETE`) and a URL pattern.

I usually handle routes by organizing them into separate files using the **Express Router**, which helps keep the code modular and maintainable — especially in larger applications.

---

### **Example:**

```js
// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/users', userRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
```

```js
// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// GET all users
router.get('/', (req, res) => {
  res.send('Get all users');
});

// GET user by ID
router.get('/:id', (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

// POST new user
router.post('/', (req, res) => {
  res.send('Create a new user');
});

module.exports = router;
```

This structure makes the code **scalable, readable, and easy to debug**.

---

### **Possible Cross-Questions & Answers:**

**Q1. Why do we use `express.Router()`?**

👉 `express.Router()` allows us to create modular route handlers. Instead of defining all routes in one file, we can separate them by feature (like users, products, auth). This improves maintainability and makes the code easier to test.

---

**Q2. What’s the difference between `app.use()` and `app.get()`?**

👉 `app.use()` is mainly used for middleware and mounting route modules, while `app.get()` defines a specific route for GET requests.
For example:

* `app.use('/users', userRoutes)` mounts all routes from `userRoutes` under `/users`.
* `app.get('/users', handler)` handles only the GET request to `/users`.

---

**Q3. How do you handle route parameters and query parameters?**

👉 Route parameters are accessed using `req.params`, and query parameters through `req.query`.
Example:

```js
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const { sort } = req.query;
  res.send(`User ID: ${id}, Sort: ${sort}`);
});
```

---

**Q4. How do you handle errors in routes?**

👉 You can use a centralized **error-handling middleware** in Express:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});
```

This helps avoid repeating try-catch logic in every route.

---

## Q4. What are middleware functions in Express?

**Middleware functions in Express** are functions that have access to the **request (`req`)**, **response (`res`)**, and the **next** middleware function in the application’s request-response cycle.

They are mainly used to **execute code**, **modify the request and response objects**, **end the request-response cycle**, or **call the next middleware** in the stack using `next()`.

In short, middleware acts like a **pipeline** that processes incoming requests before they reach the final route handler.

There are several types of middleware in Express:

1. **Application-level middleware** — bound to an instance of the Express app.
2. **Router-level middleware** — bound to an instance of `express.Router()`.
3. **Built-in middleware** — provided by Express (like `express.json()`, `express.static()` etc.).
4. **Third-party middleware** — installed via npm (like `morgan`, `cors`, etc.).

---

### 💻 **Example Code Snippet**

```javascript
const express = require('express');
const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route
});

// Built-in middleware
app.use(express.json());

// Route handler
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

### 💬 **Possible Cross-Questions and Answers**

**Q1. What happens if you don’t call `next()` in a middleware?**
👉 The request will **hang** and the server won’t move to the next middleware or route handler. It basically **stops the request-response cycle**.

---

**Q2. How is error-handling middleware different from regular middleware?**
👉 Error-handling middleware has **four parameters** — `(err, req, res, next)`.
It’s specifically designed to **catch and handle errors** that occur in the application.

---

**Q3. Can middleware be used for authentication or logging?**
👉 Absolutely. Middleware is commonly used for **authentication**, **logging**, **input validation**, **CORS**, and **request parsing**.

Example:

```javascript
function authMiddleware(req, res, next) {
  if (req.headers.authorization === 'secret') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}
```

---

**Q4. What’s the difference between `app.use()` and `app.get()`?**
👉 `app.use()` is used to **register middleware** that applies to **all HTTP methods** and paths (unless specified).
`app.get()` is specifically for handling **GET requests** to a particular route.

---

## Q5. How do you handle errors in Express?
“In Express, errors are handled using **middleware functions with four parameters** — `(err, req, res, next)`. Express recognizes such functions as **error-handling middleware**.
When an error occurs, either due to a thrown exception or by calling `next(err)`, Express automatically passes the error to this middleware, which can then log it, format a response, and prevent the app from crashing.”

---

### **Code Snippet:**

```js
const express = require('express');
const app = express();

// Sample route
app.get('/', (req, res, next) => {
  try {
    throw new Error('Something went wrong!');
  } catch (err) {
    next(err); // Pass error to error-handling middleware
  }
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

### **Key Points to Mention (if you have time):**

* Always place the **error-handling middleware at the end** of all routes.
* It’s a good practice to create **a centralized error handler** and use **custom error classes** for better structure.
* For async code, use **`try-catch` blocks** or a wrapper like `express-async-handler` to catch rejected promises.

---

### **Possible Cross-Questions & How to Answer Them:**

**1️⃣ Cross-Question:**

> What happens if you don’t use the four parameters `(err, req, res, next)`?

**Answer:**
Express won’t recognize it as an error-handling middleware, so it will be treated like a normal route middleware and won’t catch errors automatically.

---

**2️⃣ Cross-Question:**

> How do you handle errors in asynchronous routes or promises?

**Answer:**
In async functions, errors might not be caught by Express automatically.
We can either use a `try-catch` block and call `next(err)` manually, or use a library like `express-async-handler` to simplify this.

**Example:**

```js
const asyncHandler = require('express-async-handler');

app.get('/users', asyncHandler(async (req, res) => {
  const users = await getUsersFromDB(); // might throw
  res.json(users);
}));
```

---

**3️⃣ Cross-Question:**

> How can you create a custom error class in Express?

**Answer:**
You can extend the built-in `Error` class to include properties like status code and error type.

```js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}
```

Then throw `new AppError('Not Found', 404)` inside routes and handle it in the central error middleware.

---
## Q6. How do you send JSON responses in Express?

In Express, we send JSON responses using the `res.json()` method.
This method automatically sets the `Content-Type` header to `application/json` and converts the JavaScript object into a JSON string before sending it to the client.

It’s the most common and preferred way to send structured data in APIs built with Express.

---

### 💻 **Example Code Snippet**

```js
const express = require('express');
const app = express();

app.get('/user', (req, res) => {
  const user = {
    id: 1,
    name: 'Vaibhav',
    role: 'Developer'
  };
  res.json(user);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

---

### 🧠 **Possible Cross-Questions & Answers**

**❓1. What’s the difference between `res.send()` and `res.json()`?**

* `res.json()` is specifically used to send JSON responses — it automatically stringifies the object and sets the `Content-Type` header to `application/json`.
* `res.send()` is more general-purpose — it can send a string, buffer, or object. If you pass an object, Express internally calls `res.json()`, but using `res.json()` makes your intent clearer when building APIs.

---

**❓2. What happens if you use `res.send()` with a JSON object?**
Express will detect the object type and automatically call `JSON.stringify()` on it before sending, but again, `res.json()` is the better practice for clarity and consistency in APIs.

---

**❓3. Can you chain `res.status()` with `res.json()`?**
Yes! You can chain methods to set the status code and send the JSON response in a single line:

```js
res.status(200).json({ message: 'Success', data: user });
```

This sets the status code to 200 and sends the JSON response.

---

**❓4. What’s the difference between `res.json()` and `res.sendFile()`?**

* `res.json()` sends JSON data.
* `res.sendFile()` is used to send a file (like an image, PDF, or HTML file) from the server to the client.

---

**✅ Quick Summary for Interview:**

> “In Express, we use `res.json()` to send JSON responses. It automatically sets the `Content-Type` to `application/json` and stringifies the object. For example, `res.status(200).json({ message: 'Success' });`. It’s cleaner and more explicit than `res.send()` when working with APIs.”

---
