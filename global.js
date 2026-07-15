let total= parseInt(prompt("Enter the no.of product: "))
let box= Math.floor(total/24)
let rempro= total%24
let pallet= Math.floor(box/20)
let rembox= box%20
let container= Math.floor(pallet/18)
let rempal= pallet%18
let truck= Math.floor(container/15)
let remcon= container%15
let dis= Math.floor(truck/12)
let remtru= truck%12
let reware= Math.floor(dis/10)
let remdis= dis%10
let coware= Math.floor(reware/8)
let remwa= reware%8

alert("Country warehouses: "+coware)
alert("Regional Warehouses: "+remwa)
alert("Distribution Center: "+remdis)
alert("Trucks: "+remtru)
alert("Containers: "+remcon)
alert("Pallets: "+rempal)
alert("Boxes: "+rembox)
alert("Remaining : "+rempro)