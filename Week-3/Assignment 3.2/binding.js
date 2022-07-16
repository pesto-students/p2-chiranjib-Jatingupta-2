var foo = {
    name:"Jatin",
    returnName : function(firstName, lastName){
        return `${this.name} ${firstName} ${lastName}`
    }
}


var displayFoo = foo.returnName

//this is not binded to any object
//Object is lost because we are calling the displayFoo with global context and there is no variable name in global context

console.log(displayFoo())

//////////BIND

//This is the solution to call it with bind

displayFoo = foo.returnName.bind(foo)
console.log(displayFoo('Jatin2','Gupta2'))

//////////CALL

console.log(foo.returnName.call(foo,'Jatin2','Gupta2'))

//////////APPLY

console.log(foo.returnName.apply(foo,['Jatin2','Gupta2']))

//More details in Read me file