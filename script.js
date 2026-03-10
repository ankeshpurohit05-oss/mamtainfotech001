function orderProduct(product){

let phone = "919901129675"

let message = "Hello Mamta Infotech, I want to order: " + product

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message)

window.open(url)

}
