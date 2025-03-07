// memoization pattern
function memoize(fn) {
    var cache = new Map();
    return new Proxy(fn, {
        apply(target, thisArg, args) {
            let argument = JSON.stringify(args);
            if (!cache.get(argument)) {
                cache.set(argument, fn(args));
            }
            return cache.get(argument);
        }
    });
}
function fibanocci(no) {
    if (no == 0 || no == 1) {
        return no;
    } else {
        return fibanocci(no - 1) + fibanocci(no - 2);
    }
}

let memFib = memoize(fibanocci);

console.time("first");
console.log(memFib(40));
console.timeEnd("first");

console.time("second");
console.log(memFib(40));
console.timeEnd("second");