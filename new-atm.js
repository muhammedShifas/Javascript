let amount= parseInt(prompt("Enter the amount to withdraw: "))
let temp= amount
let note500= Math.floor(amount/500)

amount= amount%500

let note200= Math.floor(amount/200)
amount= amount%200

let note100= Math.floor(amount/100)
amount= amount%100

let note50= Math.floor(amount/50)
amount= amount%50

let note10= Math.floor(amount/10)
let rem= amount%10

alert("Withdrawel amount:"+temp+"\n"+"500 notes: "+note500+"\n"+"200 notes: "+note200+"\n"+"100 notes: "+note100+"\n"+"50 notes: "+note50+"\n"+"10 notes: "+note10+"\n"+"Remaining amount: ₹"+rem)