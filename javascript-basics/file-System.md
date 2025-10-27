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

### ✅ **Summary (For Interview Wrap-Up)**

> “In Node.js, we use the `fs` module to interact with the file system.
> We can read and write files both synchronously and asynchronously, but asynchronous methods are preferred for non-blocking performance.
> For modern code, `fs.promises` and streams are the most efficient ways to handle file operations.”

---

Would you like me to format it as a **spoken-style answer** (like you’re actually saying it in an interview)?
