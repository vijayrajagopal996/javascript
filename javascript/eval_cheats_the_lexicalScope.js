var bar = "bar";

function foo(str) {
    eval(str);
    console.log(bar);
}

foo("var bar = 42;"); // so please never ever use eval

/* compiler cannot  optimize the scope when eval is being used and also
the code runs very slow at runtime because the compiler was not able to optimize
the scope at compile time, as the eval modifies the existing scope that
the compiler has created*/

/* do not use string as a param to the setTimeout function, as it
gets converted to eval */