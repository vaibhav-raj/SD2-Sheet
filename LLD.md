| Sl.No | LLD Questions |
|-------|----------------|
| 01.   | [Understanding SOLID Principles in Node.js](#understanding-solid-principles-in-nodejs) |


## Q. ***Understanding SOLID Principles in Node.js: A Comprehensive Guide with Practical Examples***

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

