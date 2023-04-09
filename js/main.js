const addCartCarrinho = document.querySelectorAll('.carrinho-add')
const removerProdutosCarrinho = document.querySelectorAll('.remove-btn')
const finalizarCompra = document.querySelector('.btn-success')
const quantidadeProduto = document.querySelectorAll('.controle-contador')


for (let i = 0; i < removerProdutosCarrinho.length; i++) {
    removerProdutosCarrinho[i].addEventListener('click', removerProdutos)  //remover produtos
}


for (let i = 0; i < quantidadeProduto.length; i++) {
    quantidadeProduto[i].addEventListener('change', atualizarVlrCarrinho) //atualizar valor do carrinho
    
}

for (let i = 0; i < addCartCarrinho.length; i++) {
    addCartCarrinho[i].addEventListener('click', addProdutoCarrinho)
    
}


function addProdutoCarrinho(event){
    const button = event.target
    const produtosInfo = button.parentElement.parentElement
    const produtoImg = produtosInfo.querySelector('.card-img-top').src
    const produtoNome = produtosInfo.querySelector('.card-title').innerText
    const produtoPreco = produtosInfo.querySelector('.produto-preco').innerText


    let addNovoProdutoCarrinho = document.createElement('tr')
    addNovoProdutoCarrinho.classList.add('produtos-carrinho')

    addNovoProdutoCarrinho.innerHTML =
    `
    <th id="img-descr-prod" style="border: none;"> 
        <img src="${produtoImg}"class="img-prod">
        <p id="nome-produtoAdd" style="font-size: 13px;font-weight: 600;">${produtoNome}<br></p>
        <p id="preco-produto-carrinho">${produtoPreco}</p>
    </th>
    <td style="vertical-align: 0; border: none;">
      <input type="number" value="1" min="0" class="controle-contador"> 
    </td>
        <td style="vertical-align: 0; border-top: none"><img src="img/remove.png" alt="remove-btn" class="remove-btn"></td>
    `

    const tableBody = document.querySelector('.table tbody')
    tableBody.append(addNovoProdutoCarrinho)
        atualizarVlrCarrinho()

}

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

