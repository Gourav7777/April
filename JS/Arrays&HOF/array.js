// function test() {
//   var count = 0;
//   return function() {
//     count++;
//     return count;
//   };
// }
// const counter = test();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let arr = [10,20,30,40,50]
// index - address of elements inside an array that starts from 0
// console.log(arr)
// arr[2] = 70

// index approach is both getter and setter as well for the elements inside an array
// console.log(arr)



// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// for (let items in arr){
//     console.log(items)
// }

// push & unshift method returns the new length
// let arr = [10,20,30,40,50]

// let returnedValue = arr.push(60,70,80)

// console.log(arr,returnedValue)

// let popeed = arr.pop()
// console.log(arr,popeed)

// let returnedValue = arr.unshift(90)
// console.log(arr,returnedValue)

// let shifted = arr.shift()

// console.log(shifted, arr)


// slice does not modify original array
// let returnedarr = arr.slice()

// console.log(arr,returnedarr)


// let arr = [10,20,30,40,50]
// splice modifies the original array

// let returnedArr = arr.splice(2,1,100,200,300)


// join 
// console.log(arr,returnedArr)
// let returnedValue = arr.join("")
// console.log(returnedValue,arr)

// console.log(returnedValue.length)


// concat

// let arr2 = [1,2,3,4,5]

// let newArr = arr2.concat(arr)

// console.log(arr)
// console.log(arr2)
//  console.log(newArr)

//   console.log(arr,arr2,newArr)



// includes

// let arr = [100,200,30,40,50]

// let returnedValue = arr.includes(30)

// console.log(arr,returnedValue)


// sort

// let arr2 = ["z","a","b"]
// console.log(arr2.sort())


// let x = arr.sort(function(a,b){
//   return a-b
// })
// console.log(arr,x)

// function double(){
//     console.log("hii")
// }


// function Hof(callback){

//     callback()
// console.log(callback)

// }

// Hof(double)


let arr = [100,200,30,40,50]

arr.map((el,i)=>{
  return el*2
}).filter((el)=>{
  return Math.max()
})