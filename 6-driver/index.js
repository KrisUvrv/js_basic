const hasLicence = true;
const age = 18;
const isDrunk = false;

const canDrive = hasLicence && age >= 18 && !isDrunk;
console.log(`Может ли сесть за руль: ${canDrive ? 'Да' : 'Нет'}`);
