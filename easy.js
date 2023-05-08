function exercise(activity){ //created a function that defines "exercise" and takes "activity" as the parameter
    return "todays exercise: " + activity;  //returns a string and the parameter
}

var run = exercise('running'); //invokes the exercise funtion with a arguement of running
var swim = exercise('swimming') //invokes the exercise funtion with a arguement of swimming

console.log(run) //console logs the variable run
console.log(swim) //console logs the variable swim

//gets the output with a string because we created a function for that