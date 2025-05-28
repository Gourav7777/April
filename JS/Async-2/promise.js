// let p1 = new Promise(function(resolve,reject){

//      resolve("waada poora hua")
//       reject("something got wrong")
// })

// p1.then(function(data){

//     console.log(data);

// })

// .catch((err)=>{

//     console.log(err);

// })
// .finally(()=>{
//     console.log("always run");

// })
// console.log(p1);

function boilWater() {
  console.log("Water starts boiling");

  return new Promise((res, rej) => {
    setTimeout(() => {
      res("water is boiled");
    }, 5000);
  });
}

function teaPreparation(hotwater) {
  console.log(`${hotwater} tea starts preaparing`);

  return new Promise((res, rej) => {
    setTimeout(() => {
    //   res("tea preapred");
      rej("gas finished")
    }, 4000);
  });
}


function serveTea(tea){

       

  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`${tea} and  served`);
    }, 2000);
  });
}

boilWater()
  .then((data) => {
    return teaPreparation(data);
  })

  .then((tea) => {
    return serveTea(tea)
    
  })
   .then((servetea)=>{
    console.log(servetea);
    
  })

  .catch((err)=>{

    console.log(err);
    
  })