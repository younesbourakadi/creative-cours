// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.

/* ------------------------------------------------------*/

console.info("1/ Implémentez une fonction qui retourne la somme de ses 2 paramètres.");
function getSumOfTwoParams(a, b) {
  return a + b;

}
console.log(getSumOfTwoParams(4, 5));
console.log(getSumOfTwoParams(3443, 99));

/* ------------------------------------------------------*/

console.info("2/ Implémentez une fonction qui prend en paramètre les dimensions de 2 côtés d'un triangle rectangle et retourne la dimension de l'hypoténuse.");
// Vous aurez besoin de certaines méthodes de l'objet Math :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math
function calculateHypotenuse(side1, side2) {
  const hypotenuseSquared = Math.pow(side1, 2) + Math.pow(side2, 2);
  const hypotenuse = Math.sqrt(hypotenuseSquared);
  return hypotenuse;
}
console.log(calculateHypotenuse(2, 5));
console.log(calculateHypotenuse(3, 7));

/* ------------------------------------------------------*/

console.info("3/ Implémentez une fonction qui retourne le nom et le prénom du plus âgé de 2 utilisateurs passés en paramètres parmi les 4 ci-dessous.");

const user1 = {firstName: "Paul", lastName: "Rick", age: 35};
const user2 = {firstName: "Samir", lastName: "Ah", age: 22};
const user3 = {firstName: "Loanne", lastName: "Bourdin", age: 28};
const user4 = {firstName: "Abdel", lastName: "Dems", age: 44};

function getOldestUser(user1, user2) {
  if (user1.age > user2.age) {
    return user1.firstName + " " + user1.lastName;
  } else {
    return user2.firstName + " " + user2.lastName;
  }
}

console.log(getOldestUser(user1, user3)); 
console.log(getOldestUser(user2, user4));

/* ------------------------------------------------------*/

console.info("4/ Implémentez une fonction qui retourne la valeur la plus grande d'un tableau (array) de nombres, quelqu'en soit la taille.");
function getHighestValue(numbers) {
  let highestValue = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highestValue) {
      highestValue = numbers[i];
    }
  }
  return highestValue;
}
console.log(getHighestValue([1, 2, 3, 4, 5]));
console.log(getHighestValue([1, 2, 33, 4444, 5]));

/* ------------------------------------------------------*/

console.info("5/ Implémentez une fonction qui prend en paramètre un texte et retourne un objet comptant le nombre d'occurence de chaque mot.");
// Vous aurez besoin de certaines méthodes de manipuation des chaînes de caractères :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9thodes_des_instances

function getWordOccurence(text) {
  const words = text.split(" ");
  const wordCounts = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}
console.log(getWordOccurence("Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."));

console.log(getWordOccurence("Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."));

/* ------------------------------------------------------*/

console.info("6/ Implémentez une fonction qui retourne aléatoirement une valeur contenue dans un tableau (array) quelqu'en soit la taille.");
function getRandomValue(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

console.log(getRandomValue([1, 2, 3, 4, 5]));
console.log(getRandomValue([true, false]));

/* ------------------------------------------------------*/

console.info("7/ Implémentez une fonction qui retourne une valeur entière alétoire comprise entre 2 valeurs passées en paramètres.");
function getRandomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(getRandomIntBetween(5, 1));
console.log(getRandomIntBetween(-1, -5));
/* ------------------------------------------------------*/

console.info("Pour les questions suivantes enrichissez l'objet 'newbie' ci-dessous.");

const newbie = {
    firstName: "Paul",
    lastName: "Bismuth",
    birthdate: "1995-02-14",
    job: "web developer",
    city: "Detroit",
    skills: ["HTML", "CSS"],
    calculateAge: function() {
        const birthYear = new Date(this.birthdate).getFullYear();
        const currentYear = new Date().getFullYear();
        let age = currentYear - birthYear;
        const birthdateThisYear = new Date(currentYear, new Date(this.birthdate).getMonth(), new Date(this.birthdate).getDate());
        if (birthdateThisYear > new Date()) {
            age--;
        }
        return age;
    },
      listSkills: function() {
    return this.skills.join(", ");
  },
  addSkill: function(skill) {
    this.skills.push(skill);
  },
    getBio: function() {
        const age = this.calculateAge();
        const skills = this.listSkills();
        return `Je suis ${this.firstName} ${this.lastName}, j'ai ${age} ans, j'habite à ${this.city} et je suis ${this.job}. Mes compétences sont ${skills}.`
    }
};

/* ------------------------------------------------------*/

console.info("8/ Implémentez une méthode retournant l'âge de Paul.");

console.log(newbie.calculateAge());

/* ------------------------------------------------------*/

console.info("9/ Implémentez une méthode retournant un texte listant les compétences de Paul séparées par des virgules.");

console.log(newbie.listSkills());

/* ------------------------------------------------------*/

console.info("10/ Implémentez une méthode qui ajoute à Paul une compétence passée en paramètre.");
console.info("Ajoutez la compétence Javascript et utilisez la méthode précédente pour vous assurer du résultat.");

newbie.addSkill("Javascript");
console.log(newbie.listSkills());

/* ------------------------------------------------------*/

console.info("11/ Implémentez une méthode qui fait parler Paul pour qu'il se présente avec toutes ses caractéristiques. (Nom, prénom, âge, où il vit, son métier, ...)");
console.log(newbie.getBio());
