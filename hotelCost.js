function hotelCost(days){
var cost=0;
 if(days>0){
    if(days<=10){
        cost= days*100;
   }
   else if(days<=20){
       var firstPart= 10*100;
       var remainingDays= days-10;
       var secondPart= remainingDays*80;
       cost= firstPart + secondPart;
   }
   else{
       var firstPart= 10*100;
       var secondPart= 10*80;
       var remainingDays= days-20;
       var thirdPart= remainingDays*50;
       cost= firstPart + secondPart + thirdPart;
   }
   return cost;
   
   }
   else{
       return "Invalid Input!!! Please input valid things";
   }
 }
 
var total = hotelCost(45);
console.log(total);