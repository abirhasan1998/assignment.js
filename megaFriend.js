function megaFriend(friends){
   var counter=0;
   for(var i=0; i<friends.length; i++){
       if(typeof friends[i]=="string"){
           counter++;
       }

   }
   if(friends.length != 0  &&  counter == friends.length){
       maximum= friends[0].length;
       longest=friends[0];
       for(j=0; j<friends.length; j++ ){
           if(friends[j].length>maximum){
               maximum=friends[j].length;
               longest=friends[j];

           }
       }
       return longest;
   } 
   else{
       return "Invalid Input!!!";
   }
  

}
var arrayName=["Abir","Kawsar","Jubayer","Rashidul","Mehidi"];
var result = megaFriend(arrayName);
console.log(result);





// function kilometerToMeter(kilometer){
//     var meter;
//     if(kilometer > 0){
//         meter = kilometer * 1000;
//         return meter;
//     }
//     else{
//         return "Invalid";
//     }
    
// }

// function budgetCalculator(qWatch, qMobile, qLaptop){
//     var watchCost = 50 * qWatch;
//     var mobileCost = 100 * qMobile;
//     var laptopCost = 500 * qLaptop;
    
//     var total = watchCost + mobileCost + laptopCost;
//     return total;
// }

// function hotelCost(days){
//     var cost;
//     if(days > 0){
//         if(days <= 10){
//             cost = 100 * days;
//             return cost;
//         }
//         else if(days <= 20){
//             var firstpart = 10 * 100;
//             var remain = days - 10;
//             var secondpart = 80 * remain;
//             cost = firstpart + secondpart;
//             return cost;
//         }
//         else{
//             var firstpart = 10 * 100;
//             var secondpart = 10 * 80;
//             var remain = days - 20;
//             var thirdpart = 50 * remain;
//             cost = firstpart + secondpart + thirdpart;
//             return cost;
//         }
//     }
//     else{
//         return "Days must be positive";
//     }
// }


// function megaFriend(friends){
//     var large = friends[0];
//     for(var i = 0; i < friends.length; i++){
//         if(friends[i].length > large.length){
//             large = friends[i];
//         }
//     }
//     return large ;
// }