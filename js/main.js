if (document.readyState === "loading"){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready(){
    const removeBtn = document.getElementsByClassName('remove-btn')
    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', removeProduct)
    } 
    const quantidInput = document.getElementsByClassName('controle-contador')
    for (let i = 0; i < quantidInput.length; i++) {
       quantidInput[i].addEventListener('change', updateTotal)   
    }
    const addToCartButtons = document.getElementsByClassName('carrinho-add')
    for (let i = 0; i < addToCartButtons.length; i++) {
       addToCartButtons[i].addEventListener('click', addNoCarrinho)
    }
}


function addNoCarrinho(event){
    const button = event.target
    const productInfo = button.parentElement.parentElement
    const productImg = productInfo.getElementsByClassName('card-img-top')[0].src
    const productName = productInfo.getElementsByClassName('card-title')[0].innerText
    const productPrice = productInfo.getElementsByClassName('card-text produto-preco')[0].innerText

    const productCartName = document.getElementsByClassName('nome-produto-carrinho')
    for (var i = 0; i < productCartName.length; i++) {
        if (productCartName[i].innerText == productName){
            productCartName[i].parentElement.parentElement.getElementsByClassName('controle-contador')[0].value++
            return
        }     
    }


        

    let newCartProduct = document.createElement('tr')
    newCartProduct.classList.add('produtos-carrinho')

    newCartProduct.innerHTML = 
    ` 
        <th id="img-descr-prod" style="border: none;"> 
            <img src="${productImg}"class="img-prod">
            <spam class="nome-produto-carrinho" style="font-size: 13px;font-weight: 600;">${productName}<br></spam>
            <spam id="preco-produto-carrinho" class="preco-produto-carrinho">${productPrice}</spam>
        </th>
            <td style="vertical-align: 0; border: none;">
            <input type="number" value="1" min="0" class="controle-contador"> 
            </td>
            <td style="vertical-align: 0; border-top: none"><img src="img/remove.png" alt="remove-btn" class="remove-btn" id="remove-btn"></td>
    `

    const tableBody = document.querySelector('.table tbody')
    tableBody.append(newCartProduct)

    updateTotal()
}

function removeProduct (event){   
    event.target.parentElement.parentElement.remove()
    updateTotal()

}


function updateTotal(){
    let totalCarrinho = 0
    const cartProduct = document.getElementsByClassName('produtos-carrinho')
    for (let i = 0; i < cartProduct.length; i++) {
        const productPrice = cartProduct[i].getElementsByClassName('preco-produto-carrinho')[0].innerText.replace('R$', '').replace(',', '.')
        const productQuant = cartProduct[i].getElementsByClassName('controle-contador')[0].value


        totalCarrinho += productPrice * productQuant  
    }
        totalCarrinho = totalCarrinho.toFixed(2)
        totalCarrinho = totalCarrinho.replace('.', ',')
        document.querySelector('.vlrtotal-compra').innerText = "Total: R$: "+ totalCarrinho
    
}
