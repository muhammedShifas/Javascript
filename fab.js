let num=parseInt(prompt("Enter the number: "))
let x= 0
let y= 1


if(num<0){
    console.log("Invalid");
    
}
else{
console.log(x);
console.log(y);
for(i=0;i<num;i++){
   z=x+y
   x= y
   y= z

   console.log(z);
    
}
}