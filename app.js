
alert('Morais jogos Boas Vindas');

let secretNumber = 5;
console.log('numero ', secretNumber);
let guess;
let tentativas = 1;


//eenquanto
while (guess != secretNumber) {// != e usado para se uma açao nao for igual a x 
    guess = prompt('choose a number between 1 and 30?');
    //se for
    if (guess == secretNumber) {
        alert(`that s right! did you discover the secret number ${secretNumber} com ${tentativas} tentativas`);
    } else {//se nao
        if (secretNumber < guess) {
            alert(`O numeor secreto e menor que ${guess}`);
        } else {
            alert(`O numeor secreto e maior que ${guess}`);
        }
        //comando exenplo > tentativas = tentativas + 1;
        tentativas++
    }
}
