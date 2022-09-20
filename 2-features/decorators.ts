class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();
  }
}

function logError(target: any, key: string, dsc: PropertyDescriptor): void {
  // method is now referenced to pilot()
  const method = dsc.value;

  dsc.value = function () {
    try {
      method();
    } catch (e) {
      console.log('Oops, boat was sunk!');
    }
  };
}

new Boat().pilot();
