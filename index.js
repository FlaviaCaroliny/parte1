function mostrarNome(){
    let divNova=document.createElement("div")
    let inputNome=document.querySelector("#nome")
    let textoNovo= document.createTextNode('Bem vindo (a)' +inputNome.value)
    divNova.appendChild(textoNovo)
    document.body.appendChild(divNova)
}
let botaoOk=document.querySelector("#botao")
botaoOk.onclick=console.log(mostrarNome());
