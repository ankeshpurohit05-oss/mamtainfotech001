function placeOrder(){

if(cart.length === 0){

alert("Cart is empty")
return

}

/* save order locally */

let orders = JSON.parse(localStorage.getItem("orders")) || []

let order = {
items: cart,
total: total,
date: new Date()
}

orders.push(order)

localStorage.setItem("orders",JSON.stringify(orders))

/* whatsapp message */

let message="Order from Mamta Infotech:%0A%0A"

cart.forEach(item=>{
message+=item.name+" ₹"+item.price+"%0A"
})

message+="%0ATotal ₹"+total

window.open("https://wa.me/919901129675?text="+message)

/* clear cart */

cart=[]
total=0

updateCart()

alert("Order placed")

}
