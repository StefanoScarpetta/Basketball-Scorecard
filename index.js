let punteggioHome = document.getElementById("punteggioHome")
let punteggioGuest = document.getElementById("punteggioGuest")
let time = document.getElementById("time")
punteggioHome.innerText = 0
punteggioGuest.innerText = 0
time.innerText = "00:00:00"

function newGame() {
    location.reload()
}
function cambioColore() {
    document.getElementById("home").style.color = "white"
    document.getElementById("guest").style.color = "white"
    document.getElementById("phome").innerText = ""
    document.getElementById("pguest").innerText = ""
    if(parseInt(punteggioHome.innerText) > parseInt(punteggioGuest.innerText)) {
        document.getElementById("home").style.color = "red"
        document.getElementById("phome").innerText = "Vantaggio"
    }
    else {
        document.getElementById("guest").style.color = "red"
        document.getElementById("pguest").innerText = "Vantaggio"
    }
}

function unoHome() {
    risultato = parseInt(punteggioHome.innerText) + 1
    punteggioHome.innerText = risultato
    cambioColore()
}
function dueHome() {
    risultato = parseInt(punteggioHome.innerText) + 2
    punteggioHome.innerText = risultato
    cambioColore()
}
function treHome() {
    risultato = parseInt(punteggioHome.innerText) + 3
    punteggioHome.innerText = risultato
    cambioColore()
}
function unoGuest() {
    risultato = parseInt(punteggioGuest.innerText) + 1
    punteggioGuest.innerText = risultato
    cambioColore()
}
function dueGuest() {
    risultato = parseInt(punteggioGuest.innerText) + 2
    punteggioGuest.innerText = risultato
    cambioColore()
}
function treGuest() {
    risultato = parseInt(punteggioGuest.innerText) + 3
    punteggioGuest.innerText = risultato
    cambioColore()
}

var ore=0;
var minuti=0;
var secondi=0;
var decimi=0;
var visualizzazione="";
var contatore_intertempi=0;
var stop=1; 

function start(){
   if (stop==1){
        stop=0;
         cronometro();
     }
}
function stopp() {
    if (stop==0){
        stop=1;
        cronometro();
     }
    document.getElementById("time").innerText=visualizzazione
}

function cronometro(){
    if (stop==0) {
        decimi+=1;
        if (decimi>9) {decimi=0;secondi+=1;}
        if (secondi>59) {secondi=0;minuti+=1;}
        if (minuti>59) {minuti=0;ore+=1;}
        if (ore<10) {visualizzazione="0" + ore;
        } else {visualizzazione=ore;}
        if (minuti<10) {visualizzazione=visualizzazione + ":0" + minuti;
        } else {visualizzazione=visualizzazione + ":" + minuti;}
        if (secondi<10) {visualizzazione=visualizzazione + ":0" + secondi;
        } else {visualizzazione=visualizzazione + ":" + secondi;}
        visualizzazione=visualizzazione;
        document.getElementById("time").innerText=visualizzazione;
        setTimeout("cronometro()", 100);
    }
}