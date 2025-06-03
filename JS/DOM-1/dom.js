

// console.log(window);

// console.log(window.document, document)


// getElemntByID (select single element)

// let allId = document.getElementById("h")

// allId.style.color="red"
// allId.style.backgroundColor="yellow"
// allId.style.fontSize="30px"

// console.log(allId);


// getElementsByClassName

// let allClss = document.getElementsByClassName("pp")

// console.log(allClss);

// allClss[0].style.color="red"
// allClss[0].style.backgroundColor="yellow"
// allClss[0].style.fontSize="30px"


// allClss[1].style.color="red"
// allClss[1].style.backgroundColor="yellow"
// allClss[1].style.fontSize="30px"

// for (let item of allClss){

//     item.style.cssText = `
    
//          color:blue;
//          background-color:yellow;
//          font-size:30px
//     `

// //    item.style.color="red"
// //    item.style.backgroundColor="yellow"
// //    item.style.fontSize = "30px"
// }


// getElementsByTagName


// let allTag = document.getElementsByTagName("p")
// for (let item of allTag){

//     item.style.cssText = `
    
//          color:blue;
//          background-color:yellow;
//          font-size:30px
//     `

// //    item.style.color="red"
// //    item.style.backgroundColor="yellow"
// //    item.style.fontSize = "30px"
// }



// querySelector (return single value)

// let ele = document.querySelector(".pp")


// console.log(ele);

//  ele.style.cssText = `
    
//          color:blue;
//          background-color:yellow;
//          font-size:30px
//     `


    // querySelectorAll (array)

//     let ele = document.querySelectorAll("#h")


// console.log(ele);

//  ele.style.cssText = `
    
//          color:blue;
//          background-color:yellow;
//          font-size:30px
//     `



// console.log(document.getElementById("h").textContent,"text-content");

// document.getElementById("h").textContent= "hii "
// console.log(document.getElementById("h").innerText , "inner-text");
// document.getElementById("h").innerText ="hello"



// console.log(document.getElementById("h").innerHTML)


// document.getElementById("h").innerHTML= "<p>i am <em>p inside h1</em> </p>"


// console.log(document.getElementsByTagName("a")[0].getAttribute("href"))


// document.getElementsByTagName("a")[0].setAttribute("href","https://github.com")

const img = [
    "https://plus.unsplash.com/premium_photo-1673967859849-c8a37fa85aeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1748882648048-1103b6963a3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1748897364620-2c256709066d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1748679866476-a3d2e6c2dc70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
]

let i =0
let idd=setInterval(()=>{

document.getElementsByTagName("img")[0].setAttribute("src",img[i])
i++
if(i==img.length){
    i=0
}
      
},2000)




setTimeout(()=>{

    clearInterval(idd)
},10000)