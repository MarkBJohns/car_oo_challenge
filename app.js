// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      PART ONE

// --------------------------------------------------------------

class Vehicle{
    constructor(make,model,year){
        if(typeof year!=='number'||year.toString().length!==4){
            throw new Error('Please enter a full year');
        }
        this.make=make;
        this.model=model;
        this.year=year;
    }
    honk(){
        return 'Beep.'
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

// ----------------------------------------------------------------------------------------------------------------

//      PART TWO

// --------------------------------------------------------------

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels=4;
    }
}

// ----------------------------------------------------------------------------------------------------------------

//      PART THREE

// --------------------------------------------------------------

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels=2;
    }
    revEngine(){
        return 'VROOM!!!'
    }
}

// ----------------------------------------------------------------------------------------------------------------

//      PART FOUR

// --------------------------------------------------------------

class Garage{
    constructor(capacity){
        if(typeof capacity!=='number'||capacity<=0){
            throw new Error('Capacity must be more than 0');
        }
        this.capacity=capacity;
        this.vehicles=[];
    }
    add(vehicle){
        if(!(vehicle instanceof Vehicle)){
            return 'Only vehicles are allowed in here!'
        }
        if(this.vehicles.length<this.capacity){
            this.vehicles.push(vehicle);
            return 'Vehicle added!'
        }else {
            return "Sorry, we're full."
        }
    }
}

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

let myFirstVehicle=new Vehicle('Honda','Monser Truck',1999);
let myFirstCar=new Car('Toyota','Corolla',2005);
let myFirstMotorcycle=new Motorcycle('Honda','Nighthawk',2000);
let garage=new Garage(2);