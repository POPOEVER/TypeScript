//// [inferTypeArgumentsInSignatureWithRestParameters.ts]
function f<T>(array: T[], ...args) { }
function g(array: number[], ...args) { }
function h<T>(nonarray: T, ...args) { }
function i<T>(array: T[], opt?: any[]) { }
var a = [1, 2, 3, 4, 5];

f(a); // OK
g(a); // OK
h(a); // OK
i(a); // OK


//// [inferTypeArgumentsInSignatureWithRestParameters.js]
function f(array) {
    var args = [];
    for (var _a = 1; _a < arguments.length; _a++) {
        args[_a - 1] = arguments[_a];
    }
}
function g(array) {
    var args = [];
    for (var _a = 1; _a < arguments.length; _a++) {
        args[_a - 1] = arguments[_a];
    }
}
function h(nonarray) {
    var args = [];
    for (var _a = 1; _a < arguments.length; _a++) {
        args[_a - 1] = arguments[_a];
    }
}
function i(array, opt) {
}
var a = [1, 2, 3, 4, 5];
f(a); // OK
g(a); // OK
h(a); // OK
i(a); // OK
