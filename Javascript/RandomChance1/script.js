function RandomChance(quarters,limit){
//amount of quarters vs how much it'll take to be done//  
var win= 0;    
var winnings= 0;                                    
    while (quarters > 0) {
        quarters--;
        win = Math.floor(Math.random() *100);
        if (win === 10) { 
 //random number
            winnings = Math.floor(Math.random() *(100-50+1)) + 50; 
            quarters = quarters + winnings; 
            console.log(quarters);
        }
        if (quarters > limit){
            break;
    }       
   }
 
}

// this is for generating random winnings between 50 and 100          
//
//var winning = (Math.floor(Math.random() *(100-50+1)) + 50);   

console.log(RandomChance(1000,1300));
