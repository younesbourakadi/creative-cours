const char1 = prompt('Qui est le premier personnage ?');
const xp1 = 5;
const weapon1 = 6;
const shield1 = 4;

const char2 = prompt('Qui est le second personnage ?');
const xp2 = 5;
const weapon2 = 6;
const shield2 = 4; 

const attacker =  prompt(`Qui attaque ? ${char1} ou ${char2} ?`);
let attackScore;
let defenseSCore;

if (attacker === char1) {
    attackScore = xp1 + Math.random()*weapon1;
    defenseSCore = xp2 + Math.random()*shield2;
}
else {
    attackScore = xp2 + Math.random()*weapon2;
    defenseSCore = xp1 + Math.random()*shield1;
}

console.log(`${attacker} a attaqué ${attacker === char1 ? char2 : char1} et a ${attackScore > defenseSCore ? 'gagné' : 'perdu'} le combat.`);