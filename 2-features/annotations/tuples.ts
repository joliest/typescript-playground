const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// our tuple
// we now understand that there's meaning in th ordering of the tuple
// add type alias
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// it's still clear in object
// working in tuples, its not obvious in one glance
const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsepower: 400,
  weight: 3354,
};
