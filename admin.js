async function loadAdmin(){

const orderRes = await fetch("/api/orders")

const orders = await orderRes.json()

const productRes = await fetch("/api/products")

const products = await productRes.json()

let revenue=0

let cost=0

let orderCount=0

const today=new Date()

orders.forEach(order=>{

let orderDate=new Date(order.date)

let days=(today-orderDate)/(1000*60*60*24)

if(days<=30){

orderCount++

revenue+=order.total

order.items.forEach(item=>{

let p=products.find(prod=>prod.name===item.name)

if(p){

cost+=p.price*0.6

}

})

}

})

let profit=revenue-cost

document.getElementById("orders").innerText=orderCount
document.getElementById("revenue").innerText=revenue
document.getElementById("cost").innerText=Math.round(cost)
document.getElementById("profit").innerText=Math.round(profit)

const stockDiv=document.getElementById("stock")

products.forEach(p=>{

stockDiv.innerHTML+=`

<div>

${p.name} | Price ₹${p.price} | Stock ${p.stock}

</div>
<hr>

`

})

}

loadAdmin()
