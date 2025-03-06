# JS Design Patterns 

Banuprakash C

Full Stack Architect,
Co-founder & CEO Lucida Technologies Pvt Ltd.,
Corporate Trainer & Consultant,

Emails: banu@lucidatechnologies.com; banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/DP

Softwares Required:
Visual Studio Code.
Chrome Web Browser
NodeJS Latest LTS

==========================


* Design Principles
    * SRP
    * OCP
    * LSP
    * ISP
    * DI
* Creational Patterns
    * Builder
    * React Compound Pattern
    * Prototype
    * Singleton
    * Factory
    * Abstract Factory
* Structural Pattern
    * Bridge
    * Proxy
    * Decorator Pattern
    * Facade Pattern
    * Adapter
    * Composite
    * Flyweight
  
* Behavioural 
    * Command
    * Visitor
    * Iterator
    * Chain Of Responsibility 
    * Observer


======================

Solid Design Principles:

Single Responsibility:
```
    class Book {
        constructor(title, price) {...}

        add(..) {}

        remove(..) {}

    }

    class BookPersistence {
        preprocess(books) {}
        saveToFile(books, file) {
            fs.writeFileSync(books, file);
        }
    }
```

OCP: Components should be open for extension and closed for change

Liskov Substitution Priciple:
In Object-Oriented Programming (OOP), while a square is a type of rectangle mathematically, it's generally not recommended to have Square extend Rectangle directly due to potential issues with the Liskov Substitution Principle (LSP). 
```
interface Flyable {
    fly();
}

class Bird {
    name
    age
}

class Eagle extends Bird implements Flyable {
    fly() {}
}

class Superman extends Human implements Flyable {
    fly() {}
}

```
Dependency Injection

Controller --> Service --> DAO --> database

Flow is inversed
Controller <-- Service <-- DAO <-- database

Dependency Injection Containers for front-end:
* Inversify
* TypedDI
* TSyringe

===

di> npm init --y
di> npm install typescript inversify reflect-metadata
di> tsc --init

===

I --> Interface segregation

```
interface CustomerInterface {
    credit();
    debit();
    checkBalance();
}

interface AdminService {
    createAccount();
    blockAccount();
    getAllTransactions();
}


Class BankingService implements AdminInterface, CustomerInterface {

}

```

Creational Design Patterns

Creational design patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.    

* Builder pattern
* Builder Pattern in React
    ``` 
        App.tsx
            let elements = new FormBuilder()
                .input({"label": "Name"})
                .input({"label": "Email"})
                .checkbox({"label":"Subscribe for newsletter})
                .build();

        <div>
            {elements}
        </div>
    <input type="text" {...props}>
    ```
yarn create react-app react_ts --template typescript

========

Compound Pattern: The compound component pattern allows you to create components that all work together to perform a task.
Compound components help developers build more expressive and flexible APIs to share state and logic within components. 

The select tag works together with the option tag which is used for a drop-down menu to select items in HTML. Here the <select> manages the state of the UI, then the <option> elements are configured on how the <select> should work.

Prototype Pattern:

```
{
  title: 'React in Action',
  author: Author { 
    name: 'Rod Jhonson', 
    email: 'rod@gmail.com', 
    typeIndex: 1 
    },
  typeIndex: 0
}

```

React.createElement()
React.cloneElement()

yarn create react-app reactcode
