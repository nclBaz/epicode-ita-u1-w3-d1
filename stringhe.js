const ordine = {
  fullName: "Mario Rossi",
  dataRicevuta: "2020-01-01",
  numeroFattura: 10,
}

const myString = `Hello ${ordine.fullName}. Lorem ipsum dolor sit amet consectetur ${ordine.dataRicevuta} elit. 
Provident incidunt dicta non ad, totam, enim maiores facilis inventore optio modi sapiente, 
tempora quos quis explicabo omnis eius ${ordine.numeroFattura} repudiandae molestiae!` // ` è il backtick (alt + 96)

const nuovaStringa = myString
  .replace("Hello", "Ciao")
  .concat("aspdjpoasjdojasdojasodjoasjdoasjdoasj")

const subString = myString.slice(20, 22)

console.log(nuovaStringa.split(" ")[0].toLowerCase() === "ciao")
