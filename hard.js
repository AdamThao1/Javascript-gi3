//Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all.

function createPii(name, ssn) { //created a function to get the personal information
    const pii = { // created a constant variable pii
        name, // gave a value
        _ssn: ssn, //the underscore is marked as private 
    };

    return {
        getName: function(){ //
            return pii.name; //return the name value
            
            //+ " " + pii.ssn (this is to add a ssn )
        }
    };
    

}

const myPii = createPii("adam Thao", "111-11-1111");
const beckyPii = createPii("Becky Sal", "222-22-2222");

console.log(myPii.getName());
console.log(myPii.ssn);

console.log(beckyPii.getName())
console.log(beckyPii.ssn)