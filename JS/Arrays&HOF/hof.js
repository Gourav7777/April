// let arr = [10,20,30,40,50,5]

// map (iterates over whole array and on the given condition it returns us a new array but it will not change the length of the new array as well )

// let returnedValue = arr.map(function(el,i){

//       return el%2==0
// })

// console.log(returnedValue,arr)


// filter 
// let returnedValue = arr.filter(function(el,i){

//       return el%2!=0
// })

// console.log(returnedValue,arr)


// foreach

// let newArr=[]
// for(let i=0; i<arr.length; i++){


//     newArr.push(arr[i]*2)
// }

// console.log(newArr,arr)

// let returnedValue = arr.forEach(function(el,i){
 

//        return el
// })
// console.log(returnedValue,arr)



// let arr = [10,20,30,40,50,30]

// let returnedValue = arr.find(function(el,i){


//      console.log(i)
//      return el==80
// })

// console.log(returnedValue,arr)


// console.log(arr.includes(30))

// let returnedValue = arr.some(function(el,i){


//      console.log(i)
//      return el==30
// })

// console.log(returnedValue,arr)



let arr = [10,20,33,40,50,30]
let returnedValue = arr.every(function(el,i){


    //  console.log(i)
     return el%10==0
})

console.log(returnedValue,arr)