//SNACK 1_____________________________________________________________________
// Crea una funzione che somma due numeri.
// 1 Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma
// 2 Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// 3 Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.


// function somma(n1, n2) {
//     return n1 + n2
// }

// console.log(somma(3, 4))


// const somma = function(n1, n2) {
//     return n1 + n2
// }

// console.log(somma(3, 4))


// const somma = (n1, n2) => {
//     return n1 + n2
// }

// console.log(somma(3, 4))






//SNACK 2_____________________________________________________________________
// Crea una arrow function che calcola il quadrato di un numero.
// 1 Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.


// const quadrato = num => num**2
// console.log(quadrato(6))






//SNACK 3______________________________________________________________________
// Crea una funzione eseguiOperazione
// 1 Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.


// const somma = (n1, n2) => n1 + n2
// const moltiplicazione = (n1, n2) => n1 * n2

// function eseguiOperazione(operatore, n1, n2) {
//     return operatore(n1, n2)
// }

// console.log(eseguiOperazione(somma, 3, 4))






//SNACK 4______________________________________________________________________
// Crea un generatore di funzioni creaTimer
// 1 Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".


// function creaTimer(timer) {
//     return () => (setTimeout(() => console.log("tempo scaduto"), timer))
// }

// const countdown = creaTimer(4000)
// countdown()

//questo metodo mi sembra un po' eccessivo, si puo tranquillamente fare senza la arrow function ed una invocazione in meno:

// function creaTimer(timer) {
//     return (setTimeout(() => console.log("Tempo scaduto!"), timer))
// }

// creaTimer(1000)






//SNACK 5________________________________________________________________________
// Crea una funzione stampaOgniSecondo con setInterval.
// 1 Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// function stampaOgniSecondo(messaggio) {
//     return (setInterval(() => console.log(messaggio), 1000))
// }
// stampaOgniSecondo("mi piace la crosata")






//SNACK 6________________________________________________________________________
// Crea un contatore automatico con setInterval
// 1 Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.


// function creaContatoreAutomatico(tempo) {
//     let timer = tempo * 1000
//     let count = 0
//     return () => setInterval(() => { console.log(count++) }, timer)
// }

// const countUp = creaContatoreAutomatico(1)
// countUp()

// anche qui si poteva tranqillamente scrivere cosi

// function creaContatoreAutomatico(tempo) {
//     let timer = tempo * 1000
//     let count = 0
//     return setInterval(() => { console.log(count++) }, timer)
// }

// creaContatoreAutomatico(1)






//SNACK 7________________________________________________________________________
// Crea una funzione che ferma un timer dopo un certo tempo
// 1 Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.


// function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
//     let avvio = tempoAvvio * 1000
//     let stop = tempoStop * 1000
//     return () => {
//         const intervallo = setInterval(() => {
//             console.log(messaggio);
//         }, avvio);

//         setTimeout(() => {
//             clearInterval(intervallo);
//         }, stop);
//     };
// }
// const timerConIntervallo = eseguiEferma("mi piace la crostata", 1, 5)
// timerConIntervallo()






//SNACK 8________________________________________________________________________
// Crea una funzione che simula un conto alla rovescia
// 1 Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.


// function contoAllaRovescia(tempo) {
//     let count = tempo
//     timer = tempo * 1000
//     return () => {
//         const intervallo = setInterval(() => {
//             count = count - 1
//             console.log(count);
//         }, 1000);
//         setTimeout(() => {
//             clearInterval(intervallo);
//             console.log("tempo scaduto")

//         }, timer);
//     };
// }
// const countDown = contoAllaRovescia(5)
// countDown()






//SNACK 9________________________________________________________________________
// Creare una funzione che esegue una sequenza di operazioni con ritardi
// 1 Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
// 2 Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.


// const listaOperazioni = [
//     5 + 1,
//     9 - 6,
//     2 * 3,
//     8 / 4
// ]

// function sequenzaOperazioni(operazioni, intervallo) {

//     operazioni.map((operazione, index) => {
//         setTimeout(() => { console.log(operazione) }, index * intervallo)
//     })
// }


// sequenzaOperazioni(listaOperazioni, 1000);






//SNACK 10________________________________________________________________________
// Creare un throttler per limitare l’esecuzione di una funzione
// 1 Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
// 2 Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.


function creaThrottler(funzione, tempoLimite) {
    let used = false;
    return () => {
        if (used) {
            console.log("Denided!");
            return;
        }
        used = true;
        funzione();
        setTimeout(() => {
            used = false;
        }, tempoLimite);
    };
}

const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog();
throttledLog();
setTimeout(throttledLog, 2500); 