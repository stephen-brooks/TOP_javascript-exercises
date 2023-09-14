const sumAll = function(number1, number2) {
    
    if((typeof(number1),typeof(number2)) != ("number","number")){
        return 'ERROR'
    } else if
        (Math.min(number1,number2) < 0){
            return 'ERROR'
    }

    let sum = 0;

    for(i = Math.min(number1,number2);i <= Math.max(number1,number2); i++){
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
