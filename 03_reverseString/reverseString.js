const reverseString = function(str) {
    let subStr = str.split('');
    return ((subStr.reverse()).toString()).replaceAll(',','');

};

console.count(reverseString("Hello there"))

// Do not edit below this line
module.exports = reverseString;
