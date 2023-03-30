const controle = document.querySelectorAll('[data-controle]')

 controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        quantidadeHamb(evento.target.dataset.controle, evento.target.parentNode) // identifica + ou - e o pai do elemento que foi clicado
        addQuantidadeHamb (evento.target.dataset.controles) // identifica qual produto foi clicado
    })
 })
    function quantidadeHamb(operacao, controle){
        const qntd = controle.querySelector('[data-qntd]')
        
        if (operacao === '-'){
            qntd.value = Number(qntd.value) - 1
        } else {
            qntd.value = Number(qntd.value) + 1
        }
    }
    

    function addQuantidadeHamb(){
      
    }