var player ="X";
var numJog = 0;
var pc = document.getElementById('cpu').checked;

function checkjogo(id){

    var opt = verificaSrc(id);

    if(opt == "transp.png"){
        document.getElementById(id).src = "img/"+player+".png";

        if(player == "X"){
            player = "O";

        }else{
            player = "X";
        }
    }
}

function verificaSrc(id){

    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}


function winchek(){
    
    if((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') ==verificaSrc('c3')) && verificaSrc('c3') == verificaSrc('c1') != "transp.png"){
        return true;

    }

    if(winchek()){
        alert("Fim de jogo "+player+"venceu!")
        return false;
    } 

    if(winchek()){
        alert("Fim de jogo!! Vitoria do " +player+ "!!!");
        return false;
    }
    if(numJog >= 9){
        alert("Fim de jogo!! Deu velha!!!");
        return false;
    }
    if(pc && player == "O"){
        checked(jogoDoPc());
    }
}

function jogoDoPc(){
    if(verificarSrc('c5') == "transp.png"){
        return 'c5';

    }
    return 'c'+Math.floor((Math.random() * 9) + 1);
}

 