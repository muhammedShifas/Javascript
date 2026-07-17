let names= ["ans","aswin","sinan"]
let name= prompt("Enter the name to be added: ")
let position= parseInt(prompt("Enter the position where the name to be added: "))
let del= parseInt(prompt("Enter the count to be removed: "))
names.splice(position,del,name)
console.log(names)