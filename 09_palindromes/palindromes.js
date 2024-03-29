const palindromes = function (phrase) {
    let phrase2 = "";

    for(let i = 0; i < phrase.length; i++){
        if (
            !(phrase.charCodeAt(i) >= 65 && phrase.charCodeAt(i) <= 90) && // A-Z
            !(phrase.charCodeAt(i) >= 97 && phrase.charCodeAt(i) <= 122) && // a-z
            !(phrase.charCodeAt(i) >= 48 && phrase.charCodeAt(i) <= 57) // 0-9
        ){
            phrase = phrase.slice(0, i) + phrase.slice(i+1);
            i--;
        }
    }

    phrase = phrase.toLowerCase();

    for(let i = phrase.length; i >= 0; i--){
        phrase2 += phrase.charAt(i);
    }

    return phrase2 == phrase ? true : false;

};

// Do not edit below this line
module.exports = palindromes;
