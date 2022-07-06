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

// flexible types
const importantDates = [new Date(), '2030-10-10'];
const importantDates2: (Date | string)[] = [new Date()];
importantDates2.push(new Date());
importantDates2.push('12-21-2003');
