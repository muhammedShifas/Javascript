let product= parseInt(prompt("Enter the no. of products: "))

let fullbox=Math.floor(product/24)
let rem= product%24
let container=Math.floor(fullbox/15)
let rembox= fullbox%15

alert("Full containers: "+container)
alert("Extra boxes: "+rembox)
alert("Remaining product: "+rem)