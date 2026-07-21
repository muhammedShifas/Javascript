let numbers= [1,2,3,45,46,67,55,99]
let num= parseInt(prompt("Enter the number to be searched: "))

let found= false
for(i=0;i<numbers.length;i++)
{
   if(numbers[i] == num)
   {
    found= true
    if(found==true){
    alert("Number found "+"\n"+"The position of the number is: "+i)
    }
   }
}

if (found==false){
  alert("Not found")
}


