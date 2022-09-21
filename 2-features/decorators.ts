class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops the boat was sunk!')
  pilot(): void {
    throw new Error();
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, dsc: PropertyDescriptor): void {
    // method is now referenced to pilot()
    const method = dsc.value;

    dsc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

new Boat().pilot();
