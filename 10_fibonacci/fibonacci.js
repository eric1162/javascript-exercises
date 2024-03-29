const fibonacci = function(index) {
    let fib = [0, 1];
    if(Number.parseInt(index) === 0){
        return fib[0];
    }else if(Number.parseInt(index) < 0){
        return "OOPS";
    }
    let res;
    for(let i = 1; i < Number.parseInt(index); i++){
        fib.push(fib[i-1] + fib[i]);
    }

    return fib[fib.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
