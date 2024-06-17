| Sl.No | LLD Questions                                      |
|-------|-----------------------------------------------------|
| 01.   | [Understanding SOLID Principles](#understanding-solid-principles) |
| 02.   | [Behavioral Design Patterns: Strategy Design Pattern](#behavioral-design-patterns-strategy-design-pattern) |
| 03.   | [Behavioral Design Patterns: Observer Design Pattern](#behavioral-design-patterns-observer-design-pattern) |
| 04.   | [Behavioral Design Patterns: State Design Pattern](#behavioral-design-patterns-state-design-pattern) |

<a id="understanding-solid-principles"></a>
## Q. ***Understanding SOLID Principles***

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

<a id="behavioral-design-patterns-strategy-design-pattern"></a>
## Q. ***Behavioral Design Patterns: Strategy Design Pattern***

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

<a id="behavioral-design-patterns-observer-design-pattern"></a>
## Q. ***Behavioral Design Patterns: Observer Design Pattern***

System design refers to the process of designing the architecture, components, modules, interfaces, and data for a system to meet specified requirements. It involves making decisions about how the system will behave, how its components will interact, and how it will be implemented and deployed.

The Observer Design Pattern is a behavioral design pattern where an object (known as the subject) maintains a list of dependents (observers) that are notified automatically of any state changes, usually by calling one of their methods. This pattern is useful when you need to maintain consistency between related objects without making them tightly coupled.

### Observer Design Pattern in Node.js

In Node.js, the Observer pattern can be implemented using either native EventEmitter or custom event emitters. Here’s a basic example using native EventEmitter:

```javascript
const EventEmitter = require('events');

// Define the WeatherStation class (Subject)
class WeatherStation extends EventEmitter {
  constructor() {
    super();
    this.weatherData = null;
  }

  setWeatherData(data) {
    this.weatherData = data;
    this.notifyObservers();
  }

  notifyObservers() {
    this.emit('weatherUpdate', this.weatherData);
  }
}

// Define the DisplayDevice class (Observer)
class DisplayDevice {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received weather update: ${data}`);
  }
}

// Create an instance of WeatherStation
const weatherStation = new WeatherStation();

// Create instances of DisplayDevice (observers)
const phoneDisplay = new DisplayDevice('Phone Display');
const desktopDisplay = new DisplayDevice('Desktop Display');
const tabletDisplay = new DisplayDevice('Tablet Display');

// Subscribe the observers to the weather updates
weatherStation.on('weatherUpdate', (data) => phoneDisplay.update(data));
weatherStation.on('weatherUpdate', (data) => desktopDisplay.update(data));
weatherStation.on('weatherUpdate', (data) => tabletDisplay.update(data));

// Simulate a weather update
weatherStation.setWeatherData('Sunny, 25°C');

// Simulate another weather update
weatherStation.setWeatherData('Rainy, 18°C');
```

### When to Use the Observer Pattern

You should consider using the Observer pattern in Node.js when:

1. **Loose coupling is needed:** You want to ensure that components (observers) are not tightly coupled to the subject. Observers can be added or removed without affecting the subject or other observers.
   
2. **One-to-many dependency:** When changes to one object (subject) require changes to other objects (observers) and you don't want to hardwire these relationships.
   
3. **Event-driven architecture:** Node.js is inherently event-driven, making it a natural fit for implementing the Observer pattern using events and event emitters.

4. **Dynamic relationships:** You need a way to dynamically subscribe and unsubscribe observers from receiving updates based on certain events or conditions.

In summary, the Observer pattern is useful in Node.js applications where you need to maintain loosely coupled relationships between objects and ensure that changes in one part of the system can trigger updates in other parts without directly coupling them together.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

<a id="behavioral-design-patterns-state-design-pattern"></a>
## Q. ***Behavioral Design Patterns: State Design Pattern***

The State Design Pattern is a behavioral design pattern that allows an object to change its behavior when its internal state changes. It helps an object to alter its behavior when its internal state transitions, making the object appear to change its class.

This pattern is particularly useful when you have an object that can be in one of several states, and its behavior changes based on the state it is in.

### When to Use the State Design Pattern

1. **Complex State Logic:** When an object has complex state-dependent behavior and you want to organize the code in a way that makes it easy to manage and extend.
2. **State-Dependent Methods:** When the methods of an object should behave differently depending on the object's state.
3. **Encapsulation of State:** When you want to encapsulate the state and state-specific behavior within state objects.

### Example: Vending Machine

Let's create a simple vending machine using the State Design Pattern in Node.js. The vending machine will have the following states:
- NoCoinInsertedState
- HasCoinState
- DispenseState
- SoldOutState

Each state will handle the behavior of the vending machine differently.

#### Step 1: Define the States

```javascript
// Abstract state class
class State {
  insertCoin() {}
  ejectCoin() {}
  selectProduct() {}
  dispense() {}
}

// NoCoinInsertedState class
class NoCoinInsertedState extends State {
  constructor(vendingMachine) {
    super();
    this.vendingMachine = vendingMachine;
  }

  insertCoin() {
    console.log('Coin inserted');
    this.vendingMachine.setState(this.vendingMachine.getHasCoinState());
  }

  ejectCoin() {
    console.log('No coin to eject');
  }

  selectProduct() {
    console.log('Insert coin first');
  }

  dispense() {
    console.log('Insert coin first');
  }
}

// HasCoinState class
class HasCoinState extends State {
  constructor(vendingMachine) {
    super();
    this.vendingMachine = vendingMachine;
  }

  insertCoin() {
    console.log('Coin already inserted');
  }

  ejectCoin() {
    console.log('Coin ejected');
    this.vendingMachine.setState(this.vendingMachine.getNoCoinInsertedState());
  }

  selectProduct() {
    console.log('Product selected');
    this.vendingMachine.setState(this.vendingMachine.getDispenseState());
  }

  dispense() {
    console.log('Select product first');
  }
}

// DispenseState class
class DispenseState extends State {
  constructor(vendingMachine) {
    super();
    this.vendingMachine = vendingMachine;
  }

  insertCoin() {
    console.log('Please wait, dispensing product');
  }

  ejectCoin() {
    console.log('Cannot eject, already dispensing product');
  }

  selectProduct() {
    console.log('Already dispensing product');
  }

  dispense() {
    this.vendingMachine.releaseProduct();
    if (this.vendingMachine.getCount() > 0) {
      this.vendingMachine.setState(this.vendingMachine.getNoCoinInsertedState());
    } else {
      console.log('Out of products');
      this.vendingMachine.setState(this.vendingMachine.getSoldOutState());
    }
  }
}

// SoldOutState class
class SoldOutState extends State {
  constructor(vendingMachine) {
    super();
    this.vendingMachine = vendingMachine;
  }

  insertCoin() {
    console.log('Out of products');
  }

  ejectCoin() {
    console.log('No coin to eject');
  }

  selectProduct() {
    console.log('Out of products');
  }

  dispense() {
    console.log('Out of products');
  }
}
```

#### Step 2: Define the Vending Machine

```javascript
class VendingMachine {
  constructor(productCount) {
    this.soldOutState = new SoldOutState(this);
    this.noCoinInsertedState = new NoCoinInsertedState(this);
    this.hasCoinState = new HasCoinState(this);
    this.dispenseState = new DispenseState(this);
    
    this.count = productCount;

    if (productCount > 0) {
      this.state = this.noCoinInsertedState;
    } else {
      this.state = this.soldOutState;
    }
  }

  setState(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  getSoldOutState() {
    return this.soldOutState;
  }

  getNoCoinInsertedState() {
    return this.noCoinInsertedState;
  }

  getHasCoinState() {
    return this.hasCoinState;
  }

  getDispenseState() {
    return this.dispenseState;
  }

  getCount() {
    return this.count;
  }

  insertCoin() {
    this.state.insertCoin();
  }

  ejectCoin() {
    this.state.ejectCoin();
  }

  selectProduct() {
    this.state.selectProduct();
  }

  dispense() {
    this.state.dispense();
  }

  releaseProduct() {
    if (this.count > 0) {
      console.log('Releasing product');
      this.count -= 1;
    }
  }
}

// Usage
const vendingMachine = new VendingMachine(5);

vendingMachine.insertCoin();
vendingMachine.selectProduct();
vendingMachine.dispense();

vendingMachine.insertCoin();
vendingMachine.ejectCoin();
vendingMachine.insertCoin();
vendingMachine.selectProduct();
vendingMachine.dispense();
```

### Explanation

1. **State Classes:** Each state class (`NoCoinInsertedState`, `HasCoinState`, `DispenseState`, and `SoldOutState`) extends the abstract `State` class and overrides its methods to implement state-specific behavior.
2. **VendingMachine Class:** The `VendingMachine` class maintains a reference to the current state and has methods to set the state, insert coin, eject coin, select product, and dispense. It also handles product count and state transitions.
3. **State Transitions:** Depending on the current state and the action performed, the state transitions to another state and performs the relevant actions.

This design encapsulates the state-specific behavior within state classes, making it easy to manage and extend.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
