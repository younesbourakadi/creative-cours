// Player 1
const p1NameCharacter = prompt("Nom du joueur numéro 1 ?");
const p1Level = 10;
const p1StrengthWeapon = 7;
const p1ShieldPower = 1;

// Player 2
const p2NameCharacter = prompt("Nom du joueur numéro 2 ?");
const p2Level = 5;
const p2StrengthWeapon = 7;
const p2ShieldPower = 4;

let attacker = prompt(`Qui attaque en premier ? ${p1NameCharacter} ou ${p2NameCharacter}`);
let defender;

let atkTotal;
let defTotal;

if (attacker == p1NameCharacter) {
    defender = p2NameCharacter;
    atkTotal = p1Level + Math.random() * p1StrengthWeapon;
    defTotal = p2Level + Math.random() * p2ShieldPower;
}
else {
    attacker = p2NameCharacter;
    defender = p1NameCharacter;
    atkTotal = p2Level + Math.random() * p2StrengthWeapon;
    defTotal = p1Level + Math.random() * p1ShieldPower;
}

const results = atkTotal > defTotal ? "gagné" : "perdu";

alert(`${attacker} a attaqué ${defender}. Il a ${results} avec un score de ${atkTotal}.`);





