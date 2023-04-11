const removeBtn = document.getElementsByClassName('remove-btn')


for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', function(event){
        event.target.parentElement.parentElement.remove()
    })
    
}