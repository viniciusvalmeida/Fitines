 const hostAddress = process.env.NEXT_PUBLIC_HOST_ADDRESS
 
 export const fetchProdutos = async () => {
  try {
    const produtos = await fetch(`${hostAddress}/api/produtos`,{
      Headers: {
      "Content-Type": "application/json"
    }
    })
    .then(res => res.json())
  
    return produtos
    
  } catch (e) {
    console.log(e)
  }
}

export const fetchProduto = async (id) => {
  try {
    const produto = await fetch(`${hostAddress}/api/produtos/${id}`,{
      Headers: {
      "Content-Type": "application/json"
    }
    }).then(res => res.json())
  
    return produto
    
  } catch (e) {
    console.log(e);
  }
}

