const products = [

{
name:"8GB Laptop RAM",
price:2500,
image:"images/ram.jpg"
},

{
name:"512GB SSD",
price:3500,
image:"images/ssd.jpg"
},

{
name:"Laptop Battery",
price:2800,
image:"images/battery.jpg"
},

{
name:"Laptop Keyboard",
price:1200,
image:"images/keyboard.jpg"
}

];

let cart=[];

function displayProducts(){

const list=document.getElementById("product-list");

products.forEach((p,index)=>{

list.innerHTML+=`

<div class="card">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="addToCart(${index})">Add to Cart</button>

</div>

`;

});

}

displayProducts();


function addToCart(index){

cart.push(products[index]);

updateCart();

}


function updateCart(){

const cartItems=document.getElementById("cart-items");

cartItems.innerHTML="";

let total=0;

cart.forEach(item=>{

cartItems.innerHTML+=`<li>${item.name} - ₹${item.price}</li>`;

total+=item.price;

});

document.getElementById("total").innerText=total;

}


function orderWhatsApp(){

let message="Hello Mamta Infotech, I want to order:%0A";

cart.forEach(item=>{

message+=item.name+" - ₹"+item.price+"%0A";

});

window.open(`https://wa.me/919901129675?text=${message}`);

}


document.getElementById("orderForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your order request has been submitted. We will contact you soon.");

});