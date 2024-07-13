
const positionLatitude = 4;
const positionLongitude = 4;

const destinationLatitude = 6;
const destinationLongitude = 6;

const distance = Math.sqrt(((destinationLatitude - positionLatitude) ** 2) + ((destinationLongitude - positionLongitude) ** 2));

console.log(`Расстояние от точки (${positionLatitude}, ${positionLongitude}) до точки (${destinationLatitude}, ${destinationLongitude}) равно ${distance}`);
