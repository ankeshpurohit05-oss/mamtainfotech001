let cart = []
let total = 0

/* Load products from API */
async function loadProducts(){

const res = await fetch("/api/products")
const products = await res.json()

const grid = document.querySelector(".product-grid")

grid.innerHTML = ""

products.forEach(p => {

const div = document.createElement("div")

div.className = "product"

div.innerHTML = `
<img src="${p.image}" width="200">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<p>Stock: ${p.stock}</p>

<button onclick="addToCart('${p.name}',${p.price})">
Add to Cart
</button>
`

grid.appendChild(div)

})

}

/* Add product to cart */

function addToCart(name,price){

cart.push({
name:name,
price:price
})

total += price

updateCart()

}

/* Update cart display */

function updateCart(){

const list = document.getElementById("cart-items")
const totalBox = document.getElementById("total")

list.innerHTML = ""

cart.forEach(item => {

const li = document.createElement("li")

li.innerText = item.name + " - ₹" + item.price

list.appendChild(li)

})

totalBox.innerText = total

}

/* WhatsApp order system */

function placeOrder(){

if(cart.length === 0){

alert("Cart is empty")

return

}

let message = "Order from Mamta Infotech:%0A%0A"

cart.forEach(item => {

message += item.name + " - ₹" + item.price + "%0A"

})

message += "%0ATotal Amount: ₹" + total

let phone = "919901129675"

let whatsappURL = "https://wa.me/" + phone + "?text=" + message

window.open(whatsappURL,"_blank")

/* Clear cart after order */

cart = []
total = 0

updateCart()

}

/* Load products when page opens */

window.onload = loadProducts
