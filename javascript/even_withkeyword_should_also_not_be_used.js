var obj = {
    a: 2,
    b: 3,
    c: 4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with (obj) {
    a = b + c;
    d = b - a;
    d = 3; //??
}

obj.d; //undefined
d; // 3 --oops;

/* we think instead of using obj. everytime, we could use some shorthand like
with, but this is very dangerous than eval, eval only modifies the existing
lexical scope, but then this with creates a new lexical scope by itself,
compiler cannot make any optimization, runtime does the loopup, which causes
the code to run slow at runtime */