function login(){

let user = document.getElementById("username").value
let pass = document.getElementById("password").value

/* ADMIN CREDENTIALS */

let adminUser = "admin"
let adminPass = "mamta123"

if(user === adminUser && pass === adminPass){

localStorage.setItem("adminLoggedIn","true")

window.location = "admin.html"

}
else{

document.getElementById("error").innerText = "Invalid Username or Password"

}

}
