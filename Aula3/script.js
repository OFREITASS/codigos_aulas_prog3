console.log("hello world")
const botao = document.getElementById("botao");
botao.style.backgroundColor = "red";
botao.style.borderRadius = "20px";
botao.style.padding= "5px 10px";
const nome= document.getElementById("IDnome");
nome.value ="MARCELO";

const formulario = document.getElementById("IDform")
formulario.addEventListener("submit", function (event){
    event.preventDefault();
    alert("voce submeteu o formulario!")
})