import 'reflect-metadata';

const plane = {
  color: 'red',
};

// Reflect.defineMetadata('note', 'hi there', plane);
// const note = Reflect.getMetadata('note', plane);
// console.log(note);

// associating metadata to the color property
Reflect.defineMetadata('note', 'hi there', plane, 'color');
const note = Reflect.getMetadata('note', plane, 'color');
console.log(note);
