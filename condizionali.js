// ************************************ TERNARY OPERATOR **********************

const eta = 18
const nome = "Mario"

/* let price

if (eta >= 18  && nome === "Mario") {
  price = "20€"
} else {
  price = "10€"
} */

const price = eta >= 18 && nome === "Mario" ? "20€" : "10€"

console.log(price)

const test = undefined
const test2 = null

if (test === test2) {
  console.log("I due valori sono uguali")
} else {
  console.log("I due valori sono diversi")
}
