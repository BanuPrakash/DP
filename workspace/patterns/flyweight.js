function Flyweight(make, model, processor) {
    this.make = make;
    this.model = model;
    this.processor = processor;
}

var FlyweightFactory = (function() {
    var flyweights = {};
    return {
        get: function(make, model, processor) {
            if(!flyweights [make + model]) {
                flyweights [make + model] = new Flyweight(make,model,processor);
            }
            return flyweights [make + model];
        }
    }
})();

var Computer = function(make, model, processor, memory, tag) {
    this.flyweight = FlyweightFactory.get(make, model, processor);
    this.memory = memory;
    this.tag = tag;
    // add get set
}
function ComputerCollection() {
    var computers = {};

    return {
        add: function(make, model, processor, memory, tag) {
            computers[tag] = new Computer(make, model, processor, memory, tag);
        }
        //
    }
}

var computers = new ComputerCollection();
computers.add("Dell", "Studio XPS", "intel", "5G", "ASRC");
computers.add("Dell", "Studio XPS", "intel", "4G", "iuua");