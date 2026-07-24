let coins= [50,20,100,10,5,200,25]
let total= 0
let skip= 0
let collected= 0
let collect=[]
let skipped=[]
let target= 250
for(i=0;i<coins.length;i++)
{
    if(total+coins[i]<target){
        total=total+coins[i]
        collected= coins[i]
        collect.push(collected)

    }
    else{
        total= total+0
        skip= coins[i]
         skipped.push(skip)
    }
}
let rem= target-total

console.log("collected coins: ",collect.toString());
console.log("Skipped coins: ",skipped.toString());
console.log("Final total: ",total);
console.log("Remaining to target: ",rem);
