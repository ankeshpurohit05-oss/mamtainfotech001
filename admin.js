if(localStorage.getItem("adminLoggedIn") !== "true"){
window.location = "admin-login.html"
}


function loadAdmin(){

let orders = JSON.parse(localStorage.getItem("orders")) || []

let revenue = 0
let cost = 0
let count = 0

const today = new Date()

orders.forEach(order=>{

let orderDate = new Date(order.date)

let days = (today - orderDate)/(1000*60*60*24)

if(days <= 30){

count++

revenue += order.total

order.items.forEach(item=>{
cost += item.price * 0.6
})

}

})

let profit = revenue - cost

document.getElementById("orders").innerText = count
document.getElementById("revenue").innerText = revenue
document.getElementById("cost").innerText = Math.round(cost)
document.getElementById("profit").innerText = Math.round(profit)

}

loadAdmin()
