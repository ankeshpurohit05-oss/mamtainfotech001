async function placeOrder(){

if(cart.length===0){
alert("Cart empty")
return
}

let order = {
items: cart,
total: total
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

alert("Order placed successfully")

}
