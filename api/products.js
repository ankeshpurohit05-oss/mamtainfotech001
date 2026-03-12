export default function handler(req,res){

const products = [

{id:1,name:"Lenovo ThinkPad Battery 45N1113",price:1050,stock:10,image:"1.jpeg"},
{id:2,name:"HT03XL Battery HP Pavilion Series",price:800,stock:12,image:"2.jpeg"},
{id:3,name:"G91J0 Battery Dell Latitude Series",price:2350,stock:8,image:"3.jpeg"},
{id:4,name:"Dell KXTTW 45W Small Pin Charger",price:850,stock:15,image:"4.jpeg"},
{id:5,name:"WDX0R Dell Inspiron Battery",price:2000,stock:6,image:"5.jpeg"},
{id:6,name:"Dell Genuine 65W Big Pin Adapter",price:800,stock:20,image:"6.jpeg"},
{id:7,name:"Dell 65W Laptop Adapter",price:1100,stock:14,image:"7.jpeg"},
{id:8,name:"Dell Inspiron 65W 4.5mm Charger",price:800,stock:10,image:"8.jpeg"},
{id:9,name:"Consistent 19 Inch Monitor",price:1950,stock:5,image:"9.jpeg"},
{id:10,name:"HP 15.6 Laptop Backpack",price:800,stock:18,image:"10.jpeg"},
{id:11,name:"HP 14DH Combo",price:6000,stock:4,image:"11.jpeg"},
{id:12,name:"HP 15FA Touchpad With Keyboard",price:4500,stock:3,image:"12.jpeg"},
{id:13,name:"ACER PH315-51 Touchpad With Keyboard",price:3500,stock:4,image:"13.jpeg"},
{id:14,name:"Acer 135W Adapter",price:1000,stock:10,image:"14.jpeg"},
{id:15,name:"HP M120 Wireless Mouse",price:450,stock:25,image:"15.jpeg"},
{id:16,name:"HP 14DH Touch Display",price:6000,stock:2,image:"16.jpeg"},
{id:17,name:"HP M10 Wired Mouse",price:200,stock:30,image:"17.jpeg"}

]

res.status(200).json(products)

}
