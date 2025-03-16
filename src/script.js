//SNACK 1_____________________________________________________________________

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

// const quadrato = num => num**2
// console.log(quadrato(6))




//SNACK 3______________________________________________________________________

// const somma = (n1, n2) => n1 + n2
// const moltiplicazione = (n1, n2) => n1 * n2

// function eseguiOperazione(operatore, n1, n2) {
//     return operatore(n1, n2)
// }

// console.log(eseguiOperazione(somma, 3, 4))




//SNACK 4______________________________________________________________________

// function creaTimer(timer) {
//     return () => (setTimeout(() => console.log("tempo scaduto"), timer))
// }

// const countdown = creaTimer(4000)
// countdown()

//questo metodo mi sembra un po' eccessivo, si puo tranquillamente fare senza la arrow function ed una invocazione in meno:

// function creaTimer(timer) {
//     return (setTimeout(() => console.log("tempo scaduto"), timer))
// }

// creaTimer(1000)




//SNACK 5________________________________________________________________________

// function stampaOgniSecondo(messaggio) {
//     return (setInterval(() => console.log(messaggio), 1000))
// }
// stampaOgniSecondo("mi piace la crosata")




//SNACK 6________________________________________________________________________

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

// const listaOperazioni = [
//     3 + 1,
//     9 - 6,
//     5 * 4,
//     8 / 2
// ]

// function sequenzaOperazioni(operazioni, intervallo) {

//     operazioni.map((operazione, index) => {
//         setTimeout(() => { console.log(operazione) }, index * intervallo)
//     })
// }


// sequenzaOperazioni(listaOperazioni, 1000);



//SNACK 10________________________________________________________________________

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