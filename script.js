let cart = [];
let total = 0;

/* Load products from API */
async function loadProducts(){

const res = await fetch("/api/products");
const products = await res.json();

const container = document.querySelector(".product-grid");

container.innerHTML = "";

products.forEach(product => {

const div = document.createElement("div");
div.className = "product";

div.innerHTML = `
<img src="${product.image}" width="200">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="addToCart('${product.name}',${product.price})">
Add To Cart
</button>
`;

container.appendChild(div);

});

}

/* Add item to cart */
function addToCart(name,price){

cart.push({
name:name,
price:price
});

total += price;

updateCart();

}

/* Update cart UI */
function updateCart(){

const cartList = document.getElementById("cart-items");
const totalBox = document.getElementById("total");

cartList.innerHTML = "";

cart.forEach(item => {

const li = document.createElement("li");

li.textContent = item.name + " - ₹" + item.price;

cartList.appendChild(li);

});

totalBox.textContent = total;

}

/* Place order via WhatsApp */
function placeOrder(){

if(cart.length === 0){

alert("Cart is empty");

return;

}

let message = "Order from Mamta Infotech:%0A";

cart.forEach(item => {

message += item.name + " - ₹" + item.price + "%0A";

});

message += "Total: ₹" + total;

window.open("https://wa.me/919901129675?text=" + message);

}

/* Load products when page opens */
window.onload = loadProducts;
