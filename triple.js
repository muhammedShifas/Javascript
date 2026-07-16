// reservoir A

let endA= 4250
let initialA= 4250/0.85
let lostA= initialA*0.15

// reservoir B

let endB= 9000
let initialB= 9000/0.90
let lostB= initialB*0.10

// reservoir C

let endC= 9250
let initialC= 9250+250
let lostC= 250

let total= endA+endB+endC

alert("Initial Reservoir A: "+initialA+"\n"+"Initial Reservoir B: "+initialB+"\n"+"Initial Reservoir C: "+initialC+"\n"+"Water lost from reservoir A: "+lostA+"\n"+"Water lost from reservoir B: "+lostB+"\n"+"Water lost from reservoir C: "+lostC+"\n"+"Final reservoir A: "+endA+"\n"+"Final reservoir B: "+endB+"\n"+"Final reservoir C: "+endC+"\n"+"Total final water: "+total)