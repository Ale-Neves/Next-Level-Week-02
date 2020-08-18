//procurar o botao
document.querySelector("#add-time")
//quando clicar
.addEventListener('click', cloneField)

//executar ação
function cloneField(){
    //duplicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //limpar campos
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function (field){
        field.value = ""
    })
    //colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}