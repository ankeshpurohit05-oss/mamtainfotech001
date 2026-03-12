export default function handler(req,res){

const products = [

{
id:1,
name:"Lenovo ThinkPad A275 T440 T440S T450 T450S T460 X230S X240 X240S X250 X260 X270 Series Internal Battery 45N1113 45N1111 01AV459",
price:1050,
stock:10,
image:"1.jpeg"
},

{
id:2,
name:"HT03XL Battery for HP Pavilion 14 CE CF CM DH DQ FQ Series HSTNN DB8R",
price:800,
stock:10,
image:"2.jpeg"
},

{
id:3,
name:"G91J0 41Wh Battery Replacement for Dell Latitude 3320 3330 3420 3430 3520 3530 Inspiron Series",
price:2350,
stock:10,
image:"3.jpeg"
},

{
id:4,
name:"DELL KXTTW Small Pin Charger 45W 19.5V Adapter for Inspiron 17 Series",
price:850,
stock:15,
image:"4.jpeg"
},

{
id:5,
name:"42Wh WDX0R Replacement Laptop Battery for Dell Inspiron 13 15 5000 7000 Series",
price:2000,
stock:8,
image:"5.jpeg"
},

{
id:6,
name:"Genuine Dell 65W AC Adapter 19.5V 3.34A Big Pin Charger",
price:800,
stock:12,
image:"6.jpeg"
},

{
id:7,
name:"Dell 65W AC Adapter Laptop Charger Original",
price:1100,
stock:12,
image:"7.jpeg"
},

{
id:8,
name:"Dell Inspiron Genuine 65W 4.5mm Tip Laptop Charger Adapter",
price:800,
stock:15,
image:"8.jpeg"
},

{
id:9,
name:"Consistent 19 inch Full HD IPS Monitor CTM1902",
price:1950,
stock:5,
image:"9.jpeg"
},

{
id:10,
name:"HP 215 15.6 Laptop Backpack HP 15 inch Laptop Bag",
price:800,
stock:20,
image:"10.jpeg"
},

{
id:11,
name:"HP 14DH Combo With 3 Month Warranty",
price:6000,
stock:4,
image:"11.jpeg"
},

{
id:12,
name:"HP 15FA Touchpad With Keyboard",
price:4500,
stock:6,
image:"12.jpeg"
},

{
id:13,
name:"ACER PH315-51 Touchpad With Keyboard",
price:3500,
stock:6,
image:"13.jpeg"
},

{
id:14,
name:"135W 19V 7.1A AC Adapter for Acer Aspire 7 Nitro 5",
price:1000,
stock:10,
image:"14.jpeg"
},

{
id:15,
name:"HP M120 Wireless Mouse",
price:450,
stock:25,
image:"15.jpeg"
},

{
id:16,
name:"HP 14DH Touch Display With 3 Month Warranty",
price:6000,
stock:3,
image:"16.jpeg"
},

{
id:17,
name:"HP M10 Wired Mouse",
price:200,
stock:30,
image:"17.jpeg"
}

]

res.status(200).json(products)

}
