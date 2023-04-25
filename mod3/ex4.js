/* let chalvlracters = [
  {name: "", health: 50, xp: getRandomCharacterPoints(1, 10), weapon: getRandomCharacterPoints(1, 10), shield: getRandomCharacterPoints(1, 10)},
  {name: "Harley Quinn", health: 50, xp: getRandomCharacterPoints(1, 10), weapon: getRandomCharacterPoints(1, 10), shield: getRandomCharacterPoints(1, 10)},
  {name: "Jacques Chirac", health: 50, xp: getRandomCharacterPoints(1, 10), weapon: getRandomCharacterPoints(1, 10), shield: getRandomCharacterPoints(1, 10)},
  {name: "Bob l'éponge", health: 50, xp: getRandomCharacterPoints(1, 10), weapon: getRandomCharacterPoints(1, 10), shield: getRandomCharacterPoints(1, 10)}
]; */
const characters = [
    {
        name: 'Sienna',
        health: 50,
        xp: 9,
        weapon: 8,
        shield: 5,
    },
    {
        name: 'Faolan',
        health: 50,
        xp: 7,
        weapon: 6,
        shield: 10,
    },
    {
        name: 'Jin',
        health: 50,
        xp: 8,
        weapon: 7,
        shield: 7,
    },
    {
        name: 'Yushen',
        health: 50,
        xp: 10,
        weapon: 10,
        shield: 3,
    }
]
function getRandomCharacterPoints(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAttackerFromCharacters(characters) {
  return characters[Math.floor(Math.random()*characters.length)];
}

function getDefenderFromCharacters(characters, attacker) {
  let defender = attacker;
  while (defender === attacker) {
    defender = characters[Math.floor(Math.random()*characters.length)];
  }
  return defender;
}

function getAttackScore(attacker) {
  return attacker.xp + getRandomCharacterPoints(0, attacker.weapon);
}

function getDefenseScore(defender) {
  return defender.xp + getRandomCharacterPoints(0, defender.shield);
}
function combat(attacker, defender) {
  let attackScore = getAttackScore(attacker);
  let defenseScore = getDefenseScore(defender);
    
  console.log(`${attacker.name} (${attackScore}) attaque ${defender.name} (${defenseScore}) !`);
  if (attackScore > defenseScore) {
    defender.health -= attackScore;
    console.log(`${attacker.name} attaque ${defender.name} ! Il lui inflige ${attackScore} point de dégâts ! (${defender.health} points de vie restants)`);
    if (defender.health <= 0) {
      console.warn(`${defender.name} a perdu !`);
      return true;
    }
  } else {
    console.log(`${defender.name} s'est bien défendu !`);
  }
  return false;
}


function battle(characters) {
  while (characters.length > 1) {
    let attacker = getAttackerFromCharacters(characters);
    let defender = getDefenderFromCharacters(characters, attacker);
    let defenderKilled = combat(attacker, defender);
    if (defenderKilled) {
      let newCharacters = [];
      for (let i = 0; i < characters.length; i++) {
        if (characters[i].health > 0) {
          newCharacters.push(characters[i]);
        }
      }
      characters = newCharacters;
    }
  }
  console.error(`La bataille est terminée ! Le vainqueur est ${characters[0].name} !`);
}

battle(characters);
