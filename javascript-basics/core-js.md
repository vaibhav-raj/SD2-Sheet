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

## Q4. `this binding / call / apply / bind / arrow functions`.

In JavaScript, `this` refers to the context in which a function is called. Its value changes depending on how the function is invoked.

* **Default or global context:** In a normal function call, `this` points to the global object (`window` in browsers) or `undefined` in strict mode.
```javascript
function show() {
  console.log(this);
}
show(); // window (or undefined in strict mode)
```

* **Object method (implicit binding):** If a function is called as a method of an object, `this` refers to that object.
```javascript
const person = {
  name: "Vaibhav",
  greet() {
    console.log(this.name);
  }
};
person.greet(); // Vaibhav
```
* **Explicit binding:** We can explicitly set `this` using `call`, `apply`, or `bind`.

  * `call` calls the function immediately with a specified `this` and arguments listed individually.
  * `apply` is similar, but takes arguments as an array.
  * `bind` returns a new function with `this` permanently set, which can be called later.
```javascript
  function greet(greeting) {
  console.log(greeting + ", " + this.name);
}
const person = { name: "Vaibhav" };
greet.call(person, "Hello"); // Hello, Vaibhav
```
```javascript
greet.apply(person, ["Hi"]); // Hi, Vaibhav
```
```javascript
const greetPerson = greet.bind(person);
greetPerson("Hey"); // Hey, Vaibhav
```
* **Arrow functions:** They don’t have their own `this`. Instead, they inherit `this` from the surrounding lexical scope, which is why binding them with `call`, `apply`, or `bind` doesn’t work.
```javascript
const obj = {
  name: "Vaibhav",
  greet: () => console.log(this.name)
};
obj.greet(); // undefined (this is not obj)
greetPerson("Hey"); // Hey, Vaibhav
```

**Common follow-ups:**

* `bind` is useful for callbacks or event handlers because it keeps `this` fixed.
* Arrow functions are great for preserving context inside nested functions.
* In classes, normal methods’ `this` refers to the instance, but you might need `bind` if you pass the method as a standalone function.

---

## Q5. `Prototype Chain & Inheritance`.

> In JavaScript, **objects have a hidden link to another object called their prototype**, which allows them to inherit properties and methods. This concept is called **prototypal inheritance**.

> Every JavaScript object has an internal property `[[Prototype]]` (accessible via `__proto__` in older syntax or `Object.getPrototypeOf(obj)`), which points to its parent object. When we try to access a property on an object, JavaScript first looks at the object itself. If it doesn’t find it, it follows the **prototype chain** upwards until it either finds the property or reaches `null`.
>
> For example:

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hello, ${this.name}`;
};

const john = new Person('John');
console.log(john.greet()); // "Hello, John"
```

> Here, `john` does not have a `greet` method directly, but JavaScript finds it on `Person.prototype` via the prototype chain.

**Key Points:**

1. **Prototype chain** is the mechanism behind property lookup in objects.
2. **Inheritance** in JS is prototype-based, not class-based (though ES6 `class` syntax is syntactic sugar over prototypes).
3. Every function in JS has a `prototype` property used when creating new objects with `new`.
4. The chain always ends with `Object.prototype`, whose `[[Prototype]]` is `null`.

---

### **Possible Cross-Questions & Answers:**

**1. Q:** What’s the difference between `__proto__` and `prototype`?

* `prototype` exists on **functions** and is used when creating new objects via `new`.
* `__proto__` exists on **all objects** and points to the object’s prototype.
* Example:

```javascript
function Person(){}
console.log(Person.prototype); // the prototype object
const p = new Person();
console.log(p.__proto__ === Person.prototype); // true
```

**2. Q:** What is the difference between classical inheritance and prototypal inheritance?

* Classical inheritance (e.g., Java, C++) uses **classes** and **instances**, usually a static hierarchy.
* JS uses **prototypes**, where objects directly inherit from other objects dynamically.
* ES6 classes are syntactic sugar over prototypal inheritance.

**3. Q:** Can we modify an object’s prototype after creation?

Yes, using `Object.setPrototypeOf(obj, newProto)` or by changing the constructor’s prototype. But modifying the prototype chain dynamically can lead to performance issues, so it’s not recommended in production code.

**4. Q:** What is `Object.create()`?
It creates a new object with the specified prototype:

```javascript
const parent = { greet() { return "Hello"; } };
const child = Object.create(parent);
console.log(child.greet()); // "Hello"
```

## Q6. `ES6 Classes vs Prototypes → Syntactic sugar explained`.

In JavaScript, **ES6 classes are essentially syntactic sugar over the existing prototype-based inheritance system**.
Before ES6, we used **constructor functions** and **prototypes** to create and inherit objects. 
ES6 introduced the `class` keyword, which provides a **cleaner and more readable syntax** for doing the same thing.

Under the hood, **classes still use prototypes** — meaning when you create methods inside a class, they’re actually added to the class’s prototype, not copied to each instance.

So, **functionally there’s no difference**; it’s mainly about **syntax, readability, and maintainability**.

Here’s a quick example:

```js
// Before ES6 (Prototypes)
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name}`);
};

// ES6 Classes
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
```

Both approaches do the same thing — `greet` is stored on the prototype and shared among instances.

---

### 🧠 **Extra Points (Good to Mention)**

* **Class syntax is not hoisted**, unlike function declarations. You must define a class before using it.
* **Classes use strict mode** by default.
* **Static methods** and **getters/setters** are easier to define with classes.
* **Subclassing** (via `extends` and `super`) is much simpler and cleaner in ES6 classes.

---

### 💬 **Possible Cross-Questions & Answers**

**Q1.** *So, if they’re the same under the hood, why use classes at all?*
**A:** Because classes make code more **readable and organized**, especially in larger codebases. They also make inheritance (`extends`, `super`) much cleaner and easier to follow than manually linking prototypes.

---

**Q2.** *Are ES6 classes hoisted like functions?*
**A:** No, they’re not hoisted. You must **declare a class before using it**, otherwise you’ll get a `ReferenceError`.

---

**Q3.** *Can we use arrow functions inside classes?*
**A:** Yes, but they’re usually used for **binding `this`** inside class methods (like in React components). Arrow functions become **instance properties**, not prototype methods.

---

**Q4.** *What happens if you call a class without `new`?*
**A:** It throws an error. Unlike constructor functions, **ES6 classes cannot be called without `new`** — this enforces correct usage.

---

**Q5.** *Can you extend built-in objects with ES6 classes?*
**A:** Yes. For example, you can do `class MyArray extends Array {}` — which was tricky to do using prototypes before ES6.

---

## Q7. `Destructuring, Rest, Spread → Clean, modern data handling`.

> “Destructuring, Rest, and Spread are modern JavaScript features that make data handling cleaner and more readable.

**Destructuring** allows us to extract values from arrays or objects and assign them to variables in a single line, instead of accessing each property individually.
Example:

```js
const user = { name: 'Vaibhav', age: 25 };
const { name, age } = user;
```

Now, `name` and `age` are directly available as variables.

**Rest** collects the remaining elements into an array or object. It’s used when we want to group multiple values together.
Example:

```js
const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]
```

**Spread**, on the other hand, does the opposite — it expands elements of an array or object. It’s often used for copying, merging, or passing multiple arguments.
Example:

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
```

This creates a new array `[1, 2, 3, 4]` without mutating the original one.

Together, these features help us write **cleaner, shorter, and more maintainable code.**”

---

### 💬 Possible Cross-Questions & Answers

**Q1. What’s the difference between Rest and Spread?**

> Rest *collects* multiple elements into one (used on the left-hand side of assignment).
> Spread *expands* elements out (used on the right-hand side, like in arrays or function calls).

---

**Q2. Can you use destructuring with default values?**

> Yes, destructuring supports defaults.
> Example:
>
> ```js
> const { name = 'Guest' } = {};
> console.log(name); // Guest
> ```

---

**Q3. What happens if you destructure a property that doesn’t exist?**

> It will return `undefined` unless you assign a default value.

---

**Q4. Can we use rest with objects?**

> Absolutely.
>
> ```js
> const { id, ...details } = { id: 1, name: 'Vaibhav', age: 25 };
> console.log(details); // { name: 'Vaibhav', age: 25 }
> ```


## Q8. `Array Methods: map, filter, reduce, find, some, every`.
**1. `map()`**

* **Definition:** The `map()` method creates a **new array** by applying a callback function to **each element** of the original array.
* **Key point:** It doesn’t modify the original array.
* **Example:**

  ```js
  const nums = [1, 2, 3];
  const doubled = nums.map(n => n * 2); // [2, 4, 6]
  ```

---

**2. `filter()`**

* **Definition:** The `filter()` method returns a **new array** containing **only the elements** that satisfy the given condition (return `true` in the callback).
* **Example:**

  ```js
  const nums = [1, 2, 3, 4];
  const even = nums.filter(n => n % 2 === 0); // [2, 4]
  ```

---

**3. `reduce()`**

* **Definition:** The `reduce()` method executes a callback function on each element, resulting in **a single output value** (like sum, average, etc.).
* **Example:**

  ```js
  const nums = [1, 2, 3, 4];
  const sum = nums.reduce((acc, curr) => acc + curr, 0); // 10
  ```

---

**4. `find()`**

* **Definition:** The `find()` method returns the **first element** in the array that satisfies the condition.
* **If no element matches, it returns `undefined`.**
* **Example:**

  ```js
  const nums = [3, 6, 9];
  const found = nums.find(n => n > 5); // 6
  ```

---

**5. `some()`**

* **Definition:** The `some()` method checks if **at least one element** passes the condition and returns a **boolean**.
* **Example:**

  ```js
  const nums = [1, 2, 3];
  const hasEven = nums.some(n => n % 2 === 0); // true
  ```

---

**6. `every()`**

* **Definition:** The `every()` method checks if **all elements** pass the condition and returns a **boolean**.
* **Example:**

  ```js
  const nums = [2, 4, 6];
  const allEven = nums.every(n => n % 2 === 0); // true
  ```

---

### 💬 Possible Cross-Questions & Ideal Answers

**Q1. What’s the difference between `map()` and `forEach()`?**

➡️ `map()` returns a **new array** with transformed values, whereas `forEach()` just **iterates** over elements and **returns undefined**.
Use `map()` when you need a transformed array, and `forEach()` for side effects (like logging or updating).

---

**Q2. Can `reduce()` be used to implement `map()` or `filter()`?**

➡️ Yes. Since `reduce()` is the most versatile, you can manually accumulate results to mimic both `map()` and `filter()`.
For example:

```js
const doubled = arr.reduce((acc, curr) => {
  acc.push(curr * 2);
  return acc;
}, []);
```

---

**Q3. What happens if `filter()` returns an empty array?**

➡️ It simply means **no elements matched the condition**, so it returns `[]`. No error is thrown.

---

**Q4. What’s the main difference between `find()` and `filter()`?**

➡️ `find()` returns **the first matching element**, while `filter()` returns **all matching elements** as an array.

---

**Q5. What are `some()` and `every()` mainly used for?**
➡️ They are primarily used for **validation checks**.

* `some()` → Check if **at least one** condition passes (e.g., any user is active).
* `every()` → Check if **all** conditions pass (e.g., all users are verified).

---

**Q6. Are these methods mutable? Do they change the original array?**
➡️ No, all these methods are **immutable** — they **do not modify** the original array. They return a **new array or value** instead.

---

## Q9. ` Equality & Coercion (== vs ===) → Type conversion traps`.

In JavaScript, both `==` and `===` are comparison operators, but they behave differently in how they handle type conversion.

* **`==` (Loose Equality)**: It compares two values **after performing type coercion**, meaning JavaScript will automatically convert one or both operands to a common type before comparing.
  Example:

  ```js
  '5' == 5  // true (string '5' is converted to number 5)
  false == 0 // true
  null == undefined // true
  ```

  This can lead to **unexpected results** due to implicit conversions.

* **`===` (Strict Equality)**: It checks both **value and type** without doing any type conversion.
  Example:

  ```js
  '5' === 5  // false (different types)
  false === 0 // false
  null === undefined // false
  ```

👉 So, **the best practice** is to always use `===` (strict equality) to avoid type conversion traps and make comparisons predictable and bug-free.

---

### 💡 **Example of Type Conversion Trap**

```js
0 == '0'      // true
0 == []       // true
'0' == []     // false
```

These look inconsistent, but that’s because `==` does complex internal coercion using the **Abstract Equality Comparison Algorithm**, which can make code harder to reason about.

---

### 🧠 **Summary Line (Perfect for Interview)**

> “`==` does type coercion before comparison, while `===` checks both type and value directly. To avoid unpredictable behavior, it’s recommended to use `===` unless there’s a deliberate reason to use loose equality.”

---

### 💬 **Possible Cross-Questions & Ideal Answers**

**❓ Q1. When would you ever use `==` instead of `===`?**

**✅ A:** Rarely, but `==` can be useful when checking for `null` or `undefined` together, like:

```js
if (value == null) {
  // true for both null and undefined
}
```

This is a concise way to check for both without explicitly writing:

```js
if (value === null || value === undefined)
```

---

**❓ Q2. Why does `null == undefined` return true but `null === undefined` return false?**

**✅ A:** Because under `==`, `null` and `undefined` are considered equal as part of the language spec — both represent “absence of value.” But under `===`, their types differ (`null` is an object, `undefined` is its own type), so it returns false.

---

**❓ Q3. What happens when we compare objects using `==` or `===`?**

**✅ A:** Both `==` and `===` check for **reference equality** in the case of objects. That means two different objects with identical content are **not equal**:

```js
{ a: 1 } == { a: 1 } // false
{ a: 1 } === { a: 1 } // false
```

Only if they reference the **same object** in memory will they be equal.

---

**❓ Q4. How does JavaScript internally handle coercion with `==`?**

**✅ A:** JavaScript follows the **Abstract Equality Comparison Algorithm** — it performs a series of steps to convert operands to comparable types (e.g., strings to numbers, booleans to numbers, objects to primitives). This complexity is why using `===` is preferred.

---

Here’s a **clear, concise, and interview-style** answer — along with **possible cross-questions and responses** 👇

---

## Q10. `Deep vs Shallow Copy → Reference types & immutability`.

A **shallow copy** creates a **new object**, but it only **copies the references** of nested objects — not the actual nested objects themselves.
So, if the original object has references (like arrays or other objects), both the original and the copy will still **point to the same inner objects**.
Hence, modifying a nested property in one affects the other.

A **deep copy**, on the other hand, **recursively copies all nested objects**, creating completely **independent clones**.
So, changes in one object don’t affect the other at any level.

When it comes to **immutability**, understanding this difference is crucial.
Immutable data structures don’t change their original value — instead, they create new copies with the updated data, which conceptually aligns with the idea of deep copies.
In contrast, mutable structures can easily lead to side effects, especially if shallow copies are used unintentionally.

---

### 💡 **Example (JavaScript)**

```javascript
let obj1 = { a: 1, b: { c: 2 } };

// Shallow copy
let obj2 = Object.assign({}, obj1);
obj2.b.c = 10;  // Changes obj1.b.c as well

// Deep copy
let obj3 = structuredClone(obj1);
obj3.b.c = 20;  // Does NOT affect obj1.b.c
```

---

### 🧠 **Possible Cross-Questions**

#### 1. **Q:** How can you create a deep copy in JavaScript?

There are several ways:

* Using `structuredClone()` (modern and preferred)
* Using `JSON.parse(JSON.stringify(obj))` (simple but limited — it doesn’t handle functions, dates, or undefined)
* Using libraries like **Lodash** (`_.cloneDeep(obj)`)

---

#### 2. **Q:** What happens if you modify a nested object in a shallow copy?

Both the original and copied object will reflect the change because the nested object reference is shared between them.

---

#### 3. **Q:** Is a shallow copy the same as a reference copy?

Not exactly.
A **reference copy** means both variables point to the **exact same object**.
A **shallow copy** creates a new top-level object but shares nested references.
So, shallow copy ≠ reference copy, but both can lead to shared data issues.

---

#### 4. **Q:** How does immutability help here?

Immutability ensures that instead of changing existing data, you create a **new copy** with the modification — avoiding accidental side effects and making debugging and state management (like in React or Redux) much safer.

---

#### 5. **Q:** Can primitives be shallow or deep copied?

No. Primitives (like numbers, strings, booleans) are **copied by value**, not by reference.
So the concept of shallow or deep copy only applies to **reference types** like objects, arrays, and functions.

---

## Q11. `Map, Set, WeakMap, WeakSet → Memory-safe data structures`.

**"In JavaScript, `Map`, `Set`, `WeakMap`, and `WeakSet` are memory-safe data structures that help manage data and memory efficiently."**

---

**1. Map**

* Stores **key–value pairs** where keys can be of **any type** (even objects).
* Maintains **insertion order**.
* Example:

  ```js
  const user = { id: 1 };
  const userData = new Map();
  userData.set(user, { name: "Vaibhav", role: "Dev" });
  console.log(userData.get(user)); // { name: "Vaibhav", role: "Dev" }
  ```
* Use when you need dynamic key-value pairs or non-string keys.

---

**2. Set**

* Stores **unique values only**, no duplicates.
* Example:

  ```js
  const numbers = [1, 2, 2, 3];
  const uniqueNumbers = new Set(numbers);
  console.log(uniqueNumbers); // Set(3) {1, 2, 3}
  ```
* Great for removing duplicates or checking membership efficiently.

---

**3. WeakMap**

* Similar to Map, but **keys must be objects** and are **weakly referenced**, allowing **garbage collection**.
* Example:

  ```js
  const user = { id: 1 };
  const privateData = new WeakMap();
  privateData.set(user, { token: "abc123" });
  // If 'user' is deleted elsewhere, it’s automatically garbage-collected
  ```
* Used for storing private or temporary data linked to objects safely.

---

**4. WeakSet**

* Stores **only objects**, also **weakly referenced**.
* Example:

  ```js
  let obj = { name: "Test" };
  const visited = new WeakSet();
  visited.add(obj);
  // If 'obj' is no longer referenced, it's automatically removed
  ```
* Ideal for tracking object states without risking memory leaks.

---

### 🧠 **Memory-Safety Summary**

* `Map` & `Set`: Strong references → you must manually clean them up.
* `WeakMap` & `WeakSet`: Weak references → cleaned up automatically when objects are no longer used.

---

### 🔁 **Common Cross-Questions**

**Q1:** Why can’t we iterate over WeakMap or WeakSet?

👉 Because keys are weakly held — they can disappear anytime due to garbage collection. Iteration would be unreliable.

**Q2:** When should I prefer Map over Object?

👉 Use Map when you need keys of any type, or when you frequently add/remove keys.

**Q3:** Real-world use of WeakMap?

👉 Storing metadata for DOM elements without preventing them from being garbage collected.

---

## Q12. `Event Loop & Microtasks → Behind-the-scenes async magic`

> The **Event Loop** in JavaScript is the mechanism that allows asynchronous, non-blocking behavior — even though JavaScript itself is **single-threaded**.
>
> Here's how it works behind the scenes:
>
> When JavaScript runs, it executes code inside the **call stack** (synchronous tasks). If it encounters async operations like `setTimeout`, `fetch`, or Promises, those are **delegated (hands over) to the Web APIs** (in browsers) or **libuv** (in Node.js). Once these async operations finish, their callbacks are moved to **task queues** — either the **macro-task queue** or the **micro-task queue**.
>
> The **Event Loop** constantly checks:
>
> 1. Is the **call stack empty**?
> 2. If yes, it first processes **all microtasks** (like `.then()` callbacks or `process.nextTick()` in Node).
> 3. Then, it picks **one macro-task** (like `setTimeout`, `setInterval`, or I/O callbacks) from the macro-task queue.
>
> This cycle repeats indefinitely — that’s the “loop.”
>
> In short:
>
> * **Microtasks** → high priority (Promises, `queueMicrotask`, `process.nextTick`)
> * **Macrotasks** → lower priority (Timers, DOM events, I/O)
>
> This is what enables JavaScript to handle asynchronous operations efficiently without blocking execution.

---

### 💬 **Possible Cross-Questions & Ideal Answers**

**Q1: What’s the difference between a macro-task and a micro-task?**

> **A:** Macro-tasks are scheduled by APIs like `setTimeout`, `setInterval`, or `setImmediate`. They execute one at a time between rendering frames.
> Micro-tasks, like Promise callbacks, `queueMicrotask()`, or `process.nextTick()` (Node), run *immediately after the current execution context ends* — and **before** any new macro-task starts.
>
> So micro-tasks always run **before** the next macro-task.

---

**Q2: What happens if a micro-task schedules another micro-task?**

> **A:** It goes to the same micro-task queue and runs **before** moving on to the next macro-task.
> This means if micro-tasks keep adding more micro-tasks (like in a while loop), they can block the Event Loop and delay rendering or other async tasks.

---

**Q3: Can you give a simple example showing the Event Loop in action?**

> **A:** Sure:
>
> ```js
> console.log("Start");
> setTimeout(() => console.log("Timeout"), 0);
> Promise.resolve().then(() => console.log("Promise"));
> console.log("End");
> ```
>
> **Output:**
>
> ```
> Start
> End
> Promise
> Timeout
> ```
>
> The Promise’s `.then()` runs first because it’s a **micro-task**, while `setTimeout` is a **macro-task**.

---

**Q4: How is the Event Loop different in Node.js vs Browser?**

> **A:** The concept is the same, but Node.js uses **libuv**, which has multiple **phases** (timers, I/O, check, close callbacks, etc.), and includes `process.nextTick()` and `setImmediate()`.
> Browsers rely on **Web APIs** and **task queues**.
>
> In Node, `process.nextTick()` runs **before** microtasks like Promises, making it even higher priority.

---

**Q5: What would happen if we block the Event Loop with heavy computation?**

> **A:** It freezes everything — no UI updates, no async callbacks, nothing. That’s why we use **Web Workers** or **background threads** for heavy tasks to keep the Event Loop free.

---



**Q6: What is `process.nextTick()`?**

`process.nextTick()` is a **special function in Node.js** that lets you schedule a callback to run **immediately after the current operation** on the event loop — even **before any microtasks** like Promises.

Example:

```js
console.log("Start");

process.nextTick(() => {
  console.log("Next tick");
});

Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```

**Output:**

```
Start
End
Next tick
Promise
```

🧠 **Explanation:**

* `process.nextTick()` runs **before** any microtasks (like Promises).
* So it’s like a **super high-priority microtask** that runs right after the current stack is empty, but before the event loop continues to the next phase.

---

**Q7: What is `libuv`?**

`libuv` is a **C-based library** used internally by Node.js to handle all **asynchronous I/O operations**, such as file reading, network calls, DNS lookups, etc.

It provides:

* The **Event Loop** mechanism
* **Thread pool** for heavy I/O tasks
* **Timers**, **networking**, and **filesystem** abstractions

Basically, it’s the **engine** that powers Node’s async behavior.

---

### 🧩 **How `process.nextTick()` fits with `libuv`**

* The **Event Loop** in Node.js (powered by `libuv`) has several **phases**:

  1. **Timers** (setTimeout, setInterval)
  2. **I/O callbacks**
  3. **Idle/Prepare**
  4. **Poll** (waiting for new I/O events)
  5. **Check** (setImmediate)
  6. **Close callbacks**

* Between each phase, Node checks if there are any **microtasks** or **next tick callbacks** to run.

👉 **Important difference:**

* `process.nextTick()` callbacks run **immediately after the current operation**, before the event loop moves to the next phase.
* Promises and `queueMicrotask()` run as **microtasks** after that.
* Tasks like `setImmediate()` or `setTimeout()` are handled by **libuv’s timers and check phases** and run later.

---

### 🔥 **In simple terms:**

* `libuv` = The **engine** that runs Node’s event loop and async tasks.
* `process.nextTick()` = A **shortcut hook** that tells Node:

  > “Before you continue to the next phase of the event loop, please run this callback first.”

---


## Q13. `Promises & Chaining → Sequential async handling`.

A **Promise** in JavaScript represents the eventual completion or failure of an asynchronous operation.

It can be in one of three states:

1. **Pending** – the operation hasn’t completed yet.
2. **Fulfilled (Resolved)** – the operation completed successfully.
3. **Rejected** – the operation failed.

When a promise is fulfilled, the `.then()` method handles the success result.
If it’s rejected, the `.catch()` method handles the error.

---

### 🔗 **Promise Chaining**

**Promise chaining** means linking multiple asynchronous operations so that each one runs only after the previous one completes.
Each `.then()` returns a new promise, allowing the next `.then()` to wait for it.

Example:

```javascript
doTask1()
  .then(result1 => doTask2(result1))
  .then(result2 => doTask3(result2))
  .then(finalResult => console.log('Done:', finalResult))
  .catch(error => console.error('Error:', error));
```

Here, each task executes **sequentially**, and if any step fails, control moves directly to the `.catch()` block.

---

### 💬 **Possible Cross-Questions**

**Q1. Why do we use promise chaining?**
To handle multiple async operations in sequence, avoiding deeply nested callbacks (callback hell) and keeping code clean and readable.

---

**Q2. What happens if one promise in the chain fails?**
The chain stops executing further `.then()` blocks, and control goes directly to the `.catch()` block.

---

**Q3. How can you handle both success and failure in the same chain?**
By using `.then()` for success and `.catch()` for failure, or by passing two callbacks to `.then(success, failure)` — though using `.catch()` is preferred for cleaner code.

---

**Q4. Is promise chaining synchronous or asynchronous?**
It’s **asynchronous**, but chaining ensures they run **in sequence**, meaning each step waits for the previous one to finish.

---

### 🔑 **In short:**

> A **Promise** represents the eventual success or failure of an async operation, and **promise chaining** lets us handle multiple async tasks one after another in a clean, sequential way.

---

## Q14. `Async/Await Patterns → Cleaner async flow`.

> **Async/Await** is a cleaner and more readable way to handle asynchronous operations in JavaScript compared to traditional callbacks or promise chaining.
>
> It allows us to write asynchronous code that looks and behaves more like synchronous code, which makes it easier to understand, debug, and maintain.
>
> Essentially, the `async` keyword defines a function that always returns a promise, and the `await` keyword pauses the execution of that function until the awaited promise resolves or rejects.
>
> This pattern helps in reducing callback hell and provides better error handling using simple `try...catch` blocks.

---

### 💡 **Example**

```javascript
// Using Promises
fetchData()
  .then((data) => process(data))
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

// Using Async/Await
async function handleData() {
  try {
    const data = await fetchData();
    const result = await process(data);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
```

> ✅ The second version is more readable, sequential, and easier to debug.

---

### ⚡ **Key Benefits**

* **Improved Readability:** Linear code flow (top to bottom).
* **Simplified Error Handling:** `try...catch` works naturally.
* **Easier Debugging:** Stack traces are clearer.
* **Better Maintainability:** Reduces nested `.then()` chains.

---

### 🧠 **Possible Cross-Questions + Model Answers**

**Q1.** What happens if you don’t use `await` inside an `async` function?

> The function still returns a promise, but since we didn’t `await`, the promise may resolve later, and the code after it won’t wait for completion. Essentially, execution continues without waiting for that async operation.

---

**Q2.** Can we use `await` outside of an `async` function?

> Traditionally, no — `await` can only be used inside an `async` function. However, in modern environments (like Node.js 14+ and ES2022 modules), **top-level await** is now supported, allowing its use directly in modules.

---

**Q3.** How does error handling differ between Promises and async/await?

> With Promises, you handle errors using `.catch()`. With async/await, you can use `try...catch`, which makes it more consistent with synchronous code and easier to manage multiple async calls.

---

**Q4.** What’s the difference between `Promise.all()` and multiple `await` calls?

> `Promise.all()` runs promises **concurrently** and waits for all to resolve, which is faster for independent tasks.
> Multiple `await` calls run **sequentially**, which is useful when one result depends on the previous one.

---

**Q5.** What happens if an awaited promise rejects and there’s no try-catch block?

> The function will return a **rejected promise**, and the error will bubble up. If not handled, it may cause an unhandled promise rejection warning.

---


## Q14. `Fetch API & AbortController → Modern data fetching`.

The **Fetch API** is a modern way to make HTTP requests in JavaScript. It provides a cleaner and more powerful alternative to older methods like `XMLHttpRequest`.
It returns **Promises**, which makes it easy to work with asynchronous data using `then`, `catch`, or `async/await`.

Here’s a quick example:

```js
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) throw new Error('Network error');
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

One limitation of Fetch used to be that once a request was sent, it couldn’t be **canceled**. That’s where the **AbortController** comes in — it’s a built-in API that allows us to **abort ongoing fetch requests**, which is especially useful in cases like component unmounting in React or when the user navigates away before the request finishes.

Here’s how it works:

```js
const controller = new AbortController();
const { signal } = controller;

fetch('https://api.example.com/data', { signal })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error(err);
    }
  });

// Abort the request
controller.abort();
```

So together, **Fetch API** and **AbortController** provide a modern, promise-based, and controllable approach to data fetching in JavaScript.

---

### 💬 **Possible Cross-Questions & Answers:**

**Q1. What are the advantages of using Fetch over XMLHttpRequest?**

* Fetch uses Promises — no more callback hell.
* The syntax is cleaner and more readable.
* It supports streaming responses and works seamlessly with `async/await`.
* Easier error handling and integration with modern APIs.

---

**Q2. How do you handle errors in Fetch API?**
Fetch only rejects on **network errors**, not on HTTP errors like 404 or 500.
So you must check the `response.ok` property:

```js
if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
```

---

**Q3. When would you use AbortController in real projects?**

* When a user leaves a page or cancels an action before data loads.
* In React, when a component unmounts before a fetch completes.
* When implementing debouncing or search suggestions to avoid unnecessary network calls.

---

**Q4. Can you reuse the same AbortController for multiple fetch requests?**
No — one **AbortController** controls only the requests linked to its **signal**.
If you need to abort multiple requests together, you can pass the same signal to all of them intentionally.

---

**Q5. Is Fetch supported in all browsers?**
It’s widely supported in modern browsers, but for older ones (like IE), we might need a polyfill such as `whatwg-fetch`.

---

## Q15. `CORS Basics → Understanding cross-origin rules`.

Here’s how you can **explain CORS (Cross-Origin Resource Sharing)** clearly and confidently in an interview — with follow-up (cross-question) answers you can give right away 👇

---

### 🎯 **Main Answer (CORS Basics)**

> CORS stands for **Cross-Origin Resource Sharing**.
> It’s a **security mechanism implemented by browsers** to control how resources like APIs, images, or fonts can be requested from a domain different from the one the web page is served from.
> In simpler terms, it **prevents malicious websites** from making unauthorized requests to another domain on behalf of a user.

By default, browsers follow the **Same-Origin Policy (SOP)** — which means a web page can only access resources from the same origin (same protocol, domain, and port).
CORS allows controlled relaxation of this rule — the **server explicitly specifies which origins are allowed** to access its resources using specific HTTP headers.

The main headers involved are:

* `Access-Control-Allow-Origin`: Specifies which origin(s) can access the resource.
* `Access-Control-Allow-Methods`: Lists allowed HTTP methods (GET, POST, etc.).
* `Access-Control-Allow-Headers`: Lists allowed custom headers.
* `Access-Control-Allow-Credentials`: Indicates if cookies or authorization headers can be sent.

When the browser detects a cross-origin request that might change data (like POST, PUT, DELETE), it sends a **preflight request** using the `OPTIONS` method. The server must respond with appropriate CORS headers for the actual request to proceed.

---

### 💬 **Example (to make it real)**

If your frontend runs on `http://localhost:3000` and your backend API is at `https://api.example.com`, your browser will block requests unless the backend includes:

```http
Access-Control-Allow-Origin: http://localhost:3000
```

in the response header.

---

### ⚡ **Possible Cross-Questions & Crisp Answers**

**Q1. What is the difference between Same-Origin Policy and CORS?**

> Same-Origin Policy is the *restriction*.
> CORS is the *mechanism* that allows controlled relaxation of that restriction.

---

**Q2. Who enforces CORS — the browser or the server?**

> CORS is enforced by the **browser**, not the server.
> The server just provides the headers indicating permission — the browser decides whether to allow or block the request.

---

**Q3. What is a preflight request and when does it occur?**

> A preflight request is an `OPTIONS` request sent by the browser before the actual request.
> It happens for requests that are not simple (like those using custom headers, methods other than GET/POST, or sending credentials).
> It checks with the server if the actual request is safe to send.

---

**Q4. What is a simple request in CORS?**

> A simple request is one that meets all these conditions:
>
> * Method is GET, POST, or HEAD
> * Uses only simple headers like `Accept`, `Content-Type`, or `Origin`
> * Content-Type is `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`
>   These don’t trigger a preflight.

---

**Q5. How can you handle CORS errors during development?**

> * Configure the backend to send proper CORS headers.
> * Use a proxy (like setting up `proxy` in React or using `cors` middleware in Express).
> * Avoid disabling CORS in production — it’s a security risk.

---

**Q6. Is CORS required for server-to-server communication?**

> No. CORS is a browser concept.
> Server-to-server requests (like from a backend service) are not restricted by CORS.

---

**Q7.  CORS In Express APP**

### ⚙️ **Example**

If you want to allow only your frontend (say, `https://frontend.example.com`), you can configure it like this:

```js
const cors = require('cors');

app.use(cors({
  origin: 'https://frontend.example.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
```

This ensures only that origin can make cross-origin requests to your API, and credentials (like cookies or auth headers) can be sent.

---


**Q8. What does `app.use()` do here?**

> `app.use()` mounts middleware in Express. It tells Express to use the `cors` middleware for every incoming request, before routing it.

---

**Q9. What’s the purpose of the `origin` option in `cors()`?**

> It defines which domain(s) are allowed to access the API.
> It can be a string, an array, or even a function for dynamic control.

---

**10. How can we allow multiple origins?**

> You can pass an array of origins or use a function:

```js
app.use(cors({
  origin: (origin, callback) => {
    const allowed = ['https://site1.com', 'https://site2.com'];
    if (!origin || allowed.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
```

---

**Q11. What happens if you don’t enable CORS in your backend?**

> The browser will block requests made from a different origin — you’ll see an error like
> *“Access to fetch at ‘...’ from origin ‘...’ has been blocked by CORS policy.”*

---

**Q12. Can we use `cors()` selectively for specific routes?**

> Yes. Instead of applying it globally, you can use it for certain routes only:

```js
app.get('/public', cors(), (req, res) => {
  res.send('This route allows CORS');
});
```

---

**Q13. Is CORS a server-side or client-side configuration?**

> It’s configured on the **server-side**, but enforced by the **browser**.

---





