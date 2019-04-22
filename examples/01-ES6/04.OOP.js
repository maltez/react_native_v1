class Travel {
    constructor(destination) {
        this.destination = destination;
    }

    get travelPoint() {
        return this.destination;
    }

    set travelPoint(value) {
        this.destination = `${value} from setter`;
    }

    restInPeace() {
        console.log(`In ${this.destination} I rest good! :(`);
    }
}

const travelToDominican = new Travel('Dominican Republic');
travelToDominican.travelPoint = 'Soviet Russia';
travelToDominican.restInPeace();
console.log(travelToDominican.travelPoint)