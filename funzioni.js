// saluta()

// DICHIARAZIONE DELLA FUNZIONE

function salutaMondo() {
  console.log("Ciao")
  console.log("Mondo")
  console.log("Il mio nome è: ")
  console.log("Riccardo")
}

// UTILIZZO
// salutaMondo()
/* 

salutaMondo()
salutaMondo()
salutaMondo()
salutaMondo() */

/* for (let index = 0; index < 100; index++) {
  salutaMondo()
} */

// PARAMETRI DELLA FUNZIONE

function salutaQualcuno(qualcuno) {
  console.log("Ciao", qualcuno)
  console.log("Il mio nome è: ")
  console.log("Riccardo")
}

function unaltra(qualcuno) {
  console.log(qualcuno)
}

salutaQualcuno("Samuele") // Il parametro qualcuno avrà valore "Samuele"
salutaQualcuno("Gaetano") // Il parametro qualcuno avrà valore "Gaetano"
salutaQualcuno("Vincenzo") // Il parametro qualcuno avrà valore "Vincenzo"
salutaQualcuno() // Il parametro qualcuno avrà valore undefined

unaltra()

function quadrato(x) {
  console.log("Il quadrato è: ", x * x)
}

function cubo(x) {
  console.log("Il cubo è: ", x * x * x)
}

quadrato(2)
quadrato(4)
quadrato(100)
cubo(100)

function calcolaScontoVentiPercento(prezzo) {
  console.log(prezzo * 0.8)
}

calcolaScontoVentiPercento(100)
calcolaScontoVentiPercento(569)

const arrayDiNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let index = 0; index < arrayDiNumeri.length; index++) {
  const element = arrayDiNumeri[index]
  console.log("Elemento corrente: ", element)
  quadrato(element)
  cubo(element)
}

arrayDiNumeri.push(11)

/* // FUNZIONI CON PIU' DI UN PARAMETRO

function somma(addendo1, addendo2) {
  console.log("La somma dei due numeri è: ", addendo1 + addendo2)
}

somma(10, 30)
somma(100, 30000)
 */

function quadratoECubo(x) {
  if (typeof x !== "number") {
    console.log("Per favore passami un numero")
  } else {
    console.log("Il numero passato è:", x)
    quadrato(x)
    cubo(x)
  }
}

quadratoECubo(123)
quadratoECubo(-456)
quadratoECubo([])

/* function sommaNumeriDiArray(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
} */

function abbaiaUnCertoNumeroDiVolte(numeroDiVolte) {
  for (let index = 0; index < numeroDiVolte; index++) {
    console.log("BAU")
  }
}
abbaiaUnCertoNumeroDiVolte(123)
