let prices= [120,118,122,125,119,130,128,150]
let x= 0
let y= 0
let z= 0
let p= 0
let w=0
for(i=0;i<prices.length-1;i++){
    x=prices[i+1]-prices[i]
    if(x>w){
        w=x
    }
    if(x<0){
      y=y+1
    }
    else if(x == 0){
       z=z+1
    }
    else{
        p=p+1
    }
   
}
console.log("Increased Days: ",p);
console.log("Decreased Days: ",y);
console.log("unchanged Days: ",z);
console.log("Biggest increase: ",w);

