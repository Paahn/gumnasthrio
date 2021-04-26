// Guess what the console will log, based on hoisting, creation phase, execution context phase.

var favouriteFood = "grapes";

var foodThoughts = function () {
    console.log("Original favourite food: ",
    favouriteFood);

    var favouriteFood = "sushi";

    console.log("New favourite food: ", favouriteFood);
};

foodThoughts();

// answer
// Original favourite food: undefined
// New favourite food: sushi