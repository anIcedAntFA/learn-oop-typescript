interface IDrive {
  drive: VoidFunction;
}

abstract class Vehicle {
  static numberOfVehicles: number = 0;
  public make: string;
  public model: string;
  protected _price: number;
  public year: number;
  public color: string;
  public seats: number;
  public passengers: number;

  constructor(
    make: string,
    model: string,
    price: number,
    year: number,
    color: string,
    seats: number,
    passengers: number
  ) {
    this.make = make;
    this.model = model;
    this._price = price;
    this.year = year;
    this.color = color;
    this.seats = seats;
    this.passengers = passengers;
    Vehicle.numberOfVehicles++;
  }

  abstract drive(): void;

  addPassenger() {
    if (this.passengers < this.seats) {
      this.passengers++;
      console.log('Passenger added');
    } else {
      console.log('Car is full');
    }
  }

  calculateTotalPrice(saleTax: number) {
    return this._price + this._price * saleTax;
  }

  static displayNumberOfVehicles() {
    console.log(`Number of vehicles: ${Vehicle.numberOfVehicles}`);
  }

  get price() {
    return this._price;
  }

  set price(newPrice: number) {
    const MIN_PRICE = 1000;

    if (newPrice > MIN_PRICE) {
      this._price = newPrice;
    } else {
      console.log(`Price must be greater than ${MIN_PRICE}`);
    }
  }
}

class Car extends Vehicle implements IDrive {
  private _engineStatus: boolean = false;

  constructor(
    make: string,
    model: string,
    price: number,
    year: number,
    color: string,
    seats: number,
    passengers: number
  ) {
    super(make, model, price, year, color, seats, passengers);
  }

  drive() {
    if (this._engineStatus) {
      console.log(`you drive the ${this.make} ${this.model}`);
    } else {
      console.log('Start the engine first');
    }
  }

  private startEngine() {
    this._engineStatus = true;
    console.log('Engine started');
  }

  public startCar() {
    this.startEngine();
    this.drive();
  }
}

class SportsCar extends Car {
  topSpeed: number;

  constructor(
    make: string,
    model: string,
    price: number,
    year: number,
    color: string,
    seats: number,
    passengers: number,
    topSpeed: number
  ) {
    super(make, model, price, year, color, seats, passengers);
    this.topSpeed = topSpeed;
  }
  driveFast() {
    console.log(
      `You drive the ${this.make} ${this.model} at ${this.topSpeed} mph!`
    );
  }
}

const car1 = new Car('Toyota', 'Corolla', 200, 2019, 'Red', 5, 1);
console.log('********* CAR 1 *********');
console.log(`Information of car1: ${car1.make} ${car1.model} ${car1.year}`);
Car.displayNumberOfVehicles();

const car2 = new Car('Toyota', 'Camry', 300, 2020, 'Blue', 5, 3);
console.log('********* CAR 2 *********');
car2.addPassenger();
console.log(car2.passengers);
car2.addPassenger();
console.log(car2.passengers);
car2.addPassenger();
Car.displayNumberOfVehicles();

const car3 = new Car('Toyota', 'Rav4', 500, 2021, 'Black', 2, 1);
const saleTax = 0.08;
const totalPrice = car3.calculateTotalPrice(saleTax);
console.log('********* CAR 3 *********');
console.log(`Total price with tax: ${totalPrice}`);
Car.displayNumberOfVehicles();

const sportCar1 = new SportsCar(
  'Ferrari',
  'anything',
  50000,
  2021,
  'Black',
  2,
  1,
  200
);
console.log('********* SPORT CAR 1 *********');
sportCar1.driveFast();
sportCar1.addPassenger();
console.log(sportCar1.passengers);
sportCar1.addPassenger();
console.log(sportCar1.passengers);
sportCar1.addPassenger();
Car.displayNumberOfVehicles();

const sportCar2 = new SportsCar(
  'Lamborghini',
  'anything',
  100000,
  2021,
  'Black',
  2,
  1,
  300
);
console.log('********* SPORT CAR 2 *********');
console.log(sportCar2.price);
sportCar2.price = 500;
sportCar2.price = sportCar2.price * 0.86;
console.log(sportCar2.price);
Car.displayNumberOfVehicles();

const sportCar3 = new SportsCar(
  'Porsche',
  'anything',
  100000,
  2021,
  'Black',
  2,
  1,
  300
);
console.log('********* SPORT CAR 3 *********');
sportCar3.drive();
sportCar3.startCar();
Car.displayNumberOfVehicles();
