Function.prototype.myBind = function(context, ...args){
    let fn = this
    return function(...innerArgs){
        fn.apply(context, [...args, ...innerArgs])
    }
}

const obj = {name: "uday"}

function greet(greeting){
    console.log(`${greeting} ${this.name}`);
    
}

const boundFunc = greet.myBind(obj, "Hello");

boundFunc(); // Output: Hello, Uday
