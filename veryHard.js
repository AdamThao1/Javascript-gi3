
//step 1
function Person(name, job, age) { //Step 1: created a constructor with 3 properties
    this.name = name; //properties
    this.job = job; 
    this.age = age; 
}

//step 2
// created a method (exercise) to the person prototype
Person.prototype.exercise = function() { 
    console.log("running is fun! - said no one ever");
};

//step 3
//created a method (fetchJob) to the person prototype
Person.prototype.fetchJob = function() {
    console.log(this.name + " is a " + this.job);
    //added a message that includes the person name and job
};

//step 4
//created a constructor function for a programmer
function Programmer(name, job, age, languages) {
    Person.call(this, name, job, age);//called the person constructor for the programmer function
    this.languages = languages; //added another property
    this.busy = true; //set the programmer to always busy 
}

Programmer.prototype = Object.create(Person.prototype); //inherit the methods from the person prototype
Programmer.prototype.constructor = Programmer; // sets the constructor for the programmer prototype

// step 5
Programmer.prototype.completeTask = function(){ //created a method for the programmer prototype
    this.busy = false;
};

Programmer.prototype.acceptNewTask = function(){ //created a method for the programmer prototype
    this.busy = true;
};

// step 6
Programmer.prototype.offerNewTask = function() { //if programmer is busy then they cant accept task but if not then they can
    if(this.busy) {
        console.log(this.name + "can't accept any new tasks right now.");
    } else {
        console.log(this.name + "would love to take on a new task.");
    }
};

//step 7
Programmer.prototype.learnLanguage = function(language) {
    this.languages.push(language); //adds language to languages array for programmer
};

Programmer.prototype.listLanguages = function(){
    console.log(this.name + " knows " + this.languages.join(", "));
}; //lists the languages of what the programmer knows




// created a newHire and calling their methods
const newHire = new Programmer('mike', 'teacher', 29, ['html', 'css', 'javascript']);
//calling the methods below
newHire.exercise();
newHire.fetchJob();
newHire.offerNewTask();
newHire.completeTask();
newHire.offerNewTask();
newHire.learnLanguage('node js');
newHire.listLanguages();