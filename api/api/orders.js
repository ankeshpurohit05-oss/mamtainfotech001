let orders = []

export default function handler(req,res){

if(req.method === "POST"){

const order = req.body

order.id = Date.now()
order.date = new Date()

orders.push(order)

res.status(200).json(order)

}

if(req.method === "GET"){

res.status(200).json(orders)

}

}
