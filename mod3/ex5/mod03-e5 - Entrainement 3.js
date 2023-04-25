// -----------------------------------
console.log("1/ Implémentez une fonction qui transforme un texte en camelCase.");
function toCamelCase(str) {
  let words = str.split(/[\s_.,-]+/); 
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  let wordsJoined = words.join('');
  return wordsJoined.charAt(0).toLowerCase() + wordsJoined.slice(1);
}
console.log(toCamelCase('Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'));

// -----------------------------------
console.log("2/ Implémentez une fonction qui retroune le plus grand mot d'un texte.");
function getLongestWordInString(str){
  let words = str.split(/[\s_.,-]+/); 
  let wordLength = 0;
  let longestWord;
  for (const word in words) {
     if (words[word].length > wordLength){
      wordLength = words[word].length;
      longestWord = words[word];
    } 
  }
  return longestWord;
}
console.log(getLongestWordInString('Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'));

// -----------------------------------
console.log("3/ Implémentez une fonction qui converti un nombre de seconde en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années.");
function convertSecondsToTimeUnits(s){

  let years = Math.floor(s / 31536000);
  let months = Math.floor((s % 31536000) / 2628000);
  let days = Math.floor(((s % 31536000) % 2628000) / 86400);
  let weeks = Math.floor(((s % 31536000) % 2628000) / 604800);
  let hours = Math.floor((s % (3600 * 24)) / 3600);
  let minutes = Math.floor((s % 3600) / 60);
  let seconds = Math.floor(s % 60);
  let table = {
    seconds,
    minutes,
    hours,
    days,
    weeks,
    months,
    years
  }
return table;
}
console.table(convertSecondsToTimeUnits(788990829374823748237492));

// -----------------------------------
console.log("4/ Implémentez une fonction qui prend en paramètre un tableau retourné par la fonction précédente et retourne la chaîne de caractère correspondante.");

console.log();

// -----------------------------------
console.log("5/ Implémentez une fonction qui compte dans le texte en premier paramètre, le nombre d'occurence de la lettre en second paramètre.");

console.log();

// -----------------------------------
console.log("6/ Implémentez une fonction qui retourne les X plus grandes valeurs d'un tableau.");

console.log();

// -----------------------------------
console.log("7/ Retournez la liste des prenoms des joueurs ci-dessous par ordre de score décroissant.");

const players  = {
  Camille: 88,
  Lola: 125,
  Isaac: 174,
  Aldrick: 426,
  Ismaël: 248,
  Lilian: 478,
  Charley: 225,
  Thierry: 255,
  Cameron: 205,
  Tanguy: 155,
  Jenny: 125
};

console.log();

// -----------------------------------
console.log("8/ Dans la liste des scores ci-dessus sélectionnez une partie des meilleurs joueurs jusqu'à obtenir un total de score des joueurs sélectionnés de 1000.");

console.log();
