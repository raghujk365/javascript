console.log("Welcome to Programbiz!");
let obj={
    name:"raghu",
    age:22,
}  
function getAge(){
    console.log(this.age)    
}

let x = getAge.bind(obj)   

x();