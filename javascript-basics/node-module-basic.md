
## Q1. Difference between require() and import.

`require()` is from the **CommonJS** system — it’s **synchronous**, meaning it loads the module at runtime before moving on. It’s what older Node.js projects use by default.

`import`, on the other hand, is from **ES Modules (ESM)** — it’s **asynchronous** and **statically analyzed**. That means imports are hoisted to the top and can be optimized by bundlers for things like **tree-shaking**, which helps remove unused code.

So, in simple terms:
👉 `require()` = CommonJS, runtime, synchronous
👉 `import` = ES Modules, compile-time, asynchronous

---

### Possible Follow-up Questions

**Q:** Can we use both in the same file?
**A:** Not really. You can’t mix them directly in one file because they follow different standards, but you can use both in the same project — for example, `.cjs` files for CommonJS and `.mjs` files for ES Modules.

**Q:** Why is `import` preferred nowadays?
**A:** Because it’s part of modern JavaScript, supports better optimization, and works well with front-end bundlers like Webpack or Rollup. It’s basically more future-proof.

**Q:** What if we use `require` in the browser?
**A:** Browsers don’t support `require` natively since it’s a Node.js thing, but you can still make it work if you use a bundler like Webpack that converts it for you.

**Q:** When should we use which?
**A:** Use `require()` for older Node.js codebases, and `import` for modern JavaScript — especially if you’re writing something that runs in both Node and browsers.

---


## Q2. How do you create and export a module?

In JavaScript (specifically Node.js or ES6), a *module* is simply a file that contains reusable code. To create a module, we define some logic inside a file and then **export** the parts we want to make available to other files.

In **CommonJS (Node.js)**, we use `module.exports` or `exports` to export values.
For example:

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;
```

Then, we can **import** it into another file using `require`:

```js
const add = require('./math');
console.log(add(2, 3)); // Output: 5
```

In **ES6 Modules**, we use the `export` and `import` keywords.
For example:

```js
// math.js
export function add(a, b) {
  return a + b;
}
```

And we import it like this:

```js
import { add } from './math.js';
console.log(add(2, 3)); // Output: 5
```

So basically, creating a module means writing some code in a separate file, and exporting means making that code available to be reused in other files.

---

### **Possible Cross-Questions & Answers**

**Q1. What’s the difference between `module.exports` and `exports`?**
A: `exports` is just a reference to `module.exports`. If you reassign `exports` directly, it breaks the link. So, it’s safer to use `module.exports` when exporting a single item.

---

**Q2. What’s the difference between CommonJS and ES6 modules?**
A:

* CommonJS uses `require` and `module.exports` — it’s synchronous and mainly used in Node.js.
* ES6 uses `import` and `export` — it’s asynchronous and works in browsers as well as modern Node.js environments.

---

**Q3. Can we export multiple things from a module?**
A: Yes.
In CommonJS:

```js
module.exports = { add, subtract };
```

In ES6:

```js
export { add, subtract };
```

---

**Q4. Can we have a default export in ES6 modules?**
A: Yes.

```js
export default function add(a, b) {
  return a + b;
}
```

Then you can import it without curly braces:

```js
import add from './math.js';
```

---

## Q3. What is NPM? How do you manage dependencies in a Node project?

> **NPM** stands for **Node Package Manager**. It’s the default package manager for **Node.js** and is used to install, manage, and share JavaScript dependencies or libraries that a project needs.
>
> In a Node project, dependencies are listed in the **`package.json`** file. This file keeps track of all the packages your project uses along with their versions.
>
> To manage dependencies:
>
> * You install packages using `npm install <package-name>`.
> * All installed dependencies are stored in the **`node_modules`** folder.
> * The `package.json` keeps the dependency list, and the **`package-lock.json`** ensures consistent versions across environments.
> * For production, you can install only essential packages with `npm install --production`.
> * To remove a package, use `npm uninstall <package-name>`.
>
> You can also define **devDependencies** (for development tools like linters or testing libraries) and **dependencies** (for packages needed in production).
>
> Overall, NPM simplifies dependency management, version control, and project setup.

---

### 💬 **Possible Cross-Questions & Answers**

**Q1. What’s the difference between dependencies and devDependencies?**

> **dependencies** are required for your app to run in production (e.g., Express, React).
> **devDependencies** are only needed during development (e.g., Jest, ESLint, Babel).
> They’re specified separately in `package.json` to avoid unnecessary installs in production.

---

**Q2. What’s the role of `package-lock.json`?**

> The `package-lock.json` file locks the versions of all installed packages (and their sub-dependencies) to ensure that everyone working on the project installs exactly the same versions. It improves consistency and prevents version conflicts.

---

**Q3. How do you update or audit dependencies?**

> You can run `npm outdated` to see which packages are outdated and `npm update` to update them.
> To check for vulnerabilities, use `npm audit` and fix them with `npm audit fix`.

---

**Q4. What’s the difference between NPM and Yarn?**

> Both are package managers for Node.js. Yarn was introduced by Facebook to improve speed, security, and determinism in installs. However, NPM has since improved significantly with features like `package-lock.json` and parallel installations, narrowing the gap.

---

**Q5. What happens when you run `npm install` without arguments?**

> It installs all the dependencies listed in the `package.json` file, ensuring the environment is ready to run the project.

---


## Q4. What are global vs local modules?

In Node.js (or JavaScript environments using npm), **modules** can be either **global** or **local** depending on how they are installed and accessed.

* **Local Modules:**
  Local modules are installed **within a specific project** using `npm install <package>` and are stored in the project's `node_modules` folder.
  These modules are only available to that project.
  For example, if I install `express` locally, I can use it in that project by requiring it:

  ```js
  const express = require('express');
  ```

  Local modules are typically used for project-specific dependencies.

* **Global Modules:**
  Global modules are installed **system-wide** using the `-g` flag, like `npm install -g nodemon`.
  They are available from **anywhere in the system**, usually for command-line tools or utilities that need to be accessed globally.
  For example, you can run `nodemon app.js` directly in the terminal without installing it in every project.

---

### **Example for Clarity:**

* Local install: `npm install express`
* Global install: `npm install -g nodemon`

`express` is used *in code* → local.
`nodemon` is used *from terminal* → global.

---

### **Possible Cross-Questions:**

**1. Q: How can I check if a module is installed globally?**
**A:** You can run `npm list -g --depth=0` to see all globally installed packages.

---

**2. Q: Can I use a globally installed module in my code (require it)?**
**A:** Generally no, because globally installed modules aren’t linked to your project’s `node_modules`. If needed, you can use tools like `npm link` to make a global module available locally.

---

**3. Q: When should I use a global vs a local module?**
**A:**

* Use **local** modules for project dependencies (libraries, frameworks).
* Use **global** modules for CLI tools or utilities you use across multiple projects (like `npm`, `nodemon`, or `typescript`).

---

**4. Q: Where are global modules stored on the system?**
**A:**
It depends on your system, but you can find the global path using:

```bash
npm root -g
```

---

