export default function handler(req,res){

const products = [

{ id:1,name:"HP 13AY Display",price:9999,stock:5,image:"1.jpeg"},
{ id:2,name:"HP 14DH Display",price:5999,stock:7,image:"2.jpeg"},
{ id:3,name:"M120 Wireless Mouse",price:415,stock:20,image:"3.jpeg"},
{ id:4,name:"M10 Wired Mouse",price:185,stock:25,image:"4.jpeg"},
{ id:5,name:"Acer PH315-51 Touchpad",price:3500,stock:3,image:"5.jpeg"},
{ id:6,name:"HP 15FA Blue Touchpad",price:5000,stock:2,image:"6.jpeg"},
{ id:7,name:"Acer 135W Charger",price:950,stock:10,image:"7.jpeg"},
{ id:8,name:"HP Laptop Bag",price:700,stock:12,image:"8.jpeg"},
{ id:9,name:"Consistent Monitor",price:1850,stock:6,image:"9.jpeg"},
{ id:10,name:"Dell Original Adapter",price:1000,stock:8,image:"10.jpeg"},

{ id:11,name:"Laptop Display Panel",price:4500,stock:6,image:"11.jpeg"},
{ id:12,name:"Laptop Keyboard Panel",price:1500,stock:10,image:"12.jpeg"},
{ id:13,name:"Gaming Laptop Keyboard",price:2500,stock:8,image:"13.jpeg"},
{ id:14,name:"Acer Laptop Charger",price:1200,stock:9,image:"14.jpeg"},
{ id:15,name:"HP Wireless Mouse",price:500,stock:15,image:"15.jpeg"},
{ id:16,name:"Laptop Screen Replacement",price:4000,stock:4,image:"16.jpeg"},
{ id:17,name:"HP Wired Mouse",price:250,stock:18,image:"17.jpeg"}

]

res.status(200).json(products)

}
