// fetch('https://fakestoreapi.com/products')
// .then((data)=>{

// // console.log(data,"1");

//    return  data.json()

// })
// .then((data)=>{
//     console.log(data);

// })
// .catch((err)=>{
//     console.log(err);

// })

// async function callApi() {
//   try {
//     let data = await fetch("https://fakeurl.com");

//     let res = await data.json();

//     console.log(res);

//     console.log("Important statement ");
//   } catch (error) {
//     console.log(error);
//   }

//   console.log("Important 2");
// }

// callApi();

// console.log(20);



// axios.get('https://fakestoreapi.com/products')
// .then((data)=>{


// console.log(data);

//    console.log(data.data[0].price);
   

// })
// .catch((err)=>{
//     console.log(err);

// })

// async function callApi2(){


//     try {
        
//     let data = await axios("https://fakestoreapi.com/products");

//     console.log(data);



//     } catch (error) {
//         console.log(error);
        
//     }
// }

// callApi2()


const promise = new Promise((resolve, reject) => {
  reject("Error!");
});
promise.then(data => console.log(data));
console.log("Done");