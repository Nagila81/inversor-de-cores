var corpo = document.getElementById("corpo");
var botao = document.getElementById("botao");

botao.addEventListener("click", function(){
    var cor = window.getComputedStyle(corpo).backgroundColor;

    if (cor === "rgb(0, 0, 0)"){
        corpo.style.backgroundColor = "white"
        botao.style.backgroundColor = "black"
    } else {
        corpo.style.backgroundColor = "black"
        botao.style.backgroundColor = "white"
    }
});