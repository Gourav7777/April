

// function double(){
//     console.log("double fun")
// }

// function add(fun){


//      fun()
//     // console.log(fun)
//     console.log(12);
    
// }

// add(double)


let product = {

    category:"shoes",
    price:2000,
    brand:"Nike"

}


const obj = {

    naam: "harry",
    classs: "20",
    print:  function(){
        console.log(`Name is: ${this.naam} class is: ${this.classs}`)
    },
    
   

}

//  console.log(obj.naam)
// console.log(obj["naam"])


obj["print"]()

for(let i in obj){
    
    if(typeof(obj[i])!== 'string'){
        obj[i]()
    }
    else{
        console.log(obj[i])
    }
}