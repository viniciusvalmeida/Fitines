import db from "../../../models/index";

export default async function vendas(req, res) {
  const reqMethod = req.method

  switch (reqMethod) {
    case 'GET':
      
      break;
  
    default:
        res.status(200).json({ message: 'Welcome to Vendas API!'})
      break;
  }
}