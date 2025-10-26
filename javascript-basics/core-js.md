## Q1. `var`, `let`, `const` → Scope, Block vs Function Level

In JavaScript, the main differences between `var`, `let`, and `const` are in **scope**, **hoisting**, and **mutability**.

---

### ⚙️ Scope

* **`var`** is **function-scoped**.
  A variable declared with `var` inside a function is accessible anywhere **within that function**, but **not outside**.

```js
function example() {
  var x = 10; // x is declared inside this function
  console.log(x); // ✅ Works fine
}
console.log(x); // ❌ Error: x is not defined
```

* **`let`** and **`const`** are **block-scoped**, meaning they are only accessible inside the **nearest curly braces `{}`** where they are defined.

```js
if (true) {
  let x = 10;
  const y = 20;
  console.log(x, y); // ✅ Works fine
}

console.log(x); // ❌ ReferenceError
console.log(y); // ❌ ReferenceError
```

---

### 🔄 Reassignment

* `let` → can be **reassigned**.
* `const` → **cannot be reassigned**.
  *Note*: For objects and arrays declared with `const`, **contents can change**, because only the reference is constant.

```js
const arr = [1, 2];
arr.push(3); // ✅ Allowed
arr = [4, 5]; // ❌ Error: Assignment to constant variable
```

---

### 🚀 Hoisting Difference

All three are **hoisted**, but behave differently:

* `var` → hoisted and **initialized with `undefined`**.
* `let` / `const` → hoisted but **not initialized**, resulting in a **Temporal Dead Zone (TDZ)**.
  Accessing them before declaration throws a **ReferenceError**.

```js
console.log(a); // undefined
var a = 5;

console.log(b); // ❌ ReferenceError
let b = 10;
```

---

### 💬 Common Cross-Questions

**Q. Why do we say `let` and `const` are block-scoped?**
👉 They are only accessible within the nearest `{}` block. Once the block ends, the variable no longer exists.

**Q. What is the Temporal Dead Zone (TDZ)?**
👉 The time between entering a block and the actual declaration of a `let` or `const` variable. Accessing the variable during this period throws a ReferenceError.

**Q. Are `const` variables immutable?**
👉 Only the binding is immutable. Objects or arrays declared with `const` can have their properties or elements changed.

**Q. Can you redeclare variables using `var`, `let`, and `const`?**

* `var` → ✅ Yes, in the same scope
* `let` / `const` → ❌ No, redeclaration in the same scope throws a SyntaxError

**Q. When should you use `let` vs `const`?**
👉 Prefer `const` by default. Use `let` only if the variable’s value needs to change, ensuring code is safer and more predictable.

---

## Q2. `Hoisting`, `Temporal Dead Zone`, How JS “moves” declarations
---

**Answer:**
Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed.

For `var`, the variable is hoisted and initialized as `undefined`, so you can access it before it’s declared but its value is `undefined`.

For `let` and `const`, they are hoisted too but not initialized, so trying to access them before their declaration throws a **ReferenceError**—this is called the **Temporal Dead Zone (TDZ)**. 

Function declarations are fully hoisted, so you can call them before they appear in the code, but function expressions follow the hoisting rules of the variable type they’re assigned to.

---

**Possible follow-ups:**

* **Why does `var` get `undefined` but `let`/`const` don’t?**
  `var` is older and function-scoped, so it gets initialized as `undefined` for backward compatibility. `let` and `const` are block-scoped, and TDZ ensures safer, predictable behavior.

* **What happens if you access a `const` in TDZ?**
  You get a **ReferenceError** because it must be initialized at declaration.

* **Do function expressions get hoisted like function declarations?**
  No—only function declarations are fully hoisted. Expressions follow the rules of their variable type.

* **Why have TDZ at all?**
  It prevents using variables before initialization, avoiding subtle bugs.

---

## Q3. `Closures`, `Lexical Environment`, `Functions remembering outer scope

**Answer**
A closure is basically a function that remembers the variables from the scope where it was created, even if that outer function has finished has finished executing. This happens because of JavaScript’s lexical environment—every function keeps a reference to the variables around it when it’s defined.
In other words, closures ‘remember’ the environment in which they were created.


**Example (to explain clearly):**

```javascript
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    }
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

* Here, `inner` is a closure.
* Even after `outer()` has executed, `inner` still remembers `count` from its outer scope.

---

**Possible cross-questions & answers:**

1. **Q: Why are closures useful?**
   **A:** Closures are useful for **data encapsulation**, **stateful functions**, **memoization**, and creating **private variables**. They allow functions to maintain state across multiple calls without exposing variables to the global scope.

2. **Q: What is the difference between closures and global variables?**
   **A:** Closures provide **private scope**, whereas global variables are accessible anywhere, increasing the risk of conflicts. Closures help maintain **clean, modular, and secure code**.

3. **Q: Does a closure keep a copy of outer variables or a reference?**
   **A:** It keeps a **reference** to the outer variables, not a copy. That’s why if the outer variable changes, the closure sees the updated value.

4. **Q: Can closures cause memory leaks?**
   **A:** Yes, if closures are holding references to large objects or DOM elements longer than needed, they can prevent garbage collection, leading to memory leaks. Proper cleanup is important.

---
