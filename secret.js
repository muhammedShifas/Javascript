let pin= parseInt(prompt("Enter the 4digits pin: "))
let d4= pin%10
pin= pin-d4
pin= pin/10
let d3= pin%10
pin= pin-d3
pin= pin/10
let d2= pin%10
pin= pin-d2
pin= pin/10
let d1= pin%10
pin= pin-d1
pin= pin/10

let sum= d4+d3+d2+d1
x= sum%7
alert("Digits: "+d1+","+d2+","+d3+","+d4+"\n"+"Sum: "+sum+"\n"+"Sum % 7: "+x+"(IF 0 the code is valid,if not its invalid)")

