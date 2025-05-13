
function print(){

    console.log("printed fuction")
}

// fun is parameter

function add(){





   return function(){
      console.log("I am returning something")
   }
}

   let x =  add()

   x()
   // console.log(x())

// console.log(add(print))


// let returned_Value = add(print)

// console.log(returned_Value)