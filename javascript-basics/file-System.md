## Q1. How do you read and write files in Node.js?

In Node.js, file reading and writing are handled using the **`fs` (File System)** module, which comes built-in.
There are two main ways to handle files: **synchronous** and **asynchronous**.

---

### 🧠 **1. Asynchronous Methods (Preferred for Non-blocking I/O)**

Asynchronous methods don’t block the event loop, making them ideal for performance.

#### **Example – Read a File Asynchronously**

```js
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});
```

#### **Example – Write a File Asynchronously**

```js
const fs = require('fs');

fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});
```

---

### ⚡ **2. Synchronous Methods (Blocking)**

These methods block the main thread until the operation is complete, so they’re generally used in scripts or small utilities — not in production servers.

#### **Example**

```js
const fs = require('fs');

try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File content:', data);
  fs.writeFileSync('output.txt', 'Sync write complete!');
  console.log('File written successfully!');
} catch (err) {
  console.error('Error:', err);
}
```

---

### 💬 **Possible Cross-Questions & Answers**

#### 🔹 Q1: Why do we prefer asynchronous methods in Node.js?

**A:** Because Node.js uses a single-threaded event loop, blocking I/O (like synchronous file reads) can freeze the entire process. Asynchronous methods keep the app responsive by delegating I/O operations to the background.

---

#### 🔹 Q2: What if you want to use promises or async/await with file operations?

**A:** You can use the **`fs.promises`** API introduced in Node.js v10+.

```js
const fs = require('fs').promises;

async function readWriteFile() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log('File content:', data);
    await fs.writeFile('output.txt', 'Written using promises!');
    console.log('File written successfully!');
  } catch (err) {
    console.error('Error:', err);
  }
}

readWriteFile();
```

---

#### 🔹 Q3: How can we handle large files efficiently?

**A:** Instead of reading the entire file into memory, use **streams**. Streams process data in chunks, which is memory-efficient.

```js
const fs = require('fs');

const readStream = fs.createReadStream('largeFile.txt', 'utf8');
const writeStream = fs.createWriteStream('copy.txt');

readStream.pipe(writeStream);

readStream.on('end', () => console.log('File copied successfully!'));
```

---

## Q2. How do you watch file changes in Node.js?

In Node.js, we can watch file changes using two main methods:

1. **`fs.watch()`**
2. **`fs.watchFile()`** — both come from the built-in `fs` (file system) module.

The most commonly used one is **`fs.watch()`**, as it provides an event-driven API that listens for changes like file modifications, renames, or deletions.

Here’s an example:

```js
const fs = require('fs');

fs.watch('example.txt', (eventType, filename) => {
  if (filename) {
    console.log(`${filename} file has changed due to a ${eventType} event.`);
  } else {
    console.log('Filename not provided');
  }
});
```

This will log whenever `example.txt` is modified, renamed, or deleted.

---

### ⚙️ **Alternative Method: `fs.watchFile()`**

`fs.watchFile()` uses polling under the hood — meaning it checks the file status at regular intervals.

Example:

```js
const fs = require('fs');

fs.watchFile('example.txt', (curr, prev) => {
  console.log('File modified');
  console.log('Previous modification time:', prev.mtime);
  console.log('Current modification time:', curr.mtime);
});
```

---

### 💡 **When to Use Which**

* **`fs.watch()`** → Event-based, more efficient, but may behave inconsistently across platforms.
* **`fs.watchFile()`** → Polling-based, more consistent but uses more system resources.

---

### 🧠 **Possible Cross-Questions**

**1️⃣ Q: What are the limitations of `fs.watch()`?**
**A:**

* Behavior can differ between operating systems.
* Sometimes, it might not detect all changes or emit duplicate events.
* Not suitable for deeply nested directory watching by itself.

---

**2️⃣ Q: How do you watch directories recursively?**
**A:**
Starting from **Node.js v10.10.0**, `fs.watch()` supports a `{ recursive: true }` option (on macOS and Windows):

```js
fs.watch('myFolder', { recursive: true }, (eventType, filename) => {
  console.log(`Change detected in ${filename}`);
});
```

For Linux or more complex setups, developers often use external libraries like **`chokidar`**, which handles recursive watching reliably across platforms.

---

**3️⃣ Q: Why would you use `chokidar` instead of `fs.watch()`?**
**A:**
`chokidar` is a popular third-party library built on top of `fs.watch` and `fs.watchFile`.
It provides:

* Cross-platform consistency
* Recursive directory watching
* Debouncing/throttling for frequent changes
* Better event handling (add, change, unlink, etc.)

Example:

```js
const chokidar = require('chokidar');

const watcher = chokidar.watch('example.txt', { persistent: true });

watcher.on('change', path => console.log(`${path} has been changed`));
```

---

### ✅ **In Short (Perfect Interview Summary)**

> In Node.js, we can watch file changes using the built-in `fs.watch()` or `fs.watchFile()` methods.
> `fs.watch()` is event-driven and efficient, while `fs.watchFile()` uses polling and is more consistent across platforms.
> For production-level use or recursive watching, it’s better to use libraries like `chokidar` for reliability and additional features.

---
