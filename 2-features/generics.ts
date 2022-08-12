// two classes identical in nature
// the only difference is the types. numbers and strings
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: string): string {
    return this.collection[index];
  }
}

// using generics
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']);

// example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// recommended to ALWAYS add the type annotations of genrics in classes and functions
printAnything<string>(['a', 'b', 'c']);

// Generic Constraints
class Car {
  print() {
    console.log('I am a car');
  }
}
class House {
  print() {
    console.log('I am a car');
  }
}

interface Printable {
  print(): void;
}

// constraint that there will be print() available
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new Car()]);
printHousesOrCars([new House(), new Car()]);
printHousesOrCars<Car>([new Car(), new Car()]);
