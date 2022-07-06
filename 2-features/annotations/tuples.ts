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
