let getName = function(){
    console.log(this.name);
}


let obj= {
    name:"raghu",
    age:22,
};


getName.call(obj);