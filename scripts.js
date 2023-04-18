function desligar(){
    document.getElementById("lampada").setAttribute("src", "./img/luzDesligada.gif");
}

function ligar(){
    document.getElementById("lampada").src="./img/luzLigada.gif";
}

function aparecer(){
    document.getElementById("lampada").style.display="block";
}
function desaparecer(){
    document.getElementById("lampada").style.display="none"
}