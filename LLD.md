| Sl.No | LLD Questions                                      |
|-------|-----------------------------------------------------|
| 01.   | [Understanding SOLID Principles in Node.js](#understanding-solid-principles-in-nodejs) |
| 02.   | [Behavioral Design Patterns: Strategy Design Pattern in Node.js](#behavioral-design-patterns-strategy-design-pattern-in-nodejs) |


## Q. ***Understanding SOLID Principles in Node.js: A Comprehensive Guide with Practical Examples***
Behavioral Design Patterns: Strategy Design Pattern in Node.js
### Introduction:
SOLID principles are a set of five design principles in object-oriented programming that aim to make software more understandable, flexible, and maintainable. In the context of Node.js, adhering to SOLID principles becomes crucial to building scalable and maintainable applications. In this article, we will delve into each SOLID principle—Single Responsibility Principle (SRP), Open/Closed Principle (OCP), Liskov Substitution Principle (LSP), Interface Segregation Principle (ISP), and Dependency Inversion Principle (DIP). We'll provide practical examples in Node.js and discuss how these principles contribute to writing cleaner, more robust code.

---

### 1. Single Responsibility Principle (SRP):
The SRP states that a class should have only one reason to change, meaning it should only have one responsibility. In Node.js, this can be applied by creating modules or classes with a single, well-defined purpose.

**Example:**

*Before SRP*

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  saveToDatabase() {
    // Save user to the database
  }

  sendEmail() {
    // Send a welcome email
  }
}
```

*After SRP*

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  saveToDatabase(user) {
    // Save user to the database
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    // Send a welcome email
  }
}
```

### 2. Open/Closed Principle (OCP):
The OCP states that a class should be open for extension but closed for modification. In Node.js, this can be achieved through the use of interfaces and abstractions.

**Example:**

*Before OCP*

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  calculateCircleArea(circle) {
    return Math.PI * Math.pow(circle.radius, 2);
  }
}
```

*After OCP*

```javascript
class Shape {
  calculateArea() {
    // To be implemented by subclasses
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
```

### 3. Liskov Substitution Principle (LSP):
The LSP states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. In Node.js, this involves ensuring that subclasses adhere to the contract established by their parent class.

**Example:**

*Before LSP*

```javascript
class Bird {
  fly() {
    // Implement flying behavior
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly");
  }
}
```

*After LSP*

```javascript
class Bird {
  fly() {
    // Implement flying behavior
  }
}

class Penguin extends Bird {
  // No fly method, as penguins can't fly
}
```

### 4. Interface Segregation Principle (ISP):
The ISP states that a class should not be forced to implement interfaces it does not use. In Node.js, this can be achieved by breaking down large interfaces into smaller, more specific ones.

**Example:**

*Before ISP*

```javascript
class Worker {
  work() {
    // Implement work behavior
  }

  eat() {
    // Implement eat behavior
  }
}
```

*After ISP*

```javascript
class Workable {
  work() {
    // Implement work behavior
  }
}

class Eatable {
  eat() {
    // Implement eat behavior
  }
}

class Worker implements Workable, Eatable {
  // Now implements only what it needs
}
```

### 5. Dependency Inversion Principle (DIP):
The DIP states that high-level modules should not depend on low-level modules but rather both should depend on abstractions. In Node.js, this often involves using dependency injection to invert the flow of control.

**Example:**

*Before DIP*

```javascript
class LightBulb {
  turnOn() {
    // Turn on the light bulb
  }
}

class Switch {
  constructor(bulb) {
    this.bulb = bulb;
  }

  operate() {
    this.bulb.turnOn();
  }
}
```

*After DIP*

```javascript
class Switchable {
  operate();
}

class LightBulb implements Switchable {
  turnOn() {
    // Turn on the light bulb
  }

  operate() {
    this.turnOn();
  }
}

class Switch {
  constructor(device) {
    this.device = device;
  }

  operate() {
    this.device.operate();
  }
}
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Behavioral Design Patterns: Strategy Design Pattern in Node.js***

The Strategy Design Pattern is a behavioral design pattern that allows you to define a family of algorithms, encapsulate each one, and make them interchangeable. In essence, it enables an algorithm to be selected at runtime. This pattern is particularly useful when you have multiple ways to perform an operation and you want to decouple the choice of the algorithm from the client using it.

### System Design: Strategy Design Pattern in Node.js

#### Key Components
1. **Context**: Maintains a reference to a Strategy object and is configured with a ConcreteStrategy object.
2. **Strategy**: An interface common to all supported algorithms. Context uses this interface to call the algorithm defined by a ConcreteStrategy.
3. **ConcreteStrategy**: Implements the Strategy interface to provide a specific algorithm.

### Implementation in Node.js

1. **Define the Strategy Interface**: In JavaScript, we typically define this as an abstract class or a plain object with required method signatures.

2. **Create Concrete Strategies**: Implement different algorithms as classes or objects adhering to the Strategy interface.

3. **Context Class**: Maintains a reference to a strategy object and uses it to perform the operation.

#### Example

Let's consider an example where we have different strategies for processing payments (e.g., PayPal, Stripe, Bitcoin).

**1. Strategy Interface**

```javascript
// paymentStrategy.js
class PaymentStrategy {
  pay(amount) {
    throw new Error("This method should be overridden");
  }
}

module.exports = PaymentStrategy;
```

**2. Concrete Strategies**

```javascript
// paypalStrategy.js
const PaymentStrategy = require('./paymentStrategy');

class PayPalStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(`Processing payment of $${amount} through PayPal.`);
    // PayPal-specific logic
  }
}

module.exports = PayPalStrategy;

// stripeStrategy.js
const PaymentStrategy = require('./paymentStrategy');

class StripeStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(`Processing payment of $${amount} through Stripe.`);
    // Stripe-specific logic
  }
}

module.exports = StripeStrategy;

// bitcoinStrategy.js
const PaymentStrategy = require('./paymentStrategy');

class BitcoinStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(`Processing payment of $${amount} through Bitcoin.`);
    // Bitcoin-specific logic
  }
}

module.exports = BitcoinStrategy;
```

**3. Context Class**

```javascript
// paymentContext.js
class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy(amount) {
    this.strategy.pay(amount);
  }
}

module.exports = PaymentContext;
```

**4. Usage**

```javascript
// index.js
const PaymentContext = require('./paymentContext');
const PayPalStrategy = require('./paypalStrategy');
const StripeStrategy = require('./stripeStrategy');
const BitcoinStrategy = require('./bitcoinStrategy');

const paymentContext = new PaymentContext(new PayPalStrategy());
paymentContext.executeStrategy(100); // Processing payment of $100 through PayPal.

paymentContext.setStrategy(new StripeStrategy());
paymentContext.executeStrategy(200); // Processing payment of $200 through Stripe.

paymentContext.setStrategy(new BitcoinStrategy());
paymentContext.executeStrategy(300); // Processing payment of $300 through Bitcoin.
```

### When to Use the Strategy Pattern

1. **Multiple Algorithms**: When you have different algorithms for a specific task and you need to switch between them dynamically.
2. **Runtime Decisions**: When the algorithm to be executed should be chosen at runtime.
3. **Avoids Conditional Statements**: When you want to avoid complex conditional statements for selecting different behaviors.
4. **Open/Closed Principle**: When you want your code to adhere to the open/closed principle by allowing algorithms to be added or changed without modifying existing code.

### Benefits
- **Flexibility**: Strategies can be swapped easily.
- **Encapsulation**: Each algorithm is encapsulated in a separate class.
- **Maintainability**: Reduces conditional logic and makes the codebase easier to maintain.

### Drawbacks
- **Overhead**: Introducing multiple classes or objects can add complexity.
- **Communication Overhead**: The context must be aware of different strategies, which might lead to additional communication overhead.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
