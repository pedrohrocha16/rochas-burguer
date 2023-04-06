const removerProdutosCarrinho = document.querySelectorAll('.remove-btn')
const finalizarCompra = document.querySelector('.btn-success')

for (let i = 0; i < removerProdutosCarrinho.length; i++) {
    removerProdutosCarrinho[i].addEventListener('click', function(event){
        event.target.parentElement.parentElement.remove()
    })
    
}