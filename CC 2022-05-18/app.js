function removeChar(str){
    //You got this!
   
     //substring
   return str.substring(1, str.length -1);
     
     
   };
   
//or slice method

function removeChar(str){
    return str.slice(1,-1)
}


//or by converting array, using pop and shift

function removeChar(str){
    let arr1=str.split('')
    arr1.shift()
    arr1.pop()
    return arr1.join('')
}