let total= parseInt(prompt("Enter the total no of products: "))
let box= Math.floor(total/24)
let rem= total%24
let pal= Math.floor(box/18)
let rembox= box%18
let con= Math.floor(pal/12)
let rempal= pal%12
let ship= Math.floor(con/8)
let remcon= con%8

alert("Full ships: "+ship)
alert("Extra containers: "+remcon)

alert("Extra pallets: "+rempal)
alert("Extra boxes: "+rembox)
alert("Remaining products: "+rem)