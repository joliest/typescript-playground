const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// two dimensional arrays
const carsByMake = [['f150'], ['corola'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
