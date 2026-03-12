let cart = []
let total = 0

/* PRODUCT LIST */

const products = [

{image:"1.jpeg",name:"Lenovo ThinkPad A275 T440 T440S T450 T450S T460 X230S X240 X240S X250 X260 X270 Series Internal 45N1113 45N1111 01AV459 45N1109 45N1110 45N1773 11.4V 24Wh",price:1050},

{image:"2.jpeg",name:"HT03XL Battery for HP Pavilion 14 14-CE 14-CF 14-CM 14M-DH 14-DQ 14-FQ 15-CW 15-DA 15-DB 15-DW 15-EF 17-BY 17-CA HSTNN-DB8R",price:800},

{image:"3.jpeg",name:"G91J0 41Wh Battery Replacement for Dell Latitude 3320 3330 3420 3430 3520 3530 Inspiron 3510 3511 3515 5310 5410 5418 5510 5515 5518 Vostro",price:2350},

{image:"4.jpeg",name:"DELL KXTTW Small pin charger 45W 19.5V Adapter",price:850},

{image:"5.jpeg",name:"42Wh WDX0R Replacement Laptop Battery for Dell Inspiron 13 15 5000 7000 Series",price:2000},

{image:"6.jpeg",name:"Genuine Dell 65W AC Adapter 19.5V 3.34A Big Pin Charger",price:800},

{image:"7.jpeg",name:"Dell 65W AC Adapter Laptop Charger",price:1100},

{image:"8.jpeg",name:"Dell Inspiron Laptop Charger Genuine 65W 4.5mm Tip Adapter",price:800},

{image:"9.jpeg",name:"Consistent 48.26 cm 19 inch Full HD IPS Panel Monitor CTM1902",price:1950},

{image:"10.jpeg",name:"HP Laptop Backpack 35L98AA 15.6 inch",price:800},

{image:"11.jpeg",name:"HP 14DH Combo With 3 Month Warranty",price:6000},

{image:"12.jpeg",name:"HP 15FA Touchpad With Keyboard",price:4500},

{image:"13.jpeg",name:"ACER PH315-51 Touchpad With Keyboard",price:3500},

{image:"14.jpeg",name:"135W 19V 7.1A AC Adapter for Acer Aspire 7 V5 Nitro 5",price:1000},

{image:"15.jpeg",name:"HP M120 Wireless Mouse",price:450},

{image:"16.jpeg",name:"HP 14DH Touch Display With 3 Month Warranty",price:6000},

{image:"17.jpeg",name:"HP M10 Wired Mouse",price:200}

]

/* LOAD PRODUCTS */

function loadProducts(){

const grid = document.querySelector(".product-grid")

grid.innerHTML = ""

products.forEach(p => {

const div = document.createElement("div")

div.className = "product"

div.innerHTML = `
<img src="${p.image}" width="200">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>
`

grid.appendChild(div)

})

}

/* ADD TO CART */

function addToCart(name,price){

cart.push({name,price})

total += price

updateCart()

}

/* UPDATE CART */

function updateCart(){

const list = document.getElementById("cart-items")

list.innerHTML = ""

cart.forEach(item => {

const li = document.createElement("li")

li.innerText = item.name + " - ₹" + item.price

list.appendChild(li)

})

document.getElementById("total").innerText = total

}

/* PLACE ORDER */

function placeOrder(){

if(cart.length === 0){
alert("Cart Empty")
return
}

/* Save order */

let orders = JSON.parse(localStorage.getItem("orders")) || []

orders.push({
items: cart,
total: total,
date: new Date()
})

localStorage.setItem("orders", JSON.stringify(orders))

/* WhatsApp message */

let message = "Order from Mamta Infotech:%0A%0A"

cart.forEach(item=>{
message += item.name + " - ₹" + item.price + "%0A"
})

message += "%0ATotal ₹" + total

window.open("https://wa.me/919901129675?text=" + message)

/* Clear cart */

cart = []
total = 0

updateCart()

}

/* RUN WHEN PAGE LOADS */

window.onload = loadProducts
