class Author {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    toString() {
        return `Title : ${this.title} is written by ${this.author.name}`
    }

    getDetails() {
        return this.title + ", " + this.author.email;
    }
}

class Serializer {
    constructor(types) {
        this.types = types;
    }

    addTypeIndex(object) {
        let idx = this.types.findIndex(type => type.name === object.constructor.name);
        if (idx != -1) {
            object['typeIndex'] = idx;
            for (let key in object) {
                if (object.hasOwnProperty(key)) {
                    this.addTypeIndex(object[key]);
                }
            }
        }
    }
    // key/value pair is passed
    /*
    {
        title: 'React in Action',
        author: Author { name: 'Rod Jhonson', email: 'rod@gmail.com', typeIndex: 1 },
        typeIndex: 0
    }
  */
    reconstruct(object) {
        if(object['typeIndex'] >= 0) { 
            let type = this.types[object['typeIndex']]; // Book, Author
            console.log(type);
            let obj = new type(); // new Book(), new Author()
            for(let key in object) {
                obj[key] = this.reconstruct(object[key]);
            }
            delete obj.typeIndex;
            return obj;
        }

        return object;
    }
    clone(object) {
        this.addTypeIndex(object);
        let clone = JSON.parse(JSON.stringify(object)); // key/value
        return this.reconstruct(clone);
    }
}
let book = new Book("React in Action", new Author("Rod Jhonson", "rod@gmail.com"));

console.log(book.getDetails());
console.log(book.toString());

let serializer = new Serializer([Book, Author]); // plumbing, overhead
let copy = serializer.clone(book);
console.log(copy.getDetails());
console.log(copy.toString());

let clone = JSON.parse(JSON.stringify(book)); // Dictionary [key/value]

 console.log(clone.toString());

// clone.getDetails();