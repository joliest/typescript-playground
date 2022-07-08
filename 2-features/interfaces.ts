interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

// replaced by interface
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.name);
  console.log(vehicle.broken);
  console.log(vehicle.year);
};

printVehicle(oldCivic);
