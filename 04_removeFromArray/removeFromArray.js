const removeFromArray = function() {
    
    let origArray = arguments[0];
    

    for(let i = 1;i < arguments.length; i++){
        
        let index = origArray.indexOf(arguments[i]);
        if(index != -1){
            origArray.splice(index,1);
        }
    }
    
    return origArray
};

//let res = (([1,2,3]).indexOf("tacos"));


// Do not edit below this line
module.exports = removeFromArray;
