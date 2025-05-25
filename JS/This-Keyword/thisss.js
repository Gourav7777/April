// Constructor Calling (this keyword will always refer to newly created objects)



// function Person(n,a){


//      this.naam = n,
//      this.age = a
// }

// let p1 = new Person("sam",30)
// let p2 = new Person("ram",30)

// console.log(p1,p2)



// Arrow Functions  (it will always refer to parents this )

// const sum =  ()=>{

//    return 20
// }
//const sum =  (n)=> 20*2  // simgle return statement


// const sum =  n=> 20*n
// console.log(sum(2))


// const abc=()=>{
//     console.log(this) // window
// }

// abc()

// const abc=()=>{
//     console.log(this) // window

//     const def=()=>{
//         console.log(this) // window
//     }
//     def()
// }

// abc()


// let obj ={
//     a:20,

//     inner: ()=>{
//         console.log(this) //  window

//         // const xyz =()=>{

//         //      console.log(this)
//         // }

//         // xyz()
//     },

//     sam: {

//         c:30,
//         nested:()=>{
//             console.log(this)
//          const xyz =()=>{

//              console.log(this)
//         }

//         xyz()
            
//         }

//     }
// }
// obj.inner()
// obj.sam.nested()







// function outer(){  
    
//     const inner=()=>{
//       console.log(this);
//      };
//     inner();
// }

// const obj={name:"Alice",outer:outer};
// obj.outer();


// let obj ={
//     a:10,

//     fn: function(){

//       console.log(this)


//          const def = ()=>{
//             console.log(this,"def")
//          }
//          def()
//         }
     
    
// }

// obj.fn()


// Indirect Calling (Call, apply, bind)



let obj = {
    a:10,
    sum:function(x,y,z){
        console.log("inside method",this.a)
    }
}


// let obj2  ={
//     a:20

// }

// obj.sum()

// obj.sum.call(obj2)

// obj.sum(14,15,16)
// obj.sum.call(obj2,12,1,3)

// obj.sum.apply(obj2,[12,1,3])


// let retrunedValue = obj.sum.bind(obj2,12,1,3)

//  retrunedValue()


// function fun(){
//   let x=10;
//   return(gun=function(){
//     return x+1;
//   });
// }
// const obj = {name:"John"};
// obj.__proto__=fun;
// const ans=obj.__proto__();
// console.log(ans());