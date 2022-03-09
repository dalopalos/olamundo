var imgs = [];
var slider;
var imgAtual;
var maxImg;
var tempoTroca;

function preCarregamento(){
    var s = 1;
    for (var i = 0; i < 4; i++) {
        imgs[i] = new Image();
        imgs[i].src = "imagens/banner"+s+".png";   
        s++;  
    }
}

function carregarImg(img){
    slider.style.backgroundImage = "url('"+imgs[img].src+"')"
}

function inicia(){
    preCarregamento();
    imgAtual = 0;
    maxImg = imgs.length-1;
    slider = document.getElementById("divslider");
    carregarImg(imgAtual);
    tempoTroca = 0;
    anima();
}

function troca(dir){
    tempoTroca = 0;
    imgAtual += dir;
    if(imgAtual > maxImg){
        imgAtual = 0;
    }else if(imgAtual < 0){
        imgAtual = maxImg;
    }
    carregarImg(imgAtual);
}

function anima(){
    tempoTroca++;
    if(tempoTroca >= 160){
        tempoTroca=0;
        troca(1)
    }
    window.requestAnimationFrame(anima);
}
window.addEventListener("load", inicia);