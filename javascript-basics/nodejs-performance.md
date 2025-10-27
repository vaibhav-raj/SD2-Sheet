## Q1. What is the process object in Node.js?

The `process` object in Node.js is a built-in global object that gives you information and control over the current Node.js process — basically, the environment your app is running in.

It’s an instance of the **EventEmitter** class, so it can listen for and emit events like `'exit'`, `'beforeExit'`, or `'uncaughtException'`. You don’t have to import it — it’s available everywhere by default.

You can use `process` to:

* Access environment variables (`process.env`)
* Read command-line arguments (`process.argv`)
* Get process details like PID or Node version
* Gracefully exit the app using `process.exit()`
* Handle signals or lifecycle events

Here’s a quick example:

```js
process.on('exit', (code) => {
  console.log(`Process exiting with code: ${code}`);
});

console.log(`PID: ${process.pid}`);
console.log(`Node version: ${process.version}`);
console.log(`Environment: ${process.env.NODE_ENV}`);
process.exit(0);
```

---

**Possible follow-up questions:**

**Q:** *Is the process object global?*
**A:** Yes, it’s global — you don’t need to import it.

**Q:** *What’s the difference between `process.exit()` and `process.kill()`?*
**A:** `process.exit()` stops the current process gracefully, while `process.kill(pid)` sends a signal (like `SIGTERM`) to any process by ID.

**Q:** *What does `process.nextTick()` do?*
**A:** It queues a callback to run right after the current operation, but before the event loop continues.

**Q:** *Can we change environment variables using `process.env`?*
**A:** Yes, but only for the current process — the change won’t persist after the app stops.

---

## Q3. How do you manage multiple processes in Node.js?
So, Node.js runs on a single thread by default, which means it uses just one CPU core. But when we need to take advantage of multiple cores — say for heavy workloads or high traffic — we can manage multiple processes using modules like `child_process` and `cluster`.

The `child_process` module lets us create new processes using methods like `spawn`, `exec`, or `fork`. Each of these runs independently, so it’s great for running background tasks or CPU-heavy work without blocking the main thread.

When it comes to scaling web servers, though, the `cluster` module is the go-to. It allows us to create multiple worker processes that all share the same server port, so each worker can handle part of the load. This way, Node.js apps can actually use all CPU cores instead of just one.”

---

**Example (using `cluster`):**

```js
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  require('http').createServer((req, res) => {
    res.writeHead(200);
    res.end(`Handled by worker ${process.pid}\n`);
  }).listen(3000);

  console.log(`Worker ${process.pid} started`);
}
```

That code basically starts one worker per CPU core, and if any worker crashes, it automatically restarts — which makes it really robust.

---

**Possible follow-ups:**

**Q:** What’s the difference between `spawn`, `exec`, and `fork`?
**A:**

* `spawn` streams output in real time — good for long-running processes.
* `exec` buffers all output — better for short tasks.
* `fork` is just like `spawn`, but it’s used to run another Node.js script and communicate via messages.

**Q:** How do processes communicate?
**A:** They can talk using IPC — inter-process communication — through `process.send()` and `process.on('message')`.

**Q:** When would you use child processes vs clusters?
**A:**
I’d use **child processes** for background jobs or isolated computations, and **clusters** when I want to scale a web server to handle more concurrent requests.

**Q:** Any downsides?
**A:**
Yeah — each worker has its own memory, so sharing state can be tricky. For shared data like sessions, I’d usually use something external, like Redis.

---

**Wrap-up line:**
“So basically, Node.js stays single-threaded for simplicity, but with `child_process` and `cluster`, we can easily scale across multiple cores and handle more work in parallel.”


## Q4. What is clustering and why is it used?

**Clustering in Node.js** is a technique used to **utilize multiple CPU cores** to improve the performance and scalability of a Node.js application.

By default, Node.js runs on a **single thread**, which means it can handle only one task per event loop. If you have a multi-core system, a single Node process won’t use all the cores — leading to underutilization.

**The cluster module** in Node.js allows us to **spawn multiple worker processes** that share the same server port. Each worker runs on a separate CPU core, allowing the application to handle more requests concurrently and utilize system resources efficiently.

---

### 💬 **Example Answer (Interview Style)**

> “In Node.js, clustering is used to take advantage of multi-core systems. Since Node.js is single-threaded, by default it runs on only one CPU core. The cluster module helps create multiple worker processes, each running on a different core but sharing the same server port. This improves performance, scalability, and fault tolerance.
>
> For example, if one worker crashes, others continue handling requests — so it also increases reliability.”

---

### 🧠 **Possible Cross-Questions & Answers**

**Q1. How does clustering differ from load balancing?**

> Clustering is an **inbuilt Node.js feature** that allows you to create multiple processes of the same application. Load balancing, on the other hand, is a **broader concept** that distributes incoming network traffic across multiple servers or processes. In Node.js, the cluster module itself uses a round-robin load balancing strategy by default.

---

**Q2. What happens if one worker process dies?**

> The master process can detect it using the `exit` event and can automatically **spawn a new worker** to replace the dead one, ensuring high availability.

---

**Q3. How do workers share the same port?**

> Node.js uses the **`cluster` module’s internal load balancer**, which shares the server port among workers and distributes connections using a round-robin approach (on UNIX systems).

---

### 💻 **Code Example**

```js
// cluster-example.js
const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master process is running on PID: ${process.pid}`);
  console.log(`Forking for ${numCPUs} CPUs...`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for dying workers
  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died. Spawning a new one...`);
    cluster.fork();
  });
} else {
  // Workers share the same TCP connection
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Handled by worker ${process.pid}\n`);
    })
    .listen(3000);

  console.log(`Worker started on PID: ${process.pid}`);
}
```

---

### ⚡ **Bonus Tip**

In production, tools like **PM2** handle clustering automatically — it manages multiple Node.js processes and restarts them if they crash.

---

## Q5. What is clustering and why is it used?

Here’s how you can answer **“What is load balancing in Node.js?”** in an interview — in a **clear, crisp, and complete** way, followed by **possible cross-questions** and **code snippets** 👇

---

### 🎯 **Main Answer (Interview Style)**

> Load balancing in Node.js is a technique used to distribute incoming client requests evenly across multiple instances of a Node.js application.
>
> Since Node.js runs on a **single thread**, it can only utilize one CPU core at a time. To make full use of a multi-core system and handle high traffic efficiently, we run multiple instances of the same app and distribute requests among them — this process is called **load balancing**.
>
> Load balancing helps in **improving performance, scalability, and fault tolerance** of an application.

---

### ⚙️ **How It’s Done in Node.js**

There are mainly **two approaches**:

1. **Using the built-in `cluster` module** (for multi-core utilization on a single machine)
2. **Using an external load balancer like NGINX or PM2** (for multiple servers or containers)

---

### 💻 **Code Example using Node.js Cluster Module**

```js
const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master process ${process.pid} is running`);

  // Fork workers for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Restart a worker if it dies
  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died, starting a new one...`);
    cluster.fork();
  });

} else {
  // Worker processes handle HTTP requests
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Handled by worker ${process.pid}\n`);
  }).listen(3000);

  console.log(`Worker ${process.pid} started`);
}
```

👉 Each worker will listen on the **same port (3000)**, and Node.js will handle distributing the incoming connections automatically across all workers.

---

### ❓ **Possible Cross-Questions and Answers**

**1. Q:** Why do we need load balancing in Node.js?
**A:** Because Node.js uses a single-threaded event loop and can’t use multiple CPU cores by default. Load balancing helps distribute the load across multiple processes or servers, ensuring better performance and reliability.

---

**2. Q:** What’s the difference between Node.js clustering and load balancing using NGINX?
**A:**

* **Clustering** happens at the application level (within Node.js) to utilize multiple CPU cores on a single machine.
* **NGINX load balancing** happens at the network level — it can distribute requests across multiple servers or containers running the app.

---

**3. Q:** How does PM2 help with load balancing?
**A:** PM2 is a process manager that automatically handles clustering for you. When you start your app with `pm2 start app.js -i max`, PM2 forks as many instances as there are CPU cores and manages load balancing internally.

---

**4. Q:** What happens if one worker crashes?
**A:** In the cluster setup, the master process listens for the `exit` event and can automatically restart a new worker to keep the system stable.

---

**5. Q:** Can load balancing handle session data?
**A:** Yes, but you need **sticky sessions** or a **shared session store** (like Redis) to ensure a user’s session persists even if the request hits a different worker or server.

---


