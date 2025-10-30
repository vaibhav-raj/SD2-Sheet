----------------
🔹 Asynchronous JavaScript
----------------

## Q1 What is the Event Loop and how does it work?

**Point:**
The event loop is a mechanism in JavaScript that manages asynchronous operations and ensures non-blocking behavior.

**Reason:**
Since JavaScript runs on a single thread, it can only execute one task at a time. To handle things like API calls, timers, or user interactions efficiently, the event loop helps coordinate when each task should run without freezing the main thread.

**Example:**
For instance, when we use `setTimeout()`, the timer runs outside the main thread. Once it finishes, the callback is placed in the callback queue. The event loop keeps checking if the call stack is empty. When it’s free, the callback from the queue is pushed into the stack and executed.

**Point (Summary):**
So, the event loop continuously checks and transfers completed asynchronous tasks into the main thread, allowing JavaScript to stay responsive and efficient.

---

### 🎙️ **Natural Spoken Version**

> “In simple terms, the event loop helps JavaScript handle multiple tasks smoothly, even though it runs on a single thread.
> For example, if you call an API or use `setTimeout`, those tasks don’t block the rest of your code. The event loop keeps checking when the main thread is free, and then it runs the callbacks.
> That’s how JavaScript can stay responsive while managing asynchronous code.”

---

## ⚡ Common Cross Questions & Answers

---

### **1. What is the difference between the Call Stack and the Callback Queue?**

**Answer:**
The **call stack** is where JavaScript executes functions — one at a time, in order.
The **callback queue** is where asynchronous callbacks wait until the call stack is free.
The **event loop** connects the two — it moves tasks from the queue to the stack when the stack is empty.

**Example:**
If you use `setTimeout()`, its callback goes into the queue after the timer ends. Once the stack is clear, the event loop moves it into the stack to execute.

---

### **2. What is the role of the Web APIs in the event loop process?**

**Answer:**
Web APIs handle asynchronous operations like `setTimeout`, `fetch`, or DOM events outside the main thread.
When they finish, they pass the callback to the callback queue.
The event loop then picks it up and sends it to the call stack when it’s ready to run.

**Example:**
When you use `fetch()`, the network request runs in a Web API environment. Once it’s done, the callback or promise result is queued for the event loop to process.

---

### **3. What is the difference between Microtasks and Macrotasks?**

**Answer:**
Microtasks (like **Promises** and **process.nextTick**) have higher priority than macrotasks (like **setTimeout** or **setInterval**).
After every execution cycle, the event loop clears **all microtasks** before moving on to the next macrotask.

**Example:**
If you have both a `Promise` and a `setTimeout` in your code, the `Promise` callback will always execute first — even if the timer is set to 0 milliseconds.

---

### **4. How does the event loop work with Promises?**

**Answer:**
When a Promise resolves, its `.then()` or `.catch()` callback is placed in the **microtask queue**.
The event loop ensures all microtasks run immediately after the current task and before any macrotasks like timers or I/O.

---

### **5. Why is understanding the event loop important?**

**Answer:**
It helps developers write **non-blocking, efficient** code.
Understanding how tasks are scheduled helps prevent issues like **race conditions**, **callback hell**, or performance lags in front-end applications.

---

## Q2 What are the phases of the Event Loop?

The **Event Loop** in Node.js is the mechanism that allows asynchronous and non-blocking operations to happen — even though Node.js runs on a single thread.

It basically runs through **different phases**, executing callbacks and managing tasks in a continuous cycle.

There are **six main phases** in the Event Loop. Let me go through them one by one. // pause

---

1️⃣ **Timers Phase:**
This is where callbacks from `setTimeout()` and `setInterval()` are executed.

2️⃣ **Pending Callbacks Phase:**
This phase runs I/O callbacks that were deferred from the previous cycle.

3️⃣ **Idle and Prepare Phase:**
Used internally by Node.js — we don’t usually interact with it directly.

4️⃣ **Poll Phase:**
This is the heart of the Event Loop.
It waits for new I/O events and executes their callbacks — for example, when reading a file or receiving network data.
If there are no timers waiting, the Event Loop can actually **pause** in this phase and wait for new events.

5️⃣ **Check Phase:**
Callbacks from `setImmediate()` are executed here.

6️⃣ **Close Callbacks Phase:**
This handles things like `socket.on('close')`.

After that, the cycle starts again from the timers phase.

---

So, to summarize — the Event Loop cycles through these phases repeatedly,
making sure asynchronous code runs in a predictable, non-blocking order.

---

## ⚡ Common Cross Questions & Answers

---

> **Q:** What’s the difference between `setTimeout()` and `setImmediate()`?
> **A:**
> `setTimeout()` runs in the **timers phase**,
> while `setImmediate()` runs in the **check phase**, right after the poll phase.
> If both are called in the same tick, `setImmediate()` usually runs first — but it depends on the execution context.

---

> **Q:** How are Promises handled in the Event Loop?
> **A:**
> Promises and `async/await` are part of the **microtask queue**.
> They run **after each phase** of the Event Loop, before moving to the next one.
> That’s why `Promise.then()` callbacks often run before timers.

---

> **Q:** Can you briefly describe or visualize the Event Loop cycle?
> **A:**
> You can imagine it like this:
> **Timers → Pending Callbacks → Idle/Prepare → Poll → Check → Close Callbacks**,
> and then the loop repeats. // pause
> Microtasks are checked in between these phases.

---

> **Q:** What’s the main difference between the Event Loop in Node.js and in the browser?
> **A:**
> The concept is similar, but the implementation is different.
> Browsers focus on things like rendering and DOM events,
> while Node.js adds extra phases for server-side tasks like I/O operations and timers.

---

## What are Promises and how do they work?

**P (Point):**
A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation.

**R (Reason):**
Promises help manage asynchronous code more cleanly, avoiding deeply nested callbacks (often called “callback hell”). They let us handle success and failure cases using `.then()`, `.catch()`, and `.finally()` methods.

**E (Example):**
For example:

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) resolve("Data fetched successfully");
    else reject("Error fetching data");
  }, 1000);
});

fetchData
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

Here, the `Promise` executes asynchronously. If successful, it calls `resolve()`; otherwise, `reject()`. Then we handle both cases with `.then()` and `.catch()`.

**P (Point):**
So, Promises provide a structured, readable way to handle asynchronous operations compared to callbacks.

---

## 🤔 Possible Cross Questions & Answers

### 1. **Q:** What are the possible states of a Promise?

**A:** A Promise has three states:

* **Pending** – the initial state, operation not completed yet.
* **Fulfilled** – the operation completed successfully (`resolve`).
* **Rejected** – the operation failed (`reject`).

Once a Promise is fulfilled or rejected, it becomes **settled** and its state cannot change.

---

### 2. **Q:** What is the difference between `.then()` and `.catch()`?

**A:**

* `.then()` handles the **success (resolved)** case of a Promise.
* `.catch()` handles the **error (rejected)** case.
  Example:

```javascript
fetchData
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

If the Promise resolves, `.then()` runs; if it rejects, `.catch()` runs.

---

### 3. **Q:** What is `.finally()` used for?

**A:**
`.finally()` runs after the Promise is settled (whether resolved or rejected). It’s typically used for cleanup tasks.
Example:

```javascript
fetchData
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log("Operation completed"));
```

---

### 4. **Q:** How are Promises different from async/await?

**A:**
`async/await` is **syntactic sugar** built on top of Promises.
It allows asynchronous code to look and behave more like synchronous code, making it easier to read and maintain.
Example:

```javascript
async function getData() {
  try {
    const data = await fetchData;
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

---

### 5. **Q:** Can you chain multiple Promises?

**A:**
Yes, you can chain `.then()` methods to run operations sequentially.
Example:

```javascript
doTask1()
  .then(result1 => doTask2(result1))
  .then(result2 => doTask3(result2))
  .catch(error => console.error(error));
```

This way, each `.then()` waits for the previous one to finish.

---

### 6. **Q:** What happens if you don’t handle a rejected Promise?

**A:**
If a Promise rejects and there’s no `.catch()` handler, it leads to an **unhandled promise rejection error**, which can crash the application in strict environments.
So it’s important to always handle errors properly.

---

Perfect, Vaibhav — let’s answer this in a **clear, structured**, and **interview-ready** way (using the **PREP** format) with possible **follow-up questions** and short, confident answers.

---

## Q3 What is the difference between `process.nextTick()`, `setImmediate()`, and `setTimeout()` in Node.js?

### 🧠 **Answer (PREP Format)**

**Point:**
All three functions schedule the execution of callbacks, but they run at different phases of Node.js’s **event loop**.

---

**Reason:**
They determine *when* your callback runs — immediately after the current operation, after the current phase, or after a delay.

---

**Explanation & Example:**

1. **`process.nextTick()`**

   * Runs **after the current operation completes**, but **before** the event loop continues to the next phase.
   * It’s part of the **microtask queue**.
   * Used for callbacks that need to run **immediately after** the current function, before I/O events.

   ```js
   process.nextTick(() => console.log("nextTick"));
   console.log("main");
   // Output:
   // main
   // nextTick
   ```

2. **`setImmediate()`**

   * Runs **after the current poll phase**, i.e., once the event loop is ready for the **check phase**.
   * Used when you want to run code **after** I/O events.
   * Often executes **after `nextTick()`** but **before or after `setTimeout()`** depending on timing.

   ```js
   setImmediate(() => console.log("immediate"));
   console.log("main");
   // Output:
   // main
   // immediate
   ```

3. **`setTimeout()`**

   * Runs after a **minimum delay** (default 0ms means "as soon as possible", but still after a full event loop cycle).
   * Executes during the **timers phase**.
   * Not guaranteed to run exactly after the delay (depends on system load).

   ```js
   setTimeout(() => console.log("timeout"), 0);
   console.log("main");
   // Output:
   // main
   // timeout
   ```

---

**Point (Summary):**

* `process.nextTick()` → **Before** next event loop phase (microtask queue).
* `setImmediate()` → **At the end** of the current event loop cycle (check phase).
* `setTimeout()` → **In the timers phase**, after a minimum delay.

---

## ⚙️ **Possible Cross Questions and Answers**

---

### 🔸 Q1: Which one should I use for scheduling immediate callbacks?

**A:** Use `setImmediate()` for callbacks that should run **after I/O** events. Use `process.nextTick()` **only** when you need to run something **before** the event loop continues. Overusing `process.nextTick()` can block the loop.

---

### 🔸 Q2: Can `process.nextTick()` cause performance issues?

**A:** Yes. If you recursively call `process.nextTick()`, it can **starve the event loop**, preventing I/O and timers from executing.

---

### 🔸 Q3: If I call `setImmediate()` and `setTimeout(fn, 0)` together, which runs first?

**A:** The order is **not guaranteed** — it depends on the environment. In general:

* If both are called from the **main module**, `setTimeout()` usually runs first.
* If inside an **I/O callback**, `setImmediate()` usually runs first.

---

### 🔸 Q4: What’s the difference between microtasks and macrotasks in Node.js?

**A:**

* **Microtasks:** Run right after the current operation (like `process.nextTick()` or `Promise.then()`).
* **Macrotasks:** Run in different event loop phases (like `setTimeout()` and `setImmediate()`).

---

## Q4 Explain microtask queue vs macrotask queue

**P – Point:**
In JavaScript, both **microtask** and **macrotask** queues are parts of the **event loop**, which manages how asynchronous operations are executed. The key difference lies in **when** they are executed.

**R – Reason:**

* **Macrotasks** include things like `setTimeout`, `setInterval`, and `setImmediate`.
  These are scheduled to run **after the current script and all pending microtasks** are finished.
* **Microtasks**, on the other hand, include **Promises** and **MutationObservers**.
  These run **immediately after the current operation**, but **before** the event loop continues to the next macrotask.

**E – Example:**

```javascript
console.log("Start");

setTimeout(() => console.log("Macrotask"), 0);

Promise.resolve().then(() => console.log("Microtask"));

console.log("End");
```

**Output:**

```
Start  
End  
Microtask  
Macrotask
```

This happens because the **microtask queue (Promises)** is processed **before** the next macrotask (`setTimeout`) starts.

**P – Point (Restate):**
So, in short: **microtasks run before macrotasks**, and this order affects how your asynchronous code behaves.

---

### 💬 **Possible Cross-Questions and How to Answer**

---

**Q1. Why do microtasks have higher priority?**
**A:** Microtasks have higher priority because they are usually short and crucial for maintaining consistency in your program state. For example, Promises often resolve values that the next piece of code depends on, so JavaScript ensures those complete first before moving on to the next macrotask.

---

**Q2. Can the microtask queue cause performance issues?**
**A:** Yes, if there are too many microtasks queued continuously — like recursively adding more Promises — it can block the event loop and delay macrotasks. This can make the UI unresponsive in a browser.

---

**Q3. What are examples of macrotasks and microtasks in Node.js?**
**A:**
In Node.js:

* **Macrotasks:** `setTimeout`, `setImmediate`, I/O callbacks.
* **Microtasks:** `process.nextTick`, resolved Promises.
  Here, `process.nextTick` runs **even before** regular microtasks (Promises), so it has the **highest priority**.

---

**Q4. What happens if you have multiple microtasks and macrotasks together?**
**A:**
The event loop executes **all microtasks** in the queue before moving to the **next macrotask**. So if you keep adding microtasks within microtasks, they’ll all complete before any new macrotask runs.

---

**Q5. How would you debug timing issues between them?**
**A:**
I’d use `console.log()` statements to trace the execution order, or developer tools like Chrome’s Performance tab to visualize the event loop. Understanding the queue order helps identify if a delay or unexpected timing comes from a microtask or macrotask.

----------------------------
----------------
🔹 JavaScript Fundamentals
----------------

## Q1 What is the difference between `var`, `let`, and `const`?

**Point:**
`var`, `let`, and `const` are used to declare variables in JavaScript, but they differ in scope, hoisting, and reassignment behavior.

**Reason:**
These differences affect how variables behave inside functions, blocks, and loops — and help prevent common bugs related to variable re-declaration or unintended changes.

**Example:**

* `var` → function-scoped, can be redeclared and updated.
* `let` → block-scoped, can be updated but not redeclared in the same scope.
* `const` → block-scoped, cannot be updated or redeclared (the reference stays constant).

**Code Example:**

```javascript
function example() {
  var x = 10;
  let y = 20;
  const z = 30;
  
  if (true) {
    var x = 40; // same variable as before
    let y = 50; // new variable in block scope
    // z = 60; // error - can't reassign const
  }
  
  console.log(x); // 40
  console.log(y); // 20
}
example();
```

**Point (restate):**
So, `var` is function-scoped, `let` and `const` are block-scoped. `const` values can’t be reassigned, and `let` is best when you expect the variable to change.

---

## 💬 Possible Cross-Questions and Answers

### **1️⃣ What do you mean by “scope” here?**

**Answer:**
Scope defines where a variable is accessible.

* `var` is **function-scoped**, meaning it’s accessible throughout the entire function.
* `let` and `const` are **block-scoped**, so they only exist within `{}` — like inside an `if` block or loop.

---

### **2️⃣ What is hoisting, and how does it affect `var`, `let`, and `const`?**

**Answer:**
Hoisting means variable declarations are moved to the top of their scope before code execution.

* `var` is **hoisted and initialized as `undefined`**, so you can access it before it’s declared (though not recommended).
* `let` and `const` are also hoisted, but they remain **uninitialized** until the code execution reaches their declaration — this period is called the **temporal dead zone (TDZ)**.
  Accessing them before declaration throws a **ReferenceError**.

---

### **3️⃣ Can you change a `const` object or array?**

**Answer:**
You **can’t reassign** the variable itself, but you **can modify** the contents.

```javascript
const person = { name: "Vaibhav" };
person.name = "Vikram"; // valid
// person = {}; // invalid
```

So `const` makes the reference constant, not the object’s content.

---

### **4️⃣ Which one should we use in modern JavaScript?**

**Answer:**
Always prefer **`const` by default**, and use **`let`** when you know the value will change.
Avoid using `var` unless you need function-scoped behavior for legacy code — it’s considered outdated in modern JavaScript.

---

### **5️⃣ What happens if we redeclare variables using `var` and `let`?**

**Answer:**

* `var` allows redeclaration within the same scope (can lead to bugs).
* `let` and `const` throw an **error** if you try to redeclare them in the same scope.

---

Perfect, Vaibhav — let’s go step-by-step, following the **PREP structure** (Point → Reason → Example → Point), and I’ll include **possible cross-questions** with short, clear answers you can use in an interview.

---

## Q2 Explain hoisting in JavaScript.

**Point:**
Hoisting in JavaScript is a behavior where variable and function declarations are moved, or “hoisted,” to the top of their scope before the code is executed.

**Reason:**
This means you can use functions and variables before they are actually declared in the code — though the behavior differs depending on whether you use `var`, `let`, or `const`.

**Example:**

```js
console.log(a); // undefined
var a = 10;
```

In this example, JavaScript “hoists” the variable `a` to the top but only its declaration, not the value. So, when we log it before initialization, it shows `undefined`.

However:

```js
console.log(b); // ReferenceError
let b = 20;
```

`let` and `const` are also hoisted but stay in a *temporal dead zone* until they’re initialized, which is why we get an error if we access them too early.

**Point (Summary):**
So, hoisting makes declarations accessible before their actual line in code, but only function declarations and `var` behave predictably that way. `let` and `const` are hoisted differently and can’t be accessed before initialization.

---

## 💬 **Possible Cross-Questions (and Short Answers)**

### 1. ❓**Is function hoisting the same as variable hoisting?**

**Answer:**
Not exactly. Function *declarations* are fully hoisted — meaning you can call them before they appear in the code.
Example:

```js
sayHi(); // Works fine
function sayHi() {
  console.log("Hello!");
}
```

But function *expressions* (using `var`, `let`, or `const`) are not hoisted in the same way.

---

### 2. ❓**What happens if we use `let` or `const` before declaration?**

**Answer:**
They’re also hoisted, but they stay in a *temporal dead zone* until the line where they’re initialized.
So accessing them before initialization causes a `ReferenceError`.

---

### 3. ❓**Why does JavaScript have hoisting in the first place?**

**Answer:**
Because during the *compilation phase*, the JavaScript engine first scans for declarations before executing code. Hoisting allows the engine to allocate memory for variables and functions in advance.

---

### 4. ❓**How can we avoid confusion caused by hoisting?**

**Answer:**
Always declare variables and functions at the top of their scope, or use `let` and `const` instead of `var` to avoid unexpected `undefined` values.

---

### 5. ❓**Can arrow functions be hoisted?**

**Answer:**
No, arrow functions are not hoisted like regular functions because they are function *expressions*.
If you try to use them before declaration, you’ll get a `ReferenceError`.

---

Got it, Vaibhav — I’ll answer this question clearly and in the structured (PREP) way we discussed. I’ll also include **possible follow-up (cross) questions** with clear, confident answers so you can practice speaking them fluently in an interview setting.

---

## Q3 What is the difference between `==` and `===` in JavaScript?

**Point:**
The main difference between `==` and `===` in JavaScript is that `==` compares values **after type conversion**, while `===` compares both **value and type** directly, without conversion.

**Reason:**
The `==` operator is known as the **loose equality** operator — it tries to convert both values to the same type before comparing.
On the other hand, `===` is the **strict equality** operator — it checks equality **without converting** the types, so both the type and value must match exactly.

**Example:**
For example:

```js
'5' == 5   // true, because '5' is converted to number 5
'5' === 5  // false, because one is string and the other is number
```

**Point (Summary):**
So, in short — use `===` for **accurate and predictable comparisons** since it avoids type conversion errors.

---

### 🔁 **Possible Cross Questions and Answers**

---
**Why should we prefer `===` over `==` in most cases?**

**Answer:**
We prefer `===` because it avoids **implicit type conversion**, which can lead to unexpected results.
For example:

```js
0 == false  // true
0 === false // false
```

Using `===` makes your code cleaner and less prone to logical bugs.

---

#### **Cross Question 2:**

**Are there any cases where using `==` might be useful?**

**Answer:**
Yes, in rare cases where you intentionally want type conversion.
For instance, when checking if a variable is either `null` or `undefined`, you can use:

```js
if (value == null) 
```

This will return true for both `null` and `undefined`.
Otherwise, prefer `===` for most comparisons.

---

#### **Cross Question 3:**

**What about comparing objects with `==` or `===`? Do they behave differently?**

**Answer:**
For objects, both `==` and `===` behave the same — they compare **references**, not values.
So two objects with the same properties are **not equal** unless they reference the same memory location:

```js
{a:1} === {a:1} // false
```

---

#### **Cross Question 4:**

**Does this difference apply only in JavaScript?**

**Answer:**
Yes, this behavior is specific to JavaScript.
In many other languages (like Java or C#), `==` already means **strict equality** for primitive types.
But in JavaScript, `==` performs type coercion, so developers need to be careful.

---

Got it, Vaibhav 👍 — you want me to explain **closures** clearly (like you’d say in an interview), **using a structured answer format**, and then add **possible follow-up questions** (cross-questions) with concise answers.

Here’s how you could answer 👇

---

## Q4 What are closures, and how do they work?

**Point:**
A *closure* is a feature in JavaScript where an inner function has access to variables from its outer function, even after the outer function has finished executing.

**Reason:**
This happens because functions in JavaScript form a *lexical scope chain*, meaning the inner function remembers the environment (the variables and their values) where it was created — not just where it’s called.

**Example:**

```javascript
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
```

Here, `counter` still remembers `count` even though `outer()` has already executed. That’s because of closure.

**Point (summary):**
So, closures allow functions to “remember” and access their lexical scope, making them useful for data privacy, state management, and callbacks.

---

## 🤔 Possible Cross-Questions and Answers

### 1. **Why are closures useful in real-world applications?**

Closures are great for *data encapsulation*. For example, they can help create private variables that can’t be accessed directly from outside a function. They’re also widely used in event handlers, callback functions, and modules.

---

### 2. **Can you give a practical example of a closure?**

Sure — for example, a counter module:

```javascript
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.value()); // 1
```

Here, `count` is private — it can’t be modified directly from outside.

---

### 3. **What are some potential drawbacks of using closures?**

Closures can cause **memory leaks** if we accidentally keep references to unused variables or functions. Also, overusing them can make debugging harder because the state is preserved between calls.

---

### 4. **What’s the difference between a closure and a scope?**

* **Scope** defines where a variable is accessible.
* **Closure** is created when a function remembers variables from its parent scope even after that scope has closed.
  In short: every closure involves scope, but not every scope is a closure.

---

### 5. **How are closures implemented under the hood?**

When a function is defined, JavaScript creates a *lexical environment* — a record of all variables it can access.
When that function is returned, the environment stays in memory because something (like a variable reference) still points to it. That’s how the function “remembers” those variables.

---

