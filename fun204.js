//Declaration Generis function
function sayHello(){
    return "Hello"
}

//Declaration Generis function
function greeting(callback,name){
    console.log(callback(),name)
}

//Call function
greeting(sayHello,"Mark Zakerberg")