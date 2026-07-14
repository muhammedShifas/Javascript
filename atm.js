let amount= parseInt(prompt("Enter the amount to withdraw: ₹"))
let note5= Math.floor(amount/500) 
let rem5= amount % 500

let note2= Math.floor(rem5/200)

let rem2= rem5 % 200

let note1= Math.floor(rem2/100)

let rem= rem2 % 100


alert("500 notes: "+note5)
alert("200 notes: "+note2)
alert("100 notes: "+note1)

alert("Remaining amount: ₹"+rem)
