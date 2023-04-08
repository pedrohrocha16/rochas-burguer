const removerProdutosCarrinho = document.querySelectorAll('.remove-btn')
const finalizarCompra = document.querySelector('.btn-success')


for (let i = 0; i < removerProdutosCarrinho.length; i++) {
    removerProdutosCarrinho[i].addEventListener('click', removerProdutos)  
}
    const quantidadeProduto = document.querySelector






function removerProdutos(event){
    event.target.parentElement.parentElement.remove()
        atualizarVlrCarrinho()
}


function atualizarVlrCarrinho(){

    let vlrTotalCarrinho = 0
    const produtosCarrinho = document.querySelectorAll('.produtos-carrinho')
    for (let i = 0; i<produtosCarrinho.length; i++) {
        const productPrice = produtosCarrinho[i].querySelector('#preco-produto-carrinho').innerText.replace("R$","").replace(",", ".")
        const productQntd = produtosCarrinho[i].querySelector('.controle-contador').value
        
        vlrTotalCarrinho += productPrice * productQntd
    
    }
    vlrTotalCarrinho = vlrTotalCarrinho.toFixed(2)
    vlrTotalCarrinho = vlrTotalCarrinho.replace('.', ',')
    document.querySelector(".vlrtotal-compra").innerText = "Total: R$ "+ vlrTotalCarrinho

}

