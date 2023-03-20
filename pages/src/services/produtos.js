 const hostAddress = process.env.NEXT_PUBLIC_HOST_ADDRESS
 
 export const fetchProdutos = async () => {
  const produtos = await fetch(`${hostAddress}/api/produtos`,{
    Headers: {
    "Content-Type": "application/json"
  }
  })
  .then(res => res.json())

  return produtos
}

export const fetchProduto = async (id) => {
  const produto = await fetch(`${hostAddress}/api/produtos/${id}`,{
    Headers: {
    "Content-Type": "application/json"
  }
  }).then(res => res.json())

  return produto
}

