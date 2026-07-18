let numbers= [1,2,3,45,46,67,85,99]
let num= parseInt(prompt("Enter the number to be searched: "))

for(i=0;i<numbers.length;i++)
{
   if(numbers[i] == num){
          alert("The number found: "+num+"\n"+"The position of the number is: "+i)
        
   }
 else {
   alert("Not found")
 }
}




