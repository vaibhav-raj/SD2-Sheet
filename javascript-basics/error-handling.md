## Q1. How do you handle exceptions in Node.js?

> In Node.js, exceptions are handled using a combination of **try-catch blocks**, **error-first callbacks**, **Promise `.catch()` methods**, and **global error handlers** like `process.on('uncaughtException')` or `process.on('unhandledRejection')`.
>
> For synchronous code, we use `try...catch`. For asynchronous operations, especially with Promises or async/await, we handle errors using `.catch()` or wrapping `await` calls inside a `try...catch`.

---

### 💡 **Example Code:**

#### 1. **Synchronous Code**

```js
try {
  const data = JSON.parse('invalid JSON');
  console.log(data);
} catch (error) {
  console.error('Error parsing JSON:', error.message);
}
```

#### 2. **Asynchronous Code (using async/await)**

```js
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();
```

#### 3. **Global Error Handling**

```js
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1); // optional - exit to avoid unstable state
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});
```

---

### 🎯 **Possible Cross-Questions and Answers:**

#### ❓1. *What’s the difference between an exception and an error in Node.js?*

> An **exception** is an unexpected condition that disrupts normal execution — like a reference or syntax error.
> An **error** is a broader term — it can be a runtime, system, or logical issue. Exceptions are specific errors that can be caught and handled.

---

#### ❓2. *Why shouldn’t we rely only on `process.on('uncaughtException')`?*

> Because it’s a **last resort** — it catches errors after they’ve already caused instability in the app. It’s better to handle exceptions closer to where they occur (using try-catch or Promise chains) to keep the app stable and predictable.

---

#### ❓3. *How do you handle errors in callbacks?*

> In traditional Node.js callbacks, we use the **error-first callback pattern**. The first argument of the callback is reserved for error objects.

Example:

```js
fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data.toString());
});
```

---

#### ❓4. *What happens if you throw an error inside an async function without catching it?*

> If not caught, it becomes an **unhandled promise rejection**, which can crash the process in newer Node versions.
> That’s why we always wrap async code in try-catch or use `.catch()` with Promises.

---

#### ❓5. *How can you create a custom error in Node.js?*

> You can extend the built-in `Error` class to create meaningful, domain-specific errors.

Example:

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

throw new ValidationError('Invalid input data');
```

---

### 🧠 **Summary Line (Perfect Interview Closer):**

> In short, Node.js offers multiple layers of error handling — from local `try-catch` to global process handlers.
> The best practice is to **handle errors as close to their source as possible** to maintain application stability.

---

## Q2. How do you handle exceptions in Node.js?

Here’s a **concise, interview-ready** answer that sounds confident and complete 👇

---

### 🎯 **Main Answer**

The main difference between **try...catch** and **event-based error handling** lies in **when** and **how** the error is handled.

* **`try...catch`** is **synchronous error handling** — it catches exceptions at the point where they occur in the code.
* **Event-based error handling** is **asynchronous** — errors are emitted as events and handled by **listeners** that respond when the error occurs.

---

### 🧠 **In Simple Terms**

* Use **try...catch** when the code executes **immediately** and errors can be caught right away.
* Use **event-based handling** when errors might occur **later** or **outside** the normal flow — like in network calls, streams, or asynchronous operations.

---

### 💻 **Code Example**

**Using `try...catch`:**

```js
try {
  const data = JSON.parse('{"name": "Vaibhav"}'); // valid JSON
  console.log(data.name);
} catch (error) {
  console.error("Error parsing JSON:", error.message);
}
```

**Using Event-based Error Handling:**

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Error listener
emitter.on('error', (err) => {
  console.error("An error occurred:", err.message);
});

// Emit an error
setTimeout(() => {
  emitter.emit('error', new Error("Something went wrong asynchronously!"));
}, 1000);
```

---

### 💬 **Possible Cross-Questions & Answers**

**❓ Q1: Can `try...catch` handle asynchronous errors?**
**✅ A:** Not directly. If the error occurs asynchronously (like in a callback or Promise), `try...catch` won’t catch it unless the asynchronous call is awaited or handled with `.catch()`.
Example:

```js
try {
  setTimeout(() => { throw new Error("Async error"); }, 1000);
} catch (e) {
  console.log("Won’t catch this!"); // This won't run
}
```

To handle that, you need event-based handling or proper Promise chaining.

---

**❓ Q2: When should you prefer event-based error handling?**
**✅ A:** When working with **asynchronous systems** like file streams, network sockets, or message queues — where multiple errors can occur at different times and need to be handled separately.

---

**❓ Q3: Can both be used together?**
**✅ A:** Yes. You can use `try...catch` inside event listeners to handle code-level issues, and use event-based handling to catch system-level or asynchronous errors.

---

### 🧩 **Summary Line**

> “`try...catch` is best for immediate, synchronous errors, while event-based error handling is ideal for asynchronous or system-level errors that happen over time.”

---

## Q3. What is the purpose of the uncaughtException event?

The `uncaughtException` event in Node.js is triggered when an **unhandled error** occurs in the application — meaning, the error was thrown but **not caught by any `try...catch` block or error handler**.

It allows developers to **perform cleanup operations** (like closing connections, saving logs, or freeing resources) before the application exits.

However, it’s **not recommended to continue running** the app after this event, because the system might be in an **unstable state**.
Typically, we log the error, perform cleanup, and gracefully shut down the process.

---

### 💡 **Example Code:**

```js
process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error:', err.message);
  // Log the full stack trace for debugging
  console.error(err.stack);
  
  // Perform cleanup or alerting logic here
  // e.g., close DB connections or notify admin
  
  // Exit the process after handling
  process.exit(1);
});

throw new Error('Unexpected crash!');
```

---

### 🔁 **Possible Cross-Questions & Answers:**

**❓Q1: What’s the difference between `uncaughtException` and `unhandledRejection`?**
**✅A:**

* `uncaughtException` handles **synchronous** errors that are not caught.
* `unhandledRejection` handles **Promise rejections** that are not caught using `.catch()`.
  Both are process-level events, but it’s better to handle rejections properly in code rather than relying on these events.

---

**❓Q2: Should we use `uncaughtException` for error handling in production?**
**✅A:**
No, it’s a **last-resort mechanism**. You should handle errors gracefully within your code using proper error handling techniques.
The `uncaughtException` event should only be used for **logging and cleanup before shutting down**, not for recovery.

---

**❓Q3: What are better alternatives for global error handling?**
**✅A:**

* Use structured error handling with `try...catch`.
* Use middleware for error handling in frameworks like Express.
* Use `unhandledRejection` for async Promise errors.
* Implement centralized error-handling logic instead of relying on `uncaughtException`.

---

## Q3. How do you debug a Node.js application?
To debug a Node.js application, I usually start with the built-in Node Inspector. I can launch my app in debug mode using `node --inspect index.js`. That opens a WebSocket that I can connect to using Chrome DevTools by going to `chrome://inspect`.

Once it’s connected, I can set breakpoints, step through the code line by line, inspect variables, and check the call stack — basically everything I need to trace what’s going wrong.

If I need the program to pause before it starts running, I use `--inspect-brk` instead. That gives me a chance to set breakpoints before any code executes.

When I’m working in VS Code, I usually just configure debugging through `launch.json`. It’s super convenient — you just hit F5, and it starts in debug mode right in the editor.

For quick fixes, I still use `console.log()` or structured loggers like **Winston** or **Pino**, especially when I need readable logs in production. And for performance issues, I might use `node --prof` or tools like **Clinic.js** to analyze bottlenecks.”

---

**Code example:**

```javascript
// app.js
function add(a, b) {
  const result = a + b;
  return result;
}

function main() {
  const num1 = 5;
  const num2 = 10;
  const sum = add(num1, num2);
  console.log("Sum is:", sum);
}

main();
```

Run it in debug mode:

```bash
node --inspect-brk app.js
```

Then open Chrome → `chrome://inspect`.

---

**If they ask cross-questions**, I’d respond like this:

* **Q:** What’s the difference between `--inspect` and `--inspect-brk`?
  **A:** `--inspect` just enables debugging, while `--inspect-brk` pauses at the very first line, so you can set breakpoints before anything runs.

* **Q:** How do you debug async code?
  **A:** I use `async/await` with proper `try...catch` blocks and sometimes the `--trace-warnings` flag to see unhandled rejections.

* **Q:** How do you debug in production?
  **A:** I don’t attach debuggers directly — I rely on structured logs, monitoring tools like PM2 or Datadog, and try to reproduce the issue in a staging environment first.

---
