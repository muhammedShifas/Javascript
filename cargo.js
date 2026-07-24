let weights= [1200,200]
let total= 0
let loaded=[]
let Capacity= 1000
let cannot= 0


for(let i=0;i<weights.length;i++)
{
   if(total+weights[i]<=Capacity){
    total= total+weights[i]
    loaded.push(weights[i])
   }
   else{
    cannot= weights[i]
    
    break;
   }
}
let boxesloaded= loaded.length
let rem= weights.length-loaded.length



console.log("Loaded boxes: ",loaded.toString());
console.log("Total weights: ",total);
console.log("Boxes loaded: ",boxesloaded);
console.log("Boxes remaining: ",rem);
if(rem>0){
console.log("Next box ("+cannot+"kg) cannot be loaded because it exceeds the truck capacity");
}