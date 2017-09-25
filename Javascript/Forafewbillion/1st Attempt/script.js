//Lotta Penniess

var penny = 1;
var sum = 0;
   for (var i =30; i>0;i--){
        penny = penny * 2;
        sum = sum + penny; 
    }   
    
    sum = Math.floor(sum/100);
   console.log(sum);


    //i start with a penny
    //double the amount every day
    //the dojo way
    var earnings = .01;
    var amount = .01;
    for (var i = 2; i <= 100000; i++) {
        earnings = earnings * 2
        console.log("earnings", earnings)
        amount = amount + earnings
        console.log("amount", amount)
        if(amount == Infinity){
            console.log(i)
            break
        }
    }
    



// how many days until he makes $10,000?

       // function days(){
        //    var money =0;
         //   for (var i = 1; i <=days; i++)
        //}
        
  
        
       
  
   
        
    


// how many days until he makes a BILLION?







