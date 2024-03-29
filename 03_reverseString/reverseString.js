const reverseString = function(word) {
    let res = "";
    for(let i = 1; i <= word.length; i++){
        res += word[word.length-i];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
