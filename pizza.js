let pizza= parseInt(prompt("Enter the no. of pizzas: "))
let friend= parseInt(prompt("Enter no of friends: "))
 
total= pizza*8
slice= Math.floor(total/friend)
temp= slice*friend
remain= total-temp


alert("Total slices: "+total)
alert("Slices per friend: "+slice)
alert("Remaining slices: "+remain)

