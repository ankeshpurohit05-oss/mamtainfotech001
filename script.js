let cart = []
let total = 0

async function loadProducts(){

const res = await fetch("/api/products")
const products = await res.json()

const container = document.querySelector(".product-grid")
container.innerHTML=""

products.forEach(p => {

const div = document.createElement("div")
div.className="product"

div.innerHTML = `
<img src="${p.image}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart('${p.name}',${p.price})">
Add To Cart
</button>
`

container.appendChild(div)

})

}

function addToCart(name,price){

cart.push({name,price})
total += price

updateCart()

}

function updateCart(){

const list = document.getElementById("cart-items")
const totalBox = document.getElementById("total")

list.innerHTML=""

cart.forEach(item=>{

const li = document.createElement("li")
li.textContent = item.name+" - ₹"+item.price
list.appendChild(li)

})

totalBox.textContent = total

}

window.onload = loadProducts
