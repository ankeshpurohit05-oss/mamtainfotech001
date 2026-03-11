let cart=[]
let total=0

function addToCart(name,price){

let item=cart.find(p=>p.name===name)

if(item){
item.qty++
}else{
cart.push({name,price,qty:1})
}

updateCart()

}

function updateCart(){

let list=document.getElementById("cart")
list.innerHTML=""

total=0

cart.forEach((item,index)=>{

let itemTotal=item.price*item.qty

total+=itemTotal

let li=document.createElement("li")

li.innerHTML=
item.name+" ₹"+item.price+
" x "+item.qty+
" = ₹"+itemTotal+
" <button onclick='increase("+index+")'>+</button>"+
" <button onclick='decrease("+index+")'>-</button>"+
" <button onclick='removeItem("+index+")'>❌</button>"

list.appendChild(li)

})

document.getElementById("total").innerText=total

}

function increase(i){
cart[i].qty++
updateCart()
}

function decrease(i){

cart[i].qty--

if(cart[i].qty<=0){
cart.splice(i,1)
}

updateCart()

}

function removeItem(i){

cart.splice(i,1)

updateCart()

}

function sendWhatsApp(){

let msg="Order from Mamta Infotech:%0A"

cart.forEach(item=>{
msg+=item.name+" x"+item.qty+" = ₹"+(item.price*item.qty)+"%0A"
})

msg+="Total = ₹"+total

window.open("https://wa.me/919901129675?text="+msg)

}

function downloadPDF(){

const { jsPDF } = window.jspdf

let doc=new jsPDF()

let y=10

doc.text("Mamta Infotech Bill",10,y)

y+=10

cart.forEach(item=>{
doc.text(item.name+" x"+item.qty+" = ₹"+(item.price*item.qty),10,y)
y+=10
})

doc.text("Total: ₹"+total,10,y+10)

doc.save("bill.pdf")

}

function searchProduct(){

let input=document.getElementById("search").value.toLowerCase()

let products=document.querySelectorAll(".product")

products.forEach(p=>{

let text=p.innerText.toLowerCase()

p.style.display=text.includes(input)?"block":"none"

})

}

function filterCategory(cat){

let products=document.querySelectorAll(".product")

products.forEach(p=>{

if(cat==="all"||p.classList.contains(cat)){
p.style.display="block"
}else{
p.style.display="none"
}

})

}

function toggleDark(){
document.body.classList.toggle("dark")
}
