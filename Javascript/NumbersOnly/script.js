//numbers only
    
    var numbersOnly = function(arr) {
    var newarr = [];
    for(var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number"){
            newarr.push(arr[i]);
          }
        }
        return newarr;
    }
    var test = numbersOnly([1, "apple",-3,"Orange", 6]);
    console.log(test);


//BONUS positive numbers only
    var numbersOnly = function(arr) {
     var newarr = [];
        for(var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number" && arr[i] > 0){
              newarr.push(arr[i]);
              }
            }
            return newarr;
       }
        var test = numbersOnly([7,9,"woah","what",-19,10,-3,"the","HECK"]);
        console.log(test);

        