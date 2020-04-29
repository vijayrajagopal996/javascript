var foo = function bar() {
    var foo = "baz";

    function baz(foo) {
        foo = bar;
        foo;
    }
    baz();
};

foo();
bar(); // Error

/* it is always best practice to have a named function expression instead
of anonymous, what i mean is, always give function a name instead of leaving
it without a name like below */

var unnamed = function () { };

console.log(foo());
