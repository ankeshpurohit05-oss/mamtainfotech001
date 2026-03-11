let cart=[]
let total=0

fetch("/api/products")
.then(res=>res.json())
.then(data=>{

let html=""

data.forEach(p=>{

html += `
<div class="product ${p.category}">
<img src="images/${p.image}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<p>Stock: ${p.stock}</p>
<button onclick="add('${p.name}',${p.price})">Add</button>
</div>
`

})

document.getElementById("products").innerHTML=html

})

function add(name,price){

cart.push({name,price})

total += price

updateCart()

}

function updateCart(){

let list=document.getElementById("cart")

list.innerHTML=""

cart.forEach(i=>{

list.innerHTML += `<li>${i.name} ₹${i.price}</li>`

})

document.getElementById("total").innerText=total

}

function placeOrder(){

fetch("/api/orders",{

method:"POST",
headers:{'Content-Type':'application/json'},

body:JSON.stringify({
cart:cart,
total:total
})

})

alert("Order placed")

cart=[]
total=0

updateCart()

}

document.getElementById("search").addEventListener("keyup",function(){

let v=this.value.toLowerCase()

document.querySelectorAll(".product").forEach(p=>{

p.style.display=p.innerText.toLowerCase().includes(v)?"block":"none"

})

})

function filterCategory(cat){

document.querySelectorAll(".product").forEach(p=>{

if(cat==="all"||p.classList.contains(cat)){
p.style.display="block"
}else{
p.style.display="none"
}

})

}
