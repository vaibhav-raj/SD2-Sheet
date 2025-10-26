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
