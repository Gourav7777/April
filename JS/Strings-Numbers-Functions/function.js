
// Function Expression or Function Declaration

// Parameters


function abc(){

}

console.log(abc())

function sum(){
   
   
    return function inner(){
     console.log("I am inside inner function")
    }
    // b()


}



let returnedFunn =   sum() 
returnedFunn()