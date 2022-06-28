const add = (a: number, b: number) =>  {
  return a + b;
};

const subtract = (a: number, b: number) =>  {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
  // void can return null or undefined
}

// never means that it won't execute the function completely
// it means that it might throw error and does not continue the function
// we rarely use 'never'
// use it when you only expect a function to not run it completely
const throwError = (message: string): never => {
  throw new Error(message)
}

// destructuring annotation
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
}

const logWeather = ({ date, weather }: { date: Date, weather: 'string' }): void => {
  console.log(date);
  console.log(weather);
}

console.log(todaysWeather);
