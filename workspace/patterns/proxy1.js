
let person = {
    "firstName" : "Kim",
    "lastName" : "David",
    "age": 31
}

let personProxy = new Proxy(person, {
    get(target, property) {
        console.log(`Property ${target[property]} is accessed`);

        if(property === 'fullName') {
            return target['firstName'] +" " + target['lastName'];
        }

        return target[property];
    },

    set(target, property, value) {
        if(property == 'age') {
            if(typeof value !== 'number') {
                throw new Error('Age has to be a number!!!')
            } else if(value < 18) {
                throw new Error('Min age has to be 18 for registration!!!')
            }
            else {
                target[property] = value;
            }
        }
    }
});

console.log(personProxy.firstName);
console.log(personProxy.fullName);

// personProxy.age = 'ten'
personProxy.age = 78;