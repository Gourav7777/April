

// function add(){

// }

// console.log(add())




function Student(n,a){

    this.naam = n;
    this.age= a;
    this.print = function(){
        console.log(this.naam, this.age)
    }
}

const s1 = new Student("harry",20)
const s2 = new Student("sam",30)
console.log(Object.getPrototypeOf(s1));





// let obj = {
//     a:10,
//     fun:function(){
//         console.log(20)
//     },
   
// }

// console.log(obj)
// console.log(obj.a)
// console.log(obj.b)
// console.log(obj.toString())
// obj.fun()


