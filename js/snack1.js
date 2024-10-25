// ! Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// Creazione dell'array di oggetti bici
const bici = [
  { nome: "Bici A", peso: 7.5 },
  { nome: "Bici B", peso: 6.8 },
  { nome: "Bici C", peso: 8.2 },
  { nome: "Bici D", peso: 6.5 },
];

// Primo elemento array
let biciLeggera = bici[0];

// Ciclo attraverso l'array per trovare la bici con peso minore
for (let i = 1; i < bici.length; i++) {
  if (bici[i].peso < biciLeggera.peso) {
    biciLeggera = bici[i];
  }
}

// Stampa la bici con peso minore
console.log(
  `La bici con il peso minore è: ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg.`
);
