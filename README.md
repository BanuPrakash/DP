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
    * Factory
    * Abstract Factory
    * Prototype
    * Singleton
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