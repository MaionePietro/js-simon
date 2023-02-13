
//alert('memorizza i seguenti numeri: '+ random());
const countdown = document.getElementById('countdown');

let i = 30;
const clock = setInterval(myFuction, 1000);

function myFuction(){
    countdown.innerHTML = i;
    if(i===0){
        clearInterval(clock)
    }else{
        i--;
    }
}


function random() {
    let arrayNumeri = [];
    while (arrayNumeri.length < 5) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        if (arrayNumeri.indexOf(randomNumber) === -1) {
            arrayNumeri.push(randomNumber);
        }
    }
    console.log(arrayNumeri);
    return arrayNumeri;
}