## Q. *** var, let, const → Scope, block vs function level***

In JavaScript, the difference between `var`, `let`, and `const` mainly lies in **scope**, **hoisting**, and **mutability**.

* **`var`** is **function-scoped**. It means if you declare a variable with `var` inside a function, it’s accessible anywhere within that function — but not outside it.
  However, if you declare `var` inside a block like `{}`, it **ignores block scope** and can still be accessed outside that block.

* **`let`** and **`const`** are **block-scoped**, meaning they are only accessible inside the block `{}` where they are defined.
  This makes them safer and more predictable to use in modern JavaScript.

* Another difference is **reassignment**:

  * `let` can be **reassigned**.
  * `const` **cannot be reassigned** — though for objects and arrays declared with `const`, their **contents** can still be modified (since only the reference is constant).

---

### 🧠 **Example**

```js
function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  console.log(a); // ✅ Accessible (function-scoped)
  console.log(b); // ❌ Error (block-scoped)
  console.log(c); // ❌ Error (block-scoped)
}
test();
```

---

### ⚙️ **Hoisting Difference**

All three are **hoisted**, but:

* `var` is hoisted and **initialized with `undefined`**.
* `let` and `const` are hoisted too but **not initialized**, so accessing them before declaration gives a **ReferenceError** — this area is called the **Temporal Dead Zone (TDZ)**.


### 💬 **Possible Cross-Questions & Crisp Answers**

**Q. Why do we say `let` and `const` are block-scoped?**
👉 Because they are only accessible within the nearest set of curly braces `{}` — like inside an if-statement, loop, or function. Once the block ends, the variable is destroyed.


**Q. What is the Temporal Dead Zone?**
👉 It’s the time between the start of a block and the actual declaration of a `let` or `const` variable. Accessing the variable before it’s declared in that period throws a ReferenceError.


**Q. Are `const` variables immutable?**
👉 Not completely. The binding (reference) is immutable, but if it’s an object or array, its properties or elements can still change.

**Q. Can you re-declare variables using `var`, `let`, and `const`?**
👉
* `var` → Yes, in the same scope.
* `let` and `const` → No, in the same scope (you’ll get a SyntaxError).


**Q. When should you use `let` vs `const`?**
👉 By default, use `const` unless you know the variable’s value will change later — then use `let`. This makes your code more predictable and reduces accidental reassignment.



