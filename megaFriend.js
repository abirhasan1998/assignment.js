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
           if(friends[j].length<maximum){
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