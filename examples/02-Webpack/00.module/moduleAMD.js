class BaseClass {

}

export class Public extends BaseClass{
    constructor() {
        super();
        this.__private__ = new Private();
    }
}

class Private {
    constructor() {
        this.name = 'Secret name';
    }
}
