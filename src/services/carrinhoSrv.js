const carrinhoServ = {
  addProduto: async produtoId => {
    await fetch(`${process.env.NEXT_PUBLIC_HOST_ADDRESS}/api/carrinhos/1`, {
      method: 'POST',
      body: JSON.stringify({ProdutoId: produtoId}),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
  },

  getCarrinho: async () => {
     const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_ADDRESS}/api/carrinhos/1`)
     const carrinho = await res.json()
     return carrinho
  }
}

export default carrinhoServ