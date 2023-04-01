const controle = document.querySelectorAll('[data-controle]')

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        quantidadeHamb(evento.target.dataset.controle, evento.target.parentNode) // identifica + ou - e o pai do elemento que foi clicado
        addQuantidadeHamb (evento.target.dataset.controles) // identifica qual produto foi clicado
    })
 })
    function quantidadeHamb(operacao, controle){
        const qntd = controle.querySelector('[data-qntd]') //dependendo da resposta (+-) ele aplica as condições
        if (operacao === '-'){
            qntd.value = Number(qntd.value) - 1
        } else {
            qntd.value = Number(qntd.value) + 1
        }
        if (qntd.value < 0){
            qntd.value = 0
        }
    }   
    
    function addQuantidadeHamb(){
        
    }