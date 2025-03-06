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

==============

Singleton Pattern

In JavaScript, the monostate pattern is a design approach where all instances of a class share the same state.

```
class Book {
  
}

Book.title = "JS";
Book.price = 100;

const instance1 = new Book();
const instance2 = new Book();

instance1.title; // Js
instance1.price; // 100

instance2.title; // Js
instance2.price; // 100

instance1.title = "B";

instance1.title; // B
instance2.title; // B

```

Factory pattern : wholesale creation of object
Abstract Factory
```
class FurnitureFactory {
    createChair() {
        return new Chair();
    }

    createSofa() {
        return new Sofa(); 
    }
}
```

Structural Pattern: Organizing class / objects 
* Bridge Pattern

Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies.

Resources to be displayed:
Artist, Album, PlayList

How to Dispay:
ShortView, LongView

# of Classes getting created
ShortViewArtist
ShortViewAlbum
ShortViewPlayList
LongViewArtist
LongViewAlbum
LongViewPlayList

Want to add ConceptualView, we end up creating 3 more classes
ConceptualViewArtist
ConceptualViewAlbum
ConceptualViewPlaylist

====

```
class View {
    constructor(resource) {
        this.resource = resource;
    }

    draw() {
        this.resource.snippet();
    }
}

class LongView extends View {
    constructor(resource) {
        super(resource)
    }
    <!-- draw() {
        this.resource.snippet();
    } -->
}
class Resource {
    snippet() {
        // 
    }
}

class Artist extends Resource {
     snippet() {
        // return JSx 
    }
}

```