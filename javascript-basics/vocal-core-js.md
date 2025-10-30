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
