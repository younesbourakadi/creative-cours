
const users = [
  {
    firstName: "Pierre",
    lastName: "Dupont",
    birthdate: "2000-05-23"
  },
  {
    firstName: "Samir",
    lastName: "Desquesmi",
    birthdate: "2012-02-13"
  },
  {
    firstName: "Peter",
    lastName: "Michel",
    birthdate: "piprout"
  },
  {
    firstName: "Loanne",
    lastName: "Tredima",
    birthdate: "2002-10-22"
  },
  {
    firstName: "Paul",
    lastName: "Bismuth",
    birthdate: "1972-10-08"
  },
  {
    firstName: "Tom",
    lastName: "Sawyer",
    birthdate: "1955-01-14"
  }
];


// Third solution
// for ... of loop and a best exception management with "continue"
for (const user of users) {
  // 
  const birthdate = new Date(user.birthdate);
  console.log(birthdate)
  user.premium1825 = false;


  // Is the birthdate an invalid date ?
  if (!(birthdate instanceof Date) || isNaN(birthdate)) continue;

  user.age = (new Date(Date.now() - birthdate)).getFullYear() - 1970;

  user.premium1825 = user.age >= 18 && user.age <=25;

}



function formatBirthdate(birthdate) {
  return new Date(birthdate);
}

function isValidDate(date) {
  return (date instanceof Date) || isNaN(date);
}

function getAgeFromDate(date) {
  return (new Date(Date.now() - date)).getFullYear() - 1970;
}

function isPremium1825(user) {
  const birthdate = formatBirthdate(user.birthdate);
  if (!isValidDate(birthdate)) return false;

  const age = getAgeFromDate(birthdate);
  user.age = age;
  return age >= 18 && age <= 25;
}

function addPremium1825ToUser(isPremium1825){
  user.premium1825 = isPremium1825;
}

