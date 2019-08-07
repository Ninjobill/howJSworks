///////////////////////////////////////
// Lecture: Hoisting

// functions
// function declarations can be hoisted to top. declared at bottom of script.
// calculateAge(1999);

// function calculateAge(year) {
//     console.log(2016 - year);
// }

// var retirement = function(year) {
//     console.log(65 - (2016 - year));
// };

// retirement(1990);


// // variables
// var age = 23;
// console.log(age);

// function foo() {
//     var age = 65;
//     console.log(age);
// }
// foo();
// console.log(age);



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


// console.log(this);

calculateAge(1985)
function calculateAge(year) {
    console.log(2016-year);
    // console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        // fucntion expression is a method and points to the john object when using 'this'
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        // function declaration below points to window object despite being inside the john variable
        function innerFunction() {
            // console.log(this);
        }
        innerFunction();
    }
};

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// method borrowing
mike.calculateAge = john.calculateAge;

mike.calculateAge();