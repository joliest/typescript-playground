let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let undefinedMuch: undefined = undefined;

// built in Object
let now: Date = new Date();


// Array
let colors: string[] = ['blue', 'red'];
let myNumbers: number[] = [1, 2, 3];
let truth: boolean[] = [true, true, false];

// Classes
class Car {

}
let car: Car = new Car();


// Object Literal
// use semi-colon (;) to separate
// you can add semi colon in 'y' if you want
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// functions
// arguments function to take or values it will return
// void is the return value
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}