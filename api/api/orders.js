let orders=[]

export default function handler(req,res){

if(req.method==="POST"){

orders.push(req.body)

return res.status(200).json({message:"Order saved"})

}

res.status(200).json(orders)

}
