
//SNAK 1___________________________________

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



//SNAK 2___________________________________

// const quadrato = num => num * num
// console.log(quadrato(6))


//SNAK 3___________________________________

// const somma = (n1, n2) => n1 + n2
// const moltiplicazione = (n1, n2) => n1 * n2

// function eseguiOperazione(operatore, n1, n2) {
//     return operatore(n1, n2)
// }

// console.log(eseguiOperazione(somma, 3, 4))


//SNAK 4___________________________________

// function creaTimer(timer) {
//     return () => (setTimeout(() => console.log("tempo scaduto"), timer))
// }

// const countdown = creaTimer(4000)
// countdown()

//Tuttavia questo metodo mi sembra un po eccessivo, si puo tranquillamente fare senza la arrow function e una invocazione in meno:

// function creaTimer(timer) {
//     return (setTimeout(() => console.log("tempo scaduto"), timer))
// }

// creaTimer(1000)



//SNAK 5___________________________________

// function stampaOgniSecondo(messaggio) {
//     return (setInterval(() => console.log(messaggio), 1000))
// }
// stampaOgniSecondo("mi piace la crosata")