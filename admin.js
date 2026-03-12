async function loadAdmin(){

const res = await fetch("/api/products")

const products = await res.json()

const stockDiv=document.getElementById("stock")

products.forEach(p=>{

stockDiv.innerHTML+=`

<div>

${p.name} | Price ₹${p.price} | Stock ${p.stock}

</div>

<hr>

`

})

}

loadAdmin()
