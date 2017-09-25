
var fancy = function (arr){
var newarr=[];
        for (var i= 0; i< arr.length; i++){
        newarr.push(arr);    
            }                
        return newarr; 
        }
var test = fancy(['This','is','a','String']);
console.log(test);

//Redo
var array = ["String", "And", "and", "Array"];
function fancyPrint(arr){
    for (var i = 0; i < arr.length; i++) {
        console.log(`${i} -> ${arr[i]}`)
    }
}
fancyPrint(array, "-")
