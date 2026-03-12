async function loadAdmin(){

const res = await fetch("/api/products")

const products = await res.json()

const stockDiv = document.getElementById("stock")

let revenue = 0

let cost = 0

products.forEach(p=>{

stockDiv.innerHTML += `
<div>
${p.name} | Price ₹${p.price} | Stock ${p.stock}
</div>
<hr>
`

revenue += p.price * (10 - p.stock)

cost += p.price * 0.6

})

document.getElementById("revenue").innerText = revenue

document.getElementById("profit").innerText = revenue - cost

}

loadAdmin()
