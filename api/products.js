export default function handler(req,res){

res.status(200).json([

{name:"HP 13AY Display",price:9999,stock:5,image:"1.jpeg",category:"display"},
{name:"HP 14DH Display",price:5999,stock:7,image:"2.jpeg",category:"display"},
{name:"M120 Wireless Mouse",price:415,stock:10,image:"3.jpeg",category:"mouse"},
{name:"M10 Wired Mouse",price:185,stock:15,image:"4.jpeg",category:"mouse"},
{name:"Acer Charger",price:950,stock:8,image:"7.jpeg",category:"charger"}

])

}
