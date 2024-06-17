var topp=document.getElementById("top");
var kale=document.getElementById("kale");
var kalex=kale.getBoundingClientRect().left;
var kaley=kale.getBoundingClientRect().top;
var kaleuzun=kale.width;
var kaleyuk=kale.height;
var adim=10;
var topx;
var topy;
var atis=0;
var skor=0;
var topxi=topp.getBoundingClientRect().left;
var topyi=topp.getBoundingClientRect().top;

function hareket(){
   topx=topp.getBoundingClientRect().left;
   topy=topp.getBoundingClientRect().top;
   
   if(topx<=0){
     adim=-10;
   }else if((window.innerWidth-(topx+50)<=0)){
     adim=10;
   }

   topp.style.left=(topx-adim)+'px';
};

var timer1=setInterval(hareket,1); 

var timer2;
function sutcekildi(){
    clearInterval(timer1);
    timer2=setInterval(sutcek,10); 
};

var timersifir;
function sutcek(){
    topy=document.getElementById("top").getBoundingClientRect().top
    adim=10;
    topp.style.top=(topy-adim)+'px';
    if(topx>kalex&&topx<kalex+kaleuzun&&topy<kaley+30){
       skor+=10;
       document.getElementById("score").innerHTML='Skor : '+skor;
       clearInterval(timer2);
       document.getElementById("gol").innerHTML="GOOOL!!!";
       timersifir=setInterval(sifirla,1000);
    }
    if(topy<0){
      timersifir=setInterval(sifirla,1000);
      clearInterval(timer2);
      document.getElementById("gol").innerHTML="Dışarı Çıktı!";
    }
};

function sifirla(){
    document.getElementById("gol").innerHTML="";
    topp.style.left=topxi+'px';
    topp.style.top=topyi+'px';
    timer1=setInterval(hareket,1); 
    clearInterval(timersifir);
}

