let cart = []
let total = 0

function addToCart(name,price){

cart.push({name,price})

total += price

updateCart()

}

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

/* UPDATED PLACE ORDER FUNCTION */

function placeOrder(){

if(cart.length === 0){
alert("Cart Empty")
return
}

/* Save order locally */

let orders = JSON.parse(localStorage.getItem("orders")) || []

orders.push({
items: cart,
total: total,
date: new Date()
})

localStorage.setItem("orders", JSON.stringify(orders))

/* WhatsApp order message */

let message="Order from Mamta Infotech:%0A%0A"

cart.forEach(item=>{
message += item.name + " - ₹" + item.price + "%0A"
})

message += "%0ATotal ₹" + total

window.open("https://wa.me/919901129675?text=" + message)

/* Clear cart */

cart=[]
total=0

updateCart()

alert("Order placed successfully")

}
