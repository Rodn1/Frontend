class Car {
    constructor(speed) {
        this.speed = speed;
    }
    viewSpeed(){
        console.log("Моя скорость:",`${this.speed}`);
    }
}
let Audi = new Car(300);
Audi.viewSpeed();

