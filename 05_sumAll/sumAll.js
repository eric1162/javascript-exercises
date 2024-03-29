const sumAll = function(one, two) {
    let res = 0;
    if(one > two){
        let temp = two;
        two = one;
        one = temp;
    }
    if(one < 0 || two < 0 || typeof one != "number" || typeof two != "number"){
        return "ERROR";
    }
    for(let i = one; i <= two; i++){
        res = res + i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
