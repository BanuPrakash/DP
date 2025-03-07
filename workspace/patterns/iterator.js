let data = [100, 200, 300];

for(let x of data) {
    console.log(x);
}

class Sample {
    x = "A";
    y = "B";

    [Symbol.iterator]() {
        var i = 0;
        var self = this;
        return {
            next: function() {
                return {
                    done: i > 1,
                    value: i++ == 0 ? self.x : self.y
                }
            }
        }
    }
}

let sample = new Sample();
for(let data of sample) {
    console.log(data);
}