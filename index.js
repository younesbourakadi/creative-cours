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

// First solution
// for ... in loop
for (const index in users) {
    const birthdate = new Date(users[index].birthdate);
    // Is the birthdate a valid date ?
    if (birthdate instanceof Date && !isNaN(birthdate)) {
        // birthdate is valid
        age = (new Date(Date.now() - birthdate)).getFullYear() - 1970;
        users[index].age = age;
        users[index].premium1825 = age >= 18 && age <=25;
    } else {
        // birthdate is invalid
        users[index].birthdate = "birthdate is invalid";
    }
}

console.table(users);

// Second solution
// for ... of loop
for (const user of users) {
    const birthdate = new Date(user.birthdate);

    // Is the birthdate a valid date ?
    if (birthdate instanceof Date && !isNaN(birthdate)) {
        // birthdate is valid
        user.age = (new Date(Date.now() - birthdate)).getFullYear() - 1970;
    } else {
        // birthdate is invalid
        user.birthdate = "birthdate is invalid";
    }
    user.premium1825 = user.age >= 18 && user.age <=25;
}

console.table(users);
// Third solution
// for ... of loop and a best exception management with "continue"
for (const user of users) {
    const birthdate = new Date(user.birthdate);
    user.premium1825 = false;
    

    // Is the birthdate an invalid date ?
    if (!(birthdate instanceof Date) || isNaN(birthdate)) continue;

    user.age = (new Date(Date.now() - birthdate)).getFullYear() - 1970;
    user.premium1825 = user.age >= 18 && user.age <=25;
}

console.table(users);
