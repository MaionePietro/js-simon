
//alert('memorizza i seguenti numeri: '+ random());
const countdown = document.getElementById('countdown');

let arrayNumeri = [];
let arrayNumeriInput = [];
let i = 30;
const clock = setInterval(myFuction, 1000);
random();


//COUNTDOWN
function myFuction() {
    countdown.innerHTML = i;
    if (i === 0) {
        clearInterval(clock);
        numberInput();
        comparatore();
    } else {
        i--;
    }
}

//FUNZIONE PER NUMERI RANDOMICI
function random() {
    while (arrayNumeri.length < 5) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        if (arrayNumeri.indexOf(randomNumber) === -1) {
            arrayNumeri.push(randomNumber);
        }
    }
    console.log(arrayNumeri);
}

//FUNZIONE PER FAR INSERIRE NUMERI ALL'UTENTE
function numberInput() {
    while (arrayNumeriInput.length < 5) {
        arrayNumeriInput.push(parseInt(prompt('vediamo cosa ti ricordi')));
    }
    console.log(arrayNumeriInput);
}

//FUNZIONE PER COMPARARE NUMERI
function comparatore() {
    for (cont = 0; cont < arrayNumeri.length; cont++) {
        if (arrayNumeri.includes(arrayNumeriInput[cont])) {
            console.log("Il numero è presente: "+arrayNumeriInput[cont]);
        } else {
            console.log("Il numero non è presente nell'array.");
        }
    }
}