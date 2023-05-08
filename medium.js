//Write a function that would allow you to do this:
function pizzaSlice(slices){ // creating a function named pizzaslice and giving it a parameter of slices
    return function(people){ //returns a function that takes on paremeter for the people
        return "each person gets" + (slices / people).toFixed(2) + "slices of pizza";
    };// returns the output and used toFixed to calculate the price
}

var pizza = pizzaSlice(8); //created a variable for pizza and gave the amount of pizza in the parenthesis 
console.log(pizza(3))