let obj = {
    name:"raghu",
    age:22,
    getName: function(){
        console.log(this.name);
    }
};

obj.getName();