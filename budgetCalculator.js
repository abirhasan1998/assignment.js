function budgetCalculator(watch,mobile,laptop){
    if(watch>=0 && mobile>=0 && laptop>0){
        var totalCost;
        totalCost = (watch*50) + (mobile*100) + (laptop*500);
        return totalCost;
    }
    else{
        return "Invalid Number";
    }
}
var result= budgetCalculator(1,0,2);
console.log(result);