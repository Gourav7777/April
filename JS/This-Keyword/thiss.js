
//  Direct Calling or Function Calling

// this keyword will always refer to window object

// function abc(){


 
//     console.log(this)
// }


// abc()

// function def(){
//     console.log(this,"1")

//     function nested(){
//         console.log(this,"2")
//     }
//     // nested()
// }

// def()



// Object Calling / Method Calling (this will refer to parent object because it has dependency)


// let obj = {
//     a:10,

//     fun:function (){
//         console.log(this.a)  // obj

//         function ghi(){
//             console.log(this.a) // window
//         }

//         ghi() // directly call
//     },


//     sam: {

          
//         b:15,

//         inner: function(){
//             console.log(this.b,"sam") // obj || sam
//         }
//     }
// }

// // console.log(obj.a)
// obj.fun()

// obj.sam.inner()



let obj ={

    a:20,

    inner:function(){
        console.log(this); // obj || window
        
    },
    sam:{


        nested:function(){
            console.log(this) // sam 
        }
    }

}

obj.inner() // obj
let x = obj.inner
x() // window 

obj.sam.nested()