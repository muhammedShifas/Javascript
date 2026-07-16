let fsouth= parseInt(prompt("Enter the final stock available in the South Relief Center: "))
let temp= fsouth+714.32
let N= temp/2.815912
let temp1=2*N
let temp2=2.5*N

// initial 

let ieast= temp1+1800
let iwest= temp1+600
let isouth= temp2+1200

// transfer

let NtoE= N*0.22
let north= N-NtoE
let east= ieast+NtoE
let EtoW= east*0.15
east= east-EtoW
let west= iwest+EtoW
let WtoS= west*0.30
west= west-WtoS
let south= isouth+WtoS
let losouth=south*0.12
south= south-losouth
let Nrec= 1350

north= north+Nrec
let loeast=650
east= east-loeast
let NtoW= north*0.25
north= north-NtoW
west=west+NtoW
let StoN= 2000
north=north+StoN
south=south-StoN
let lowest= west*0.08
west= west-lowest

let totalinitial= N+ieast+isouth+iwest
let totalfinal= south+north+east+west
let totalloss= losouth+loeast+lowest
let totaltrans= NtoE+EtoW+WtoS+NtoW+StoN


alert("Initial North: "+N+"\n"+"Initial East: "+ieast+"\n"+"Initial West: "+iwest+"\n"+"Initial South: "+isouth+"\n"+"Transfer North to East: "+NtoE+
      "\n"+"Transfer East to West: "+EtoW+"\n"+"Transfer West to South: "+WtoS+"\n"+"Loss at South: "+losouth+"\n"+"Emergency stock to Nrec: "+Nrec+
      "\n"+"Loss at East: "+loeast+"\n"+"Transfer South to North: "+StoN+"\n"+"Loss at West: "+lowest+"\n"+"Final South: "+south+
      "\n"+"Final North: "+north+"\n"+"Final East: "+east+"\n"+"Final West: "+west+"\n"+"Total initial stock: "+totalinitial+"\n"+"Total final stock: "+totalfinal+"\n"+"Total unit lost: "+totalloss+"\n"+"Total unit transfered: "+totaltrans)
