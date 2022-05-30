//Declaration Generis function
function sayHello(){
    return "Hello"
}

//Declaration Generis function
function greeting(sayHello,name){
    return `${sayHello()},${name}`
}
//Call function
let message = greeting(sayHello,"Mark Zakerberg")
console.log(message)