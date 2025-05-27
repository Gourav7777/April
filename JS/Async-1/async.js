// console.log(10);

// setTimeout(function(){

//     console.log("hii");

// },2000)

// console.log(20);

// let id = setInterval(function(){

//     console.log("bar bar run houga");

// },2000)

// clearInterval(id)

// function double(){
//     console.log(10);

// }
// function abc(fun){

//     fun()
// }

// abc(double)

// console.log(10);

// setTimeout(function(){

//     console.log("hii");

// },0)

// console.log(20);

// Callback hell

// function boilWater(fun) {
//   console.log("Water starts Boiling");
//   setTimeout(() => {
//     fun("Water Boiled");
//   }, 5000);
// }

// function prepareTea(hotwater, fun) {
//   console.log(
//     `${hotwater} added milk to hot water and our tea starts preparing`
//   );
//   setTimeout(() => {
//     fun("Tea is ready");
//   }, 4000);
// }

// function serveTea(tea) {
//   setTimeout(() => {
//     console.log(`${tea} to serve`);
//   }, 2000);
// }

// boilWater(function (hotwater) {
//   prepareTea(hotwater, function (tea) {
//     serveTea(tea);
//   });
// });

let count = 0;
const id = setInterval(() => {
  count++;
  console.log("Ping", count);
  if (count === 5) clearInterval(id);
}, 2000);

function boilWater(fun) {
  console.log("Water starts Boiling");
  setTimeout(() => {
    fun("hotwater is ready");
  }, 5000);
}

function preparetea(hotwater, fun2) {
  console.log(`${hotwater}`);
  setTimeout(() => {
    fun2("added milk tea prepared");
  }, 4000);
}

function serveTea(teaprepared) {
  setTimeout(() => {
    console.log(`${teaprepared} ready to serve`);
  }, 2000);
}

    //    boilWater(function (hotwater) {
    //       preparetea(hotwater, function (teaprepared) {
    //          serveTea(teaprepared);
    //           });
    //     });
