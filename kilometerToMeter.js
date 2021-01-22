function kilometerToMeter(kilometer){
   var meter;

   if(kilometer>0){
     meter = kilometer *1000;
    return meter;
   }
   else{
    return "Distance Cann't be Negative. Please put a Positive value";
   }
}
var result= kilometerToMeter(21);
console.log(result);
