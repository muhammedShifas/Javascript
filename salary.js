let total= parseInt(prompt("Enter the company's total annual revenue: "))
temp= total
let emp= Math.floor(total*0.28)
total=Math.floor(total-emp)
alert("Employees salary deduction"+emp+"\n"+"The balance after employee salary deduction is : "+total);


let mar= Math.floor(total*0.12)
total=Math.floor(total-mar)
alert("Marketing deduction"+mar+"\n"+"The balance after marketing deduction is : "+total);


let rent= Math.floor(total*0.07)
total=Math.floor(total-rent)
alert("Office rent deduction"+rent+"\n"+"The balance after Office rent deduction is : "+total);

let tax= Math.floor(total*0.18)
total=Math.floor(total-tax)
alert("Government tax deduction"+tax+"\n"+"The balance after Government tax deduction is : "+total);

let save= Math.floor(total*0.10)
total=Math.floor(total-save) 
alert("Company savings deduction"+save+"\n"+"The balance after company savings deduction is : "+total);
temp=temp-total
alert("Final company balance is :"+total+"\n"+"Total expence: "+temp)

