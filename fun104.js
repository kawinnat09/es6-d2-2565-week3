//Rest Parameter
//Declaration function
function show(message,a,...args){
    return `${message} ${a} ${args[0]+args[1]+args[2]}`
}

//Call function
let sum = show("Hello",10,20,30,40,50,60,70,80,90,100)
console.log(sum)