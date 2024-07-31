let btnEnviar = document.querySelector("#submit")



function mandarMensagem(){
    let mensagem = document.querySelector("#textbox").value;
    let section = document.querySelector(".section")
    console.log(mensagem);
    let div = document.createElement("div");
    let pgf = document.createElement("p");
    pgf.innerText = mensagem;
    let excluir = document.createElement("button");
    let editar = document.createElement("button");
    excluir.innerText = "excluir"
    editar.innerText = "editar"
    pgf.classList.add("texto")
    excluir.classList.add("excluir")
    editar.classList.add("editar")
    div.classList.add("mensagem")
    div.append(pgf)
    div.append(editar)
    div.append(excluir)
    section.append(div)
    textbox.value = "";
}
function excluir(){
    document.addEventListener('DOMContentLoaded', () => {
        const messageSection = document.querySelector('.section');
    
        messageSection.addEventListener('click', function (event) {
            if (event.target.classList.contains('excluir')) {
                const message = event.target.closest('.mensagem');
                message.remove();
            }
        });
    });
}

function editar(){
    document.addEventListener('DOMContentLoaded', () => {
        const messageSection = document.querySelector('.section');

        messageSection.addEventListener("click", function(event){
            if(event.target.classList.contains('editar')){
                const message = event.target.closest('.mensagem');
                const messageText = message.querySelector('.texto');
                const newText = prompt('Digite a mensagem que deseja alterar:');
                messageText.innerText = newText;
            }
        })
    })
}



btnEnviar.addEventListener("click",()=>{
    mandarMensagem()
    console.log("clicou")
})
excluir()
editar()
    
