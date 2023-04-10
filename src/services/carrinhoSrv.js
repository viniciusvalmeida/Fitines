const carrinhoServ = {
  addProduto: async produtoId => {
    await fetch(`${process.env.NEXT_PUBLIC_HOST_ADDRESS}/api/carrinhos/1`, {
      method: 'POST',
      body: JSON.stringify({ProdutoId: produtoId}),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
  },

  getCarrinho: async () => {
     const carrinho = fetch(`${process.env.NEXT_PUBLIC_HOST_ADDRESS}/api/carrinhos/1`).then(res => res.json())
     return carrinho
  }
}

export default carrinhoServ