class Employee {
    constructor(){
        this.name = this.email = "";
        //AddressInfo
        this.street = this.city = this.pincode = "";
        // Company
        this.companyName = this.position = "";
    }

    toString() {
        return `${this.name} with Email ${this.email} 
        stays in ${this.street}, ${this.city} , ${this.pincode} 
        and works in ${this.companyName} as ${this.position}`
    }
}

class EmployeeBuilder {
    constructor(employee = new Employee()) {
        this.employee = employee;
    }

    name(name) {
        this.employee.name = name;
        return this;
    }

    email(email) {
        this.employee.email = email;
        return this;
    }

    get lives() {
        return new EmployeeAddressBuilder(this.employee);
    }
    build() {
        return this.employee;
    }
        
}

// sub-builder
class EmployeeAddressBuilder extends EmployeeBuilder {
    constructor(employee) {
        super(employee);
        // this.employee = employee;
    }

    street(street) {
        this.employee.street = street;
        return this;
    }
}
let employee = new EmployeeBuilder().name("Raj").email("raj@adobe.com").lives.street("M G ROAD").build();

console.log(employee);