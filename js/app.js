
//alert('memorizza i seguenti numeri: '+ random());
const countdown = document.getElementById('countdown');


const clock = setInterval(myFuction, 30000);
function myFuction(){
    
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