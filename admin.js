fetch("/api/orders")
.then(res=>res.json())
.then(data=>{

let revenue=0

data.forEach(o=>{
revenue+=o.total
})

document.getElementById("stats").innerHTML=`

Total Orders: ${data.length}<br>
Revenue: ₹${revenue}<br>
Profit: ₹${revenue*0.3}

`

})
