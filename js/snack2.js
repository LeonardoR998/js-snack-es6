// ! Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//  Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
//  Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
//  Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Funzione per generare un numero casuale
function generaNumeroCasuale(max) {
  return Math.floor(Math.random() * max);
}

// Creazione dell'array di squadre
const squadre = [
  { nome: "Squadra A", punti: 0, falliSubiti: 0 },
  { nome: "Squadra B", punti: 0, falliSubiti: 0 },
  { nome: "Squadra C", punti: 0, falliSubiti: 0 },
  { nome: "Squadra D", punti: 0, falliSubiti: 0 },
];

// Genero i numeri casuali
for (let squadra of squadre) {
  squadra.punti = generaNumeroCasuale(100); // Punti casuali tra 0 e 99
  squadra.falliSubiti = generaNumeroCasuale(50); // Falli casuali tra 0 e 49
}

// Creazione di un nuovo array con solo nomi e falli subiti
const squadreFalli = [];
for (let i = 0; i < squadre.length; i++) {
  squadreFalli.push({
    nome: squadre[i].nome,
    falliSubiti: squadre[i].falliSubiti,
  });
}

// Stampa array
console.log(squadreFalli);
