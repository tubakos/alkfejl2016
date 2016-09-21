console.log('Hello');

var elszamol = function(meddig) {
    for (var i=1; i<=meddig; ++i) {
        console.log(i)
    }
}


function foo() {
    if (true) {
        return 6;
    }
}

elszamol(5);
console.log(foo());