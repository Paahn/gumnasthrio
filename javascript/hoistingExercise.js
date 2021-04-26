// Guess what the console will log, based on hoisting, execution context.

var favouriteFood = "grapes";

var foodThoughts = function () {
    console.log("Original favourite food: ",
    favouriteFood);

    var favouriteFood = "sushi";

    console.log("New favourite food: ", favouriteFood);
};

foodThoughts();

// answer
// Original favourite food: grapes
// New favourite food: sushi