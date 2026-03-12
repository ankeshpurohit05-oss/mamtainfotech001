let cart=[]
let total=0

async function loadProducts(){

const res = await fetch("/api/products")

const products = await res.json()

const grid = document.querySelector(".product-grid")

grid.innerHTML=""

products.forEach(p=>{

const div=document.createElement("div")

div.className="product"

div.innerHTML=`

<img src="${p.image}" width="200">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<p>Stock: ${p.stock}</p>

<button onclick="addToCart('${p.name}',${p.price})">
Add To Cart
</button>

`

grid.appendChild(div)

})

}

function addToCart(name,price){

cart.push({name,price})

total+=price

updateCart()

}

function updateCart(){

const list=document.getElementById("cart-items")

const totalBox=document.getElementById("total")

list.innerHTML=""

cart.forEach(item=>{

const li=document.createElement("li")

li.innerText=item.name+" ₹"+item.price

list.appendChild(li)

})

totalBox.innerText=total

}

async function placeOrder(){

if(cart.length===0){

alert("Cart empty")

return

}

let order={

items:cart,
total:total

}

await fetch("/api/orders",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(order)

})

let message="Order from Mamta Infotech:%0A"

cart.forEach(item=>{

message+=item.name+" ₹"+item.price+"%0A"

})

message+="Total ₹"+total

window.open("https://wa.me/919901129675?text="+message)

cart=[]
total=0

updateCart()

alert("Order placed")

}

window.onload=loadProducts
