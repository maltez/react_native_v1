class NinjaTurtle {
    constructor(name) {
        this.name = name;
    }

    fight(){
        return `${this.name} fight so nice`;
    }
}

const decorator = function(misha) {
    misha.xrayVision = function() {
        return `${this.name} see alcohol in the dark`;
    }
}

 const misha = new NinjaTurtle('Misha');
 const misha2 = new NinjaTurtle('Misha');

decorator(misha);
decorator(misha2) 