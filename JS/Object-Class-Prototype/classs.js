

class Student{


    constructor(n,a){
          this.naam = n;
          this.age= a;
          
    }  // initialize the instance of class that is object

    print(){
        console.log(this.naam,this.age)
    }
}

class Person extends Student{
    constructor(n,a,g){

          super(n,a)
        //   this.naam = n;
        //   this.age= a;

        this.gender=g
          
    }
}

const s1 = new Student("harry",20)
const s2 = new Student("sam",30)

const p1 = new Person("gary",40,"male")
p1.print()
console.log(p1,s1)