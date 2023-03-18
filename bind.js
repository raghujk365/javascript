console.log("Welcome to Programbiz!");
let obj={
    name:"danish",
    age:24,
}  
function getAge(){
    console.log(this.age)    
}

let x = getAge.bind(obj)   

x();