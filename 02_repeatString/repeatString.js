const repeatString = function(str,numTimes) {
    
    if(numTimes < 0){
        return 'ERROR';
    }
    
    let outStr = '';
    
    for(let i = 0;i < numTimes; i++){
        outStr += str;
    }
    return outStr
};

// Do not edit below this line
module.exports = repeatString;
