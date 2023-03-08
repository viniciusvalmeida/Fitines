 export const fetchProdutos = async () => {
  const produtos = await fetch('http://localhost:3000/api/produtos').then(res => res.json())

  return produtos
}

export const fetchProduto = async (id) => {
  const produto = await fetch(`http://localhost:3000/api/produtos/${id}`).then(res => res.json())

  return produto
}

