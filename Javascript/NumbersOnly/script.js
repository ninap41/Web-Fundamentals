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
c

        //// This Only Works In the Console, I have no idea why :( ///