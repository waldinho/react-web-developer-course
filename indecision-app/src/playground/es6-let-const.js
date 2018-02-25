var nameVar = 'James';
var nameVar = 'Jimsee';
console.log('nameVar', nameVar);

let nameLet = 'James';
nameLet = 'Keely'; 
console.log('nameLet', nameLet);

const nameConst = 'Matty';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'James Waller';
let firstName;

if (fullName) {
    const firstName = fullName.split(' ')[0]
    console.log('firstName:', firstName);
}

console.log('firstName:', firstName);