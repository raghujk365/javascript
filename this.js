let obj={
    name:"raghu",
    age:22,
    nestobj:{
        name1:"test",
        getname:function(){
            console.log(this.name1);
        }
    }
}
obj.nestobj.getname()