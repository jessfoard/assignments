var favFoods [];

function User (name, type, withWhom, when) {
    this.name = name;
    this.type = type;
    this.withWhome = whithWhom;
    this.when = when;
    this.printFoods = function () {
        console.log('name: ' + this.name, 'type: ' + this.type, 'withWhom ' + this.whithWhom, 'when ' + this.when);
    }
}