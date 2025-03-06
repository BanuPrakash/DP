
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

}

// Not OCP
// class ProductFilter {
//     filterByCategory(products, category) {
//         return products.filter(p => p.category === category);
//     }

//     filterByPrice(products, price) {
//         return products.filter(p => p.price === price);
//     }
// }

class CategorySpecification {
    constructor(category) {
        this.category = category;
    }

    isSatisfied(item) {
        return item.category === this.category;
    }
}


class PriceSpecification {
    constructor(price) {
        this.price = price;
    }

    isSatisfied(item) {
        return item.price === this.price;
    }
}

class AndSpecification {
    constructor(specs) {
        this.specs = specs;
    }

    isSatisfied(item) {
        return this.specs.every(item => item.isSatisfied(item));
        //  return this.specs.any(item => item.isSatisfied(item));   
    }
}
class ProductFilter {
    filterProducts(products, spec) {
        return this.products.filter(p => spec.isSatisfied(p));
    }
}