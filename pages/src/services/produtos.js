 const hostAddress = process.env.NEXT_PUBLIC_HOST_ADDRESS
 
 export const fetchProdutos = async () => {
  const produtos = await fetch(`http://${hostAddress}/api/produtos`).then(res => res.json())

  return produtos
}

export const fetchProduto = async (id) => {
  const produto = await fetch(`http://${hostAddress}/api/produtos/${id}`).then(res => res.json())

  return produto
}

